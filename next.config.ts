import type { NextConfig } from "next";

const onePageRedirects = [
  "about",
  "services",
  "resume",
  "portfolio",
  "clients",
  "case-studies",
  "contact",
].map((path) => ({
  source: `/${path}`,
  destination: `/#${path}`,
  permanent: false,
}));

const nextConfig: NextConfig = {
  redirects: async () => onePageRedirects,
};

export default nextConfig;
