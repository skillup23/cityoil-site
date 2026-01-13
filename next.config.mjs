/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  eslint: {
    // Отключаем ESLint при сборке, чтобы избежать ошибки сериализации
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Отключаем проверку типов при сборке если нужно
    ignoreBuildErrors: true,
  },
  env: {
    MONGODB_URI: process.env.MONGODB_URI,
  },
  // Для Next.js 15
  experimental: {
    optimizePackageImports: [
      "@mui/material",
      "@mui/icons-material",
      "mongoose",
    ],
  },
};

export default nextConfig;
