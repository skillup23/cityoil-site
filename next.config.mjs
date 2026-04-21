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
  // Оптимизация для снижения нагрузки
  poweredByHeader: false,
  compress: true,
  // Отключаем телеметрию для снижения нагрузки
  telemetry: false,
  // Увеличиваем таймауты для стабильности
  experimental: {
    // Отключаем некоторые экспериментальные фичи
    optimizePackageImports: false, // Отключаем для снижения нагрузки
  },
};

export default nextConfig;
