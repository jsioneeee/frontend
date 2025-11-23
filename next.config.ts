import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable React Compiler
  reactCompiler: true,

  // Tell Next.js to generate static files for deployment
  output: "export",
};

export default nextConfig;
