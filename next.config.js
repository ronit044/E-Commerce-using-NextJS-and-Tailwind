// next.config.js

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    images: {
      domains: ['fakestoreapi.com'], // Add the domain(s) from which you are fetching images
    },
    output:"export",
  };
  
  module.exports = nextConfig;
  