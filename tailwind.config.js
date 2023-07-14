/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        screens: {
            xs: '400px',
            md: '840px',
            dl: '932px',
        },
        backgroundImage: {
            '404-page':
                'url(https://firebasestorage.googleapis.com/v0/b/online-multiple-choice-exam.appspot.com/o/gifs%2Fdribbble_1.gif?alt=media&token=b1d6d021-430e-42a1-a3b9-d4cfb0f0e2a8)',
        },
    },
    plugins: [],
};
