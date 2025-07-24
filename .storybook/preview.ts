import type { Preview } from "@storybook/nextjs";

import '../src/assets/styles/setup';
import '../src/assets/styles/fonts.scss';

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
