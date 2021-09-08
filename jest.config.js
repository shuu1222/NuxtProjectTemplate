module.exports = {
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/app/$1',
    '^~~/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js'
  },
  moduleFileExtensions: [
    'ts',
    'js',
    'vue',
    'json'
  ],
  transform: {
    '.*\\.(js|ts)$': '@sucrase/jest-plugin',
    '.*\\.(vue)$': 'vue-jest',
  },
  collectCoverageFrom: [
    '<rootDir>/app/components/**/*.vue',
    '<rootDir>/app/pages/**/*.vue',
  ],
  testEnvironment: 'jsdom',
  transformIgnorePatterns: ['node_modules/?!(typed-vuex)'],
  setupFiles: ['<rootDir>/app/test/setup.ts'],
}
