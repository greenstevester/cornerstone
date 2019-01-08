const path = require('path');
const ClosurePlugin = require('closure-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = function configure(env, arg, wdir, config) {
  wdir = `${wdir}/`;

  config.entry = [
    `${wdir}src/index-with-worker.ts`,
    `${wdir}src/index.scss`];

  config.output = {
    path: path.join(wdir, 'dist'),
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].js',
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

  config.optimization = {
    'concatenateModules': false,
    minimizer: [
      new ClosurePlugin({
                          // mode: 'AGGRESSIVE_BUNDLE',
                          mode: 'STANDARD',
                        },
                        {
                          // formatting: 'PRETTY_PRINT',
                          // debug: devMode,
                          renaming: true,
                        }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  };

  return config;
};
