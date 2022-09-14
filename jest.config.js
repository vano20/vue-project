module.exports = {
  roots: ['<rootDir>'],
  verbose: true,
  moduleFileExtensions: ['js', 'json', 'vue'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/views/$1',
  },
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.vue$': '@vue/vue2-jest',
  },
  collectCoverage: true,
  collectCoverageFrom: ['src/views/**/*.{js,vue}'],
  coverageReporters: ['html', 'text-summary'],
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    customExportConditions: ["node", "node-addons"],
 },
};

