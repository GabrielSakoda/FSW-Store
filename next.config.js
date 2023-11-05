/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["fsw-store.s3.sa-east-1.amazonaws.com"] // permite que imagens desse domínio sejam carregadas
    },
    experimental: {
        serverActions: true,
    }, 
};

module.exports = nextConfig
