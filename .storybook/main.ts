import type { StorybookConfig } from "@storybook/nextjs";
import path from 'path';

const config: StorybookConfig = {
    stories: [
        "../src/**/*.mdx",
        "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
    ],
    addons: [
        "@storybook/addon-onboarding",
        "@chromatic-com/storybook",
        "@storybook/addon-docs"
    ],
    framework: {
        name: "@storybook/nextjs",
        options: {},
    },
    staticDirs: [
        "..\\public",
        {
            from: '../src/app/fonts/Merriweather',
            to: 'src/components',
        },
    ],
    webpackFinal: async (config) => {
        if (config.resolve) {
            config.resolve.alias = {
                ...config.resolve.alias,
                '@styles': path.resolve(__dirname, '../src/app/styles'),
            };
        }
        return config;
    },
};

export default config;
