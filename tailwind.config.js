/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class', /*'[data-mode="dark"]'],*/
    content: [
        "*.html",
    ],
    theme: {
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px',
        },
        fontFamily: {
            display: ['Source Serif Pro', 'Georgia', 'serif'],
            body: ['Synonym', 'system-ui', 'sans-serif'],
            sans: ['"Inter", sans-serif'],
        },
        extend: {
            fontSize: {
                'h1': '36',
                'h2': '2rem',
                'h3': '1.75rem',
                'h4': '1.5rem',
                'h5': '1.25rem',
                'h6': '1rem',
            },
            fontWeight: {
                'h1': '700',
                'h2': '600',
                'h3': '500',
                'h4': '400',
                'h5': '300',
                'h6': '200',
            },
            colors: {
                primary: "#6C63FF",
                secondary: "#46E8B0",
                accent: "#FF6B6B",
                dark: "#0d1117",
                light: "#f8fafc",
                'bg-primary': '#f8fafc',
                'bg-secondary': '#e2e8f0',
                'text-primary': '#1e293b',
                'text-secondary': '#475569',
                'accent-primary': '#6C63FF',
                'accent-secondary': '#46E8B0',
                'accent-tertiary': '#FF6B6B',
                'card-bg': 'rgba(255, 255, 255, 0.9)',
                'card-border': 'rgba(108, 99, 255, 0.2)',
                'header-bg': 'rgba(255, 255, 255, 0.95)',
                'skill-bg': 'rgba(108, 99, 255, 0.1)',
                'timeline-bg': 'rgba(241, 245, 249, 0.8)',
                'particle-opacity': '0.05',
                'dark-bg-primary': '#0d1117',
                'dark-bg-secondary': '#161b22',
                'dark-text-primary': '#c9d1d9',
                'dark-text-secondary': '#8b949e',
                'dark-accent-primary': '#6C63FF',
                'dark-accent-secondary': '#46E8B0',
                'dark-accent-tertiary': '#FF6B6B',
                'dark-card-bg': 'rgba(22, 27, 34, 0.8)',
                'dark-card-border': 'rgba(108, 99, 255, 0.3)',
                'dark-header-bg': 'rgba(22, 27, 34, 0.9)',
                'dark-skill-bg': 'rgba(108, 99, 255, 0.2)',
                'dark-timeline-bg': 'rgba(32, 36, 44, 0.5)',
                'dark-particle-opacity': '0.2',
            },
            animation: {
                'bounce': 'bounce 0.5s infinite',
                'bounce-100': 'bounce 0.5s 100ms infinite',
                'bounce-200': 'bounce 0.5s 200ms infinite',
                'bounce-300': 'bounce 0.5s 300ms infinite',
                'bounce-400': 'bounce 0.5s 400ms infinite',
                'bounce-500': 'bounce 0.5s 500ms infinite',
                'bounce-600': 'bounce 0.5s 600ms infinite',
                'heartpulse': 'heartpulse 1s infinite',
                'spin': 'spin 2s linear infinite',
                'spin-200': 'spin 0.5s linear infinite',
                'gradient': 'gradient 5s ease infinite',
            },

            keyframes: {
                bounce: {
                    '0%': { opacity: 1 },
                    '50%': { opacity: 0.5 },
                    '100%': { opacity: 1 },
                },
                heartpulse: {
                    '0%': { transform: 'scale(1)' },
                    '50%': { transform: 'scale(1.2)' },
                    '100%': { transform: 'scale(1)' },
                },
                spin: {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' },
                },
                gradient: {
                    '0%': { "background-position": "0% 50%" },
                    '50%': { "background-position": "100% 50%" },
                    '100%': { "background-position": "0% 50%" },
                },
            },
            /*gradientColorStops: {
             *          'gradient-primary': '#00b4d8',
             *          'gradient-secondary': '#00ffcc',
        },*/
        },
        plugins: [
            /*require('tailwind-scrollbar'),
             *        require('flowbite/plugin')({
             *            charts: true,
      }),
      innerShadow*/
        ],
    }
}
