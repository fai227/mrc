module.exports = {
  eslint: {
    // Warning: Dangerously allow production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  trailingSlash: true,
  // images: {
  //   disableStaticImages: true,
  // },
  i18n: {
    locales: ["ja-JP", "en"],
    defaultLocale: "en",
  },
};
