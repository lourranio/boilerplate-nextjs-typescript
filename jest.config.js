module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules', '/.next'],
  collectCoverage: true,
  collectCoverageFrom: [
    'pages/**/*.ts(x)',
    '!pages/_app.ts(x)',
    '!pages/_document.ts(x)'
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
}
