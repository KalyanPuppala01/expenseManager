module.exports = {
  ci: {
    collect: {
      // Static site example
      staticDistDir: "https://moneyview.in",
      numberOfRuns: 5,
      // Dynamic site example
      // startServerCommand: 'npm run start',
    },
    upload: {
      /* Add configuration here */
      target: "temporary-public-storage",
    },
  },
};
