/** @type {import("next").NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx"],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'files.catbox.moe',
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true
  }
};

export default nextConfig;