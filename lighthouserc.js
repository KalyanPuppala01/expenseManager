module.exports = {
  ci: {
    collect: {
      // Static site example
      // staticDistDir: "https://moneyview.in",
      numberOfRuns: 3,
      url: ["./project/"],
      // Dynamic site example
      // startServerCommand: 'npm run start',
    },
    assert: {
      assertions: {
        "categories:performance": ["warn", { minScore: 0.6 }],
        "categories:accessibility": ["error", { minScore: 0.6 }],
      },
    },
    upload: {
      /* Add configuration here */
      target: "temporary-public-storage",
    },
  },
};
