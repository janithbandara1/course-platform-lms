import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: [
        "localhost:3000", // localhost
        "miniature-spork-gvpwv4pv5gphpgqv-3000.app.github.dev", // Codespaces
      ],
    },
    dynamicIO: true,
    authInterrupts: true,
  },
};

export default nextConfig;
