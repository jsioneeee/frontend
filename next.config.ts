import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  output: "export", // ✅ Enables static export mode
};

export default nextConfig;
