module.exports = {
  ci: {
    collect: {
      // Static site example
      staticDistDir: "./",
      // Dynamic site example
      // startServerCommand: 'npm run start',
    },
    upload: {
      /* Add configuration here */
      target: "filesystem",
    },
  },
};
