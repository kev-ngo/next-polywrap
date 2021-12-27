/** @type {import('next').NextConfig} */

// To fix missing modules issue for fs, path, and os.

module.exports = {
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false, os: false };

    return config;
  },
};
