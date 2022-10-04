/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
    verbose: true,
    testEnvironment: "jsdom",
    moduleNameMapper: {
        ".scss": "identity-obj-proxy",
    },
    testMatch: [
        "<rootDir>/src/**/__tests__/**/*.test.tsx"
    ],
    setupFilesAfterEnv: [
        '@testing-library/jest-dom/extend-expect',
        '<rootDir>/jest.setup.js'
    ],
    collectCoverageFrom: [
        "<rootDir>/src/components/**/*.tsx",
        "!<rootDir>/src/**/stories/*"
    ],
};

module.exports = config;
