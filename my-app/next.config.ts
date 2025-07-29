import type { NextConfig } from "next";

 
const nextConfig = {
  images: {
    domains: [
      "lh3.googleusercontent.com",        // ✅ Google profile pictures
      "avatars.githubusercontent.com",    // ✅ GitHub
      "media.licdn.com",                  // ✅ LinkedIn
    ],
  },
};

export default nextConfig;

