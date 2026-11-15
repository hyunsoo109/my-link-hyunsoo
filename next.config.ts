import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_BASE_PATH: isGitHubPages ? "/my-link-hyunsoo" : "",
  },
  ...(isGitHubPages
    ? {
        output: "export" as const,
        basePath: "/my-link-hyunsoo",
        trailingSlash: true,
        images: {
          unoptimized: true,
        },
      }
    : {}),
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
