/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      new URL("https://static.wixstatic.com/**"),
      new URL("https://lh3.googleusercontent.com/**"),
    ],
    unoptimized: true,
  },
};

export default nextConfig;
