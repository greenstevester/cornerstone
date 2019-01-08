const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = function configure(env, arg, wdir, config) {
  wdir = `${wdir}/`;

  config.entry = [
    `${wdir}src/index.ts`,
    `${wdir}src/index.scss`];

  config.output={
    path: path.join(wdir, 'dist'),
    filename: '[name].js',
    chunkFilename: '[name].js',
  };

  config.plugins.push(
      new MiniCssExtractPlugin({
                                 // Options similar to the same options in webpackOptions.output
                                 // both options are optional
                                 filename: '[name].css',
                                 chunkFilename: '[id].css',
                               }),
  );

  return config;
};
