/** @type {import('next').NextConfig} */
const nextConfig = {
    compress: false,
    images: {
        remotePatterns: [
            new URL('http://localhost:9000/public/**'),
        ],
    },
};

export default nextConfig;
