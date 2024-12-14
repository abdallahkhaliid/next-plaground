/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "llvkobvznbnbffuajrla.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/cabin-image/**",
      },
    ],
  },
  images: {
    unoptimized: true, // Disable image optimization
  },
};

export default nextConfig;
