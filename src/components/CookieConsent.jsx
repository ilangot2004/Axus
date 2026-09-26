import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Cookie, X } from 'lucide-react';
import '../styles/CookieConsent.css';

const COOKIE_STORAGE_KEY = 'axus_cookie_consent';

const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isAttention, setIsAttention] = useState(false);
    const barRef = useRef(null);
    const attentionTimeoutRef = useRef(null);
    const lastAttentionTimeRef = useRef(0);

    const triggerAttention = useCallback(() => {
        const now = Date.now();
        if (now - lastAttentionTimeRef.current < 500) return;
        lastAttentionTimeRef.current = now;

        setIsAttention(false);
        requestAnimationFrame(() => {
            setIsAttention(true);
            if (attentionTimeoutRef.current) clearTimeout(attentionTimeoutRef.current);
            attentionTimeoutRef.current = setTimeout(() => {
                setIsAttention(false);
            }, 600);
        });
    }, []);

    useEffect(() => {
        const consent = localStorage.getItem(COOKIE_STORAGE_KEY);
        if (!consent) {
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 800);
            return () => clearTimeout(timer);
        }
    }, []);

    useEffect(() => {
        const handleOpen = () => setIsVisible(true);
        window.addEventListener('open-cookie-consent', handleOpen);
        return () => window.removeEventListener('open-cookie-consent', handleOpen);
    }, []);

    // Prevent page scrolling while cookie popup is open and trigger gentle motion on interaction attempt
    useEffect(() => {
        if (isVisible) {
            document.body.style.overflow = 'hidden';

            const handleOutsideClick = (e) => {
                if (barRef.current && !barRef.current.contains(e.target)) {
                    triggerAttention();
                }
            };

            const handleScrollAttempt = () => {
                triggerAttention();
            };

            const handleKeyScroll = (e) => {
                if (['ArrowDown', 'ArrowUp', 'Space', 'PageDown', 'PageUp'].includes(e.code)) {
                    triggerAttention();
                }
            };

            window.addEventListener('click', handleOutsideClick, true);
            window.addEventListener('wheel', handleScrollAttempt, { passive: true });
            window.addEventListener('touchmove', handleScrollAttempt, { passive: true });
            window.addEventListener('keydown', handleKeyScroll);

            return () => {
                document.body.style.overflow = '';
                window.removeEventListener('click', handleOutsideClick, true);
                window.removeEventListener('wheel', handleScrollAttempt);
                window.removeEventListener('touchmove', handleScrollAttempt);
                window.removeEventListener('keydown', handleKeyScroll);
            };
        } else {
            document.body.style.overflow = '';
        }
    }, [isVisible, triggerAttention]);

    const handleAccept = () => {
        localStorage.setItem(COOKIE_STORAGE_KEY, 'accepted');
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem(COOKIE_STORAGE_KEY, 'declined');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <aside
            ref={barRef}
            className={`cookie-consent-bar ${isAttention ? 'attention-nudge' : ''}`}
            aria-label="Cookie consent banner"
            role="dialog"
        >
            <div className="cookie-consent-container">
                <div className="cookie-text-wrapper">
                    <div className="cookie-icon-badge">
                        <Cookie size={18} />
                    </div>
                    <p className="cookie-consent-text">
                        We use cookies to personalize your experience, analyze website traffic, and optimize performance. By clicking "Accept All", you agree to our use of cookies. Learn more in our{' '}
                        <Link to="/cookie-policy" onClick={() => setIsVisible(false)}>
                            Cookie Policy
                        </Link>.
                    </p>
                </div>

                <div className="cookie-consent-actions">
                    <button
                        type="button"
                        className="cookie-btn cookie-btn-decline"
                        onClick={handleDecline}
                    >
                        Necessary Only
                    </button>
                    <button
                        type="button"
                        className="cookie-btn cookie-btn-accept"
                        onClick={handleAccept}
                    >
                        Accept All
                    </button>
                    <button
                        type="button"
                        className="cookie-close-btn"
                        onClick={handleDecline}
                        aria-label="Dismiss cookie banner"
                    >
                        <X size={16} />
                    </button>
                </div>
            </div>
        </aside>
    );
};

export default CookieConsent;
