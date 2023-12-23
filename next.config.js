/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    swcPlugins: [["@preact-signals/safe-react/swc", {}]],
  },
};

module.exports = nextConfig;
