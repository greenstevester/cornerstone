module.exports = {
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  modulePaths: ['<rootDir>/src/', '<rootDir>/test/'],
  coveragePathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/dist/', '<rootDir>/webpack/'],
  testRegex: '/test/unit/.*\\.spec\\.ts$',
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'node',
  ],
  globals: {
    'ts-jest': {
      tsConfig: './tsconfig.json',
    },
  },
};
