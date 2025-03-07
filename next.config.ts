import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        domains: [
            'i.pravatar.cc',
            'i.imgur.com',
            'placeimg.com',
            'api.lorem.space',
            'images.pexels.com',
            'via.placeholder.com',
            'pravatar.cc',
            'loremflickr.com',
        ],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.imgur.com',
                port: '',
                pathname: '/**',
                search: '',
            },
            {
                protocol: 'https',
                hostname: 'i.pravatar.cc',
                port: '',
                pathname: '/**',
                search: '**',
            },
            {
                protocol: 'https',
                hostname: 'placeimg.com',
                port: '',
                pathname: '/**',
                search: '**',
            },
            {
                protocol: 'https',
                hostname: 'api.lorem.space',
                port: '',
                pathname: '/**',
                search: '**',
            },
            {
                protocol: 'https',
                hostname: 'images.pexels.com',
                port: '',
                pathname: '/**',
                search: '**',
            },
            {
                protocol: 'https',
                hostname: 'via.placeholder.com',
                port: '',
                pathname: '/**',
                search: '**',
            },
            {
                protocol: 'https',
                hostname: 'pravatar.cc',
                port: '',
                pathname: '/**',
                search: '**',
            },
            {
                protocol: 'https',
                hostname: 'loremflickr.com',
                port: '',
                pathname: '/**',
                search: '**',
            },
        ],
    },
};

export default nextConfig;
