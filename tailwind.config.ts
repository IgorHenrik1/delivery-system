import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primaria: '#121214',
                secundaria: '#202024',
                terciaria: '#29292E',
                roxo: 'rgb(130, 52, 233)',
                branco: '#fff',
            },
        },
    },
    plugins: [],
};
export default config;
