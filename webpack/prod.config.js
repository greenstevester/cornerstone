const path = require('path');
// const WorkboxPlugin = require('workbox-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = function configure(env, arg, wdir, config) {
  wdir = `${wdir}/`;

  config.entry = [
    `${wdir}src/app/index.ts`,
    `${wdir}src/app/index.scss`];

  config.output = {
    path: path.join(wdir, 'dist/app'),
    filename: '[name].[hash].js',
    chunkFilename: '[name].[chunkhash].js',
  };

  config.plugins.push(
      new MiniCssExtractPlugin({
                                 // Options similar to the same options in webpackOptions.output
                                 // both options are optional
                                 filename: '[name].[hash].css',
                                 chunkFilename: '[id].[hash].css',
                               }),
  );

  return config;
};
