/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [new URL("https://static.wixstatic.com/**")],
    unoptimized: true,
  },
};

export default nextConfig;
