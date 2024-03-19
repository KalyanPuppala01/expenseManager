module.exports = {
  ci: {
    collect: {
      // Static site example
      staticDistDir: "./project/",
      numberOfRuns: 3,
      url: ["http://localhost:8080"],
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
