const path = require('path');

module.exports = {
  output: {
    filename: '[name].js',
    library: 'typeScriptStarter',
    libraryTarget: 'var',
    path: path.join(__dirname, 'web-build'), // where to place webpack files
  },
  entry: './src/index.ts',
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [{
      test: /\.ts$/,
      use: [
        {
          loader: 'ts-loader?configFile=web.tsconfig.json',
        }
      ]
    }],
  },
  target: 'web',
};
