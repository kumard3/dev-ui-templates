/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.STATIC_EXPORT ? "export" : undefined,
  transpilePackages: ["@devui/ui"],
};

export default nextConfig;
