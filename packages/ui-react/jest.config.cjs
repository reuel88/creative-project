module.exports = {
  roots: ["<rootDir>/src"],
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/**/*.d.ts",
    "!src/mocks/**",
  ],
  collectCoverage: true,
  coverageReporters: ["json", "lcov", "text", "html"],
  coveragePathIgnorePatterns: [".stories.tsx", ".stories.ts"],
  coverageThreshold: {
    global: {
      statements: 30,
      branches: 10,
      functions: 10,
      lines: 20,
    },
  },
  setupFilesAfterEnv: ["./config/jest/setupTests.cjs"],
  testEnvironment: "jsdom",
  modulePaths: ["<rootDir>/src"],
  transform: {
    "^.+\\.(ts|js|cjs|tsx|jsx)$": "@swc/jest",
    "^.+\\.css$": "<rootDir>/config/jest/cssTransform.cjs",
    "^(?!.*\\.(js|jsx|mjs|cjs|ts|tsx|css|json)$)":
      "<rootDir>/config/jest/fileTransform.cjs",
  },
  transformIgnorePatterns: [
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$",
    "^.+\\.module\\.(css|sass|scss)$",
  ],
  moduleNameMapper: {
    "^react-native$": "react-native-web",
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
  },
  moduleFileExtensions: [
    // Place tsx and ts to beginning as suggestion from Jest team
    // https://jestjs.io/docs/configuration#modulefileextensions-arraystring
    "tsx",
    "ts",
    "web.js",
    "js",
    "web.ts",
    "web.tsx",
    "json",
    "web.jsx",
    "jsx",
    "node",
  ],
  watchPlugins: [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname",
  ],
  resetMocks: true,
};
