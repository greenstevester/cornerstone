const path = require('path');
const WorkboxPlugin = require('workbox-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = function configure(env, arg, wdir, config) {
  wdir = `${wdir}/`;

  config.entry = [
    `${wdir}src/index.ts`,
    `${wdir}src/index.scss`];

  config.output = {
    path: path.join(wdir, 'dist'),
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

  config.plugins.push(
      new WorkboxPlugin.GenerateSW({
                                     importWorkboxFrom: 'cdn',
                                     // these options encourage the ServiceWorkers to get in there fast
                                     // and not allow any straggling "old" SWs to hang around
                                     clientsClaim: true,
                                     skipWaiting: true,
                                   }),
  );



  return config;
};
