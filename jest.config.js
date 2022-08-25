/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  verbose: true,
  testEnvironment: "jsdom",
  moduleNameMapper: {
    ".scss": "identity-obj-proxy",
  },
};

module.exports = config;
