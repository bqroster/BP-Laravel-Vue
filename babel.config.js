const path = require('path');

module.exports = {
  presets: ['@babel/preset-env'],
  plugins: [
    ['module-resolver', {
      root: [path.resolve(__dirname, '/resources/js/__tests__')],
    }],
  ],
};
