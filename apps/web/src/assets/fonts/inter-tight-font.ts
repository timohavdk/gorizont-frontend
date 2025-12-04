import localFont from 'next/font/local';

const interTightFont = localFont({
    src: [
        {
            path: './InterTight/InterTight-Regular.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: './InterTight/InterTight-Italic.ttf',
            weight: '400',
            style: 'italic',
        },
        {
            path: './InterTight/InterTight-Bold.ttf',
            weight: '700',
            style: 'normal',
        },
        {
            path: './InterTight/InterTight-BoldItalic.ttf',
            weight: '700',
            style: 'italic',
        },
    ],
    display: 'swap',
    variable: '--inter-tight-font',
});

export default interTightFont;
