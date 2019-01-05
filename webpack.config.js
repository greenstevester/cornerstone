const path = require("path");
const ClosurePlugin = require('closure-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env, argv) => {
  const devMode = (argv.mode !== 'production');

  let config = {
    entry: [
      './src/index.ts',
      './src/index.scss'],

    output: {
      path: path.join(__dirname, 'dist'),
      filename: '[name].bundle.js',
      chunkFilename: '[name].chunk.js',
    },

    resolve: {
      extensions: ['.js', '.ts'],
    },

    module: {
      rules: [
        {
          test: /\.ts$/,
          include: path.join(__dirname, 'src'),
          loader: 'ts-loader',
        },
        {
          test: /\.scss$/,
          use: [
            {loader: MiniCssExtractPlugin.loader},
            {
              loader: 'css-loader',
              options: {importLoaders: 2},
            },
            {loader: 'postcss-loader'},
          ],
        },
        {
          test: /\.(gif|png|jpe?g|svg)$/i,
          use: [
            'file-loader',
            {
              loader: 'image-webpack-loader',
              options: {
                mozjpeg: {
                  progressive: true,
                  quality: 65,
                },
                // optipng.enabled: false will disable optipng
                optipng: {
                  enabled: false,
                },
                pngquant: {
                  quality: '65-90',
                  speed: 4,
                },
                gifsicle: {
                  interlaced: false,
                },
                // the webp option will enable WEBP
                webp: {
                  quality: 75,
                },
              }
            },
          ],
        },
      ],
    },

    devServer: {
      contentBase: './dist',
    },
    plugins: [
      new CleanWebpackPlugin(['./dist']),
      new HtmlWebpackPlugin({template: './src/index.html', title: 'Progressive Web Application'}),
      new CopyWebpackPlugin([
                              {from: 'src/images', to: 'images'},
                            ]),
      new MiniCssExtractPlugin({
                                 // Options similar to the same options in webpackOptions.output
                                 // both options are optional
                                 filename: devMode ? '[name].css' : '[name].[hash].css',
                                 chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
                               }),
    ],
    optimization: {},
  };

  if (argv.mode === 'production') {
    config.entry = [
      './src/ws-index.ts',
      './src/index.scss'];

    config.plugins.push(
        new WorkboxPlugin.GenerateSW({
                                       importWorkboxFrom: devMode ? 'disabled' : 'cdn',
                                       // these options encourage the ServiceWorkers to get in there fast
                                       // and not allow any straggling "old" SWs to hang around
                                       clientsClaim: true,
                                       skipWaiting: true,
                                     }),
    );

    config.optimization = {
      "concatenateModules": false,
      minimizer: [
        new ClosurePlugin({mode: 'AGGRESSIVE_BUNDLE'}, {
          // formatting: 'PRETTY_PRINT',
          // debug: devMode,
          renaming: true,
        }),
        new OptimizeCSSAssetsPlugin({}),
      ],
    };
  }

  return config;
};
