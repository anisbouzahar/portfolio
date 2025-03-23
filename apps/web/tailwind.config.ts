import type { Config } from 'tailwindcss';
import path from 'path';

const config: Config = {
    content: [
        path.resolve(__dirname, '../../packages/ui/**/*.{js,ts,jsx,tsx}'),
    ]
};
export default config;
