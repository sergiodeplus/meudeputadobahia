/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                ink: '#0a0a0a',
                paper: '#f5f0e8',
                'paper-dark': '#e8e2d2',
                red: {
                    DEFAULT: '#c0392b',
                    dark: '#8e1a0e',
                },
                amber: {
                    DEFAULT: '#d97706',
                },
                green: {
                    DEFAULT: '#1a6e3c',
                }
            },
            fontFamily: {
                serif: ['"Playfair Display"', 'Georgia', 'serif'],
                sans: ['"IBM Plex Sans"', 'sans-serif'],
                mono: ['"IBM Plex Mono"', 'monospace'],
            }
        }
    },
    plugins: [],
}
