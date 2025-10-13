/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.ritu25.live",
        port: "",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
