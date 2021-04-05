module.exports = {
  rewrites: async () => [
    {
      source: '/',
      destination: '/another-page'
    },
  ],

  i18n: {
    localeDetection: false,
    locales: ['en-US', 'fr-CA'],
    defaultLocale: 'en-US',
    domains: [
      {
        domain: 'us-vercel-trailing-slash-i18n-bug.vercel.app',
        defaultLocale: 'en-US',
      },
      {
        domain: 'ca-vercel-trailing-slash-i18n-bug.vercel.app',
        defaultLocale: 'fr-CA',
      },
    ],
  },
}
