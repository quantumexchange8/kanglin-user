import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter", ...defaultTheme.fontFamily.sans],
            },

            backgroundImage: {
                'linear': 'linear-gradient(90deg, #531985 0.21%, #A44A98 93.09%)',
                'linear-dark': 'linear-gradient(90deg, #3D1262 0.21%, #832E78 93.09%)',
            },
            
            colors: {
                'indigo': {
                    25: '#fcf9ff',
                    50: '#faf5ff',
                    100: '#f2e8ff',
                    200: '#e8d4ff',
                    300: '#d6b2ff',
                    400: '#bd82fe',
                    500: '#a452fa',
                    600: '#8e2fee',
                    700: '#7a1ed2',
                    800: '#681eab',
                    900: '#531985',
                    950: '#390566',
                },
                'gray': {
                    25: '#f9fafc',
                    50: '#f6f7f9',
                    100: '#edeef1',
                    200: '#d7dbe0',
                    300: '#b4bcc5',
                    400: '#8b96a5',
                    500: '#6d798a',
                    600: '#525c6b',
                    700: '#474f5d',
                    800: '#3d444f',
                    900: '#363b44',
                    950: '#24272d',
                },
                'red':{
                    50: '#fff1f3',
                    200: '#ffc5cf',
                    600: '#ed1539',
                    800: '#ba122e',
                    950: '#8a0319',
                },
                'yellow':{
                    50: '#fefbe8',
                    200: '#ffed89',
                    600: '#ce8703',
                    800: '#966407',
                    950: '#421e06',
                },
                'green':{
                    50: '#f1fcf4',
                    200: '#c0f2d1',
                    600: '#21984d',
                    800: '#10612e',
                    950: '#082b17',
                },
                'blue':{
                    50: '#f0f9ff',
                    200: '#b9e7fe',
                    600: '#0084c2',
                    800: '#0874a7',
                    950: '#07304a',
                },
                'white': '#ffffff',
                'secondary': '#7c4696',
                'tertiary': '#a44a98',
                'teal': '#00BBA7',
            },
        },

        fontSize: {
            '3xs': ['8px', '10px'],
            'xxs': ['10px', '12px'],
            xs: ['12px', '16px'],
            sm: ['14px', '18px'],
            base: ['16px', '20px'],
            lg: ['20px', '22px'],
            xl: ['24px', '26px'],
            '2xl': ['32px', '34px'],
            '3xl': ['40px', '42px'],
        },

        screens: {
            'xl': '1440px',
            'lg': '1024px',
            'md': '768px',
            'sm': '360px',
        }
    },

    plugins: [forms],
};
