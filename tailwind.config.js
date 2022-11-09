module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx,vue}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Open Sans']
            },
            boxShadow: {
                '50': '0px 5px 10px rgba(0, 0, 0, 0.25);',
                '100': '0px 4px 20px rgba(0, 0, 0, 0.25)',
                '200': '0 10px 10px rgba(0,0,0,.2)',
                '300': '0 15px 15px rgba(0,0,0,.2)',
            },
            height: {
                '15': '3.75rem',
                '18': '4.5rem'
            },
            width: {
                '18': '4.5rem'
            },
            colors: {
                'neutral-900': '#181818'
            },
            padding: {
                '1/5': '20%',
                '3/5': '60%',
            },
            screens: {
                'max-sm': { 'max': '639px' },
                'touch': { 'raw': '(pointer: coarse)' },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
