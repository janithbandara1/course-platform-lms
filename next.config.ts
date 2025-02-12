import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: [
        "localhost:3000", // localhost
        "fluffy-space-journey-jj7p4jj4wg7r3jr6g-3000.app.github.dev", // Codespaces
      ],
    },
    dynamicIO: true,
    authInterrupts: true,
  },
};

export default nextConfig;
