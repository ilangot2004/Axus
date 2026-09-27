import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const BRAND_SUFFIX = ' | Axus Infotech';
const DEFAULT_TITLE = 'Axus Infotech | AI-Driven Web, App & Software Innovation Experts';

const ROUTE_TITLES = {
    '/': DEFAULT_TITLE,
    '/about': `About Us${BRAND_SUFFIX}`,
    '/services': `Services${BRAND_SUFFIX}`,
    '/portfolio': `Portfolio${BRAND_SUFFIX}`,
    '/contact': `Contact Us${BRAND_SUFFIX}`,
    '/solutions': `Solutions${BRAND_SUFFIX}`,
    '/for-individuals': `For Individuals${BRAND_SUFFIX}`,
    '/for-teams': `For Teams${BRAND_SUFFIX}`,
    '/for-large-companies': `For Large Companies${BRAND_SUFFIX}`,
    '/privacy-policy': `Privacy Policy${BRAND_SUFFIX}`,
    '/terms-of-service': `Terms of Service${BRAND_SUFFIX}`,
    '/cookie-policy': `Cookie Policy${BRAND_SUFFIX}`,
    '/refund-policy': `Refund Policy${BRAND_SUFFIX}`,
    '/legal': `Legal${BRAND_SUFFIX}`
};

const HASH_TITLES = {
    '#about': `About Us${BRAND_SUFFIX}`,
    '#services': `Services${BRAND_SUFFIX}`,
    '#portfolio': `Portfolio${BRAND_SUFFIX}`
};

const TIER_TITLES = {
    'individuals': `For Individuals${BRAND_SUFFIX}`,
    'teams': `For Teams${BRAND_SUFFIX}`,
    'large-companies': `For Large Companies${BRAND_SUFFIX}`
};

const RouteTitle = () => {
    const location = useLocation();

    useEffect(() => {
        const { pathname, search, hash } = location;

        // 1. Check Solutions with Tier Query Param
        if (pathname === '/solutions') {
            const params = new URLSearchParams(search);
            const tier = params.get('tier');
            if (tier && TIER_TITLES[tier]) {
                document.title = TIER_TITLES[tier];
                return;
            }
            document.title = `Solutions${BRAND_SUFFIX}`;
            return;
        }

        // 2. Check Static Pathname
        if (pathname !== '/' && ROUTE_TITLES[pathname]) {
            document.title = ROUTE_TITLES[pathname];
            return;
        }

        // 3. Homepage with Hash (e.g. /#about, /#services, /#portfolio)
        if (pathname === '/' && hash && HASH_TITLES[hash]) {
            document.title = HASH_TITLES[hash];
            return;
        }

        // 4. Fallback Default Homepage
        document.title = DEFAULT_TITLE;
    }, [location]);

    // Optional: On the homepage, update title dynamically as user scrolls through sections
    useEffect(() => {
        if (location.pathname !== '/') return;

        const sectionIds = ['about', 'portfolio', 'services'];
        const elements = sectionIds
            .map(id => document.getElementById(id))
            .filter(Boolean);

        if (elements.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                // If user is near the very top of the page, show default home title
                if (window.scrollY < 300) {
                    document.title = DEFAULT_TITLE;
                    return;
                }

                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const hashKey = '#' + entry.target.id;
                        if (HASH_TITLES[hashKey]) {
                            document.title = HASH_TITLES[hashKey];
                        }
                    }
                });
            },
            {
                root: null,
                rootMargin: '-20% 0px -40% 0px',
                threshold: 0.2
            }
        );

        elements.forEach(el => observer.observe(el));

        const handleScrollTop = () => {
            if (window.scrollY < 200 && !window.location.hash) {
                document.title = DEFAULT_TITLE;
            }
        };

        window.addEventListener('scroll', handleScrollTop, { passive: true });

        return () => {
            observer.disconnect();
            window.removeEventListener('scroll', handleScrollTop);
        };
    }, [location.pathname]);

    return null;
};

export default RouteTitle;
