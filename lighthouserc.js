module.exports = {
  ci: {
    collect: {
      // // Static site example
      // staticDistDir: "./project/",
      // Dynamic site example
      // startServerCommand: "npm run start",
      url: "https://moneyview.in/",
      numberOfRuns: 1,
    },
    assert: {
      assertions: {
        "categories:performance": ["warn", { minScore: 0.6 }],
        "categories:accessibility": ["error", { minScore: 0.6 }],
      },
    },
    upload: {
      /* Add configuration here */
      target: "lhci",
      serverBaseUrl: "http://localhost:9001/",
      token: "0000ce91-d9be-42bb-af0b-98c84996f7a1",
    },
  },
};
