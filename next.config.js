await import("./src/env.js");
/** @type {import('next').NextConfig} */
const nextConfig = {
    // add remote url to allow images to be loaded from external sources
    images: {
        domains: ["illustrations.popsy.co"],
    },
};

export default nextConfig;
