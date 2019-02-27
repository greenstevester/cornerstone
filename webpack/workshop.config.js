const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = function configure(env, argv, wdir) {
  wdir = `${wdir}/`;

  return {
    devtool: 'source-map',
    entry: [
      `${wdir}src/workshop/index.ts`,
      `${wdir}src/cornerstone/workshop/index.scss`,
    ],
    output: {
      path: path.join(wdir, 'dist/workshop'),
      filename: '[name].[hash].js',
      chunkFilename: '[name].[chunkhash].js',
    },
    resolve: {
      extensions: ['.js', '.ts'],
    },

    resolveLoader: {
      modules: ['node_modules'],
      extensions: ['.js', '.json'],
      mainFields: ['loader', 'main'],
    },

    module: {
      rules: [
        {
          test: /\.ts$/,
          include: wdir,
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
              },
            },
          ],
        },
      ],
    },

    devServer: {
      contentBase: `${wdir}dist/workshop`,
      port: 9000,
    },
    plugins: [
      new CleanWebpackPlugin([`${wdir}dist/workshop/`], {allowExternal: true}),
      new HtmlWebpackPlugin({template: `${wdir}src/cornerstone/workshop/index.html`, title: 'workshop'}),
      new MiniCssExtractPlugin({
                                 // Options similar to the same options in webpackOptions.output
                                 // both options are optional
                                 filename: '[name].[hash].css',
                                 chunkFilename: '[id].[hash].css',
                               }),
    ],
    optimization: {
      'concatenateModules': false,
      minimizer: [
        new TerserPlugin({
                           parallel: true,
                           sourceMap: true,
                           terserOptions: {
                             ecma: 6,
                           },
                         }),
      ],
      splitChunks: {
        // include all types of chunks
        chunks: 'all',
      },
    },
  };
};
