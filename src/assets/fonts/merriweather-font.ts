import localFont from 'next/font/local';

const merriweatherFont = localFont({
    src: [
        {
            path: './Merriweather/Merriweather-Regular.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: './Merriweather/Merriweather-Italic.ttf',
            weight: '400',
            style: 'italic',
        },
        {
            path: './Merriweather/Merriweather-Bold.ttf',
            weight: '700',
            style: 'normal',
        },
        {
            path: './Merriweather/Merriweather-BoldItalic.ttf',
            weight: '700',
            style: 'italic',
        },
    ],
    display: 'swap',
    variable: '--merriweather-font',
});

export default merriweatherFont;
