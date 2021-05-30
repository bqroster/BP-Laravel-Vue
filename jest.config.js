module.exports = {
  verbose: true,
  roots: [
    '<rootDir>/resources/js',
  ],
  moduleFileExtensions: [
    'js',
    'json',
    'vue', // tell Jest to handle `*.vue` files
  ],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.vue$': 'vue-jest',
  },
  moduleDirectories: ['node_modules'],
  moduleNameMapper: {
    '^@js(.*)$': '<rootDir>/resources/js$1',
    '^@component(.*)$': '<rootDir>/resources/js/components$1',
  },
};
