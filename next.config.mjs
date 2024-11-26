/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: false,
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true, // Désactiver la vérification TypeScript
  },
};

export default nextConfig;
