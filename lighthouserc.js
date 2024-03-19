module.exports = {
  ci: {
    collect: {
      // Static site example
      // staticDistDir: "https://moneyview.in",
      numberOfRuns: 5,
      url: ["https://moneyview.in"],
      // Dynamic site example
      // startServerCommand: 'npm run start',
    },
    upload: {
      /* Add configuration here */
      target: "temporary-public-storage",
    },
  },
};
