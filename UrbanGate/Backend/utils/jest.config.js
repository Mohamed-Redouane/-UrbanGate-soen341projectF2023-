// jest.config.js
module.exports = {
    // ... other Jest configurations
    extensionsToTreatAsEsm: ['.js', '.mjs'],
    testEnvironment: 'node',
    transform: {
      '^.+\\.js$': 'babel-jest',
      '^.+\\.mjs$': 'babel-jest',
    },
    globals: {
      'ts-jest': {
        useESM: true,
      },
    },
  };
  