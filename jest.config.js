module.exports = {
  moduleFileExtensions: ['js', 'jsx', 'json', 'vue'],
  preset: '@vue/cli-plugin-unit-jest/presets/no-babel',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    builders: '<rootDir>/tests/unit/builders/builders.js',
    'test-constants': '<rootDir>/tests/constants.js',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  clearMocks: true,
  setupFilesAfterEnv: ['./setupTests.js'],
}
