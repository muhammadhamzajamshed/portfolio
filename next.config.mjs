/** @type {import('next').NextConfig} */
// GitHub Pages deploy (repo pages): https://<user>.github.io/<repo>/
// Repo name must match your GitHub repository.
const repoName = "portfolio"

const isProd = process.env.NODE_ENV === "production"
const basePath = isProd ? `/${repoName}` : ""

const nextConfig = {
  // Static export for GitHub Pages
  output: "export",
  trailingSlash: true,

  // GitHub Pages is served from a subpath (/<repo>)
  basePath,
  assetPrefix: basePath,

  typescript: {
    ignoreBuildErrors: true,
  },

  // Required for next/image on static export
  images: {
    unoptimized: true,
  },

  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
}

export default nextConfig
