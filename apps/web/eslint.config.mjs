import eslintPluginAstro from 'eslint-plugin-astro';
import {config} from "@repo/eslint-config/react-internal";

export default [
    ...eslintPluginAstro.configs.recommended,
    ...config,
    {
        rules: {
        }
    }
];