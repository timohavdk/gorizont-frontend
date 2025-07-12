import type { Preview } from "@storybook/nextjs";
import '../src/app/setup';
import '../src/app/styles/fonts.scss';

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
};

export default preview;
