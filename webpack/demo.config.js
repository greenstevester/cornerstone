const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = function configure(env, argv, wdir) {
  wdir = `${wdir}/`;

  return {
    devtool: 'source-map',
    entry: [
      `${wdir}demo/index.ts`,
      `${wdir}demo/index.css`
    ],
    output: {
      path: path.join(wdir, 'dist/demo'),
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
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
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
      contentBase: `${wdir}dist/demo`,
    },
    plugins: [
      new CleanWebpackPlugin([`${wdir}dist/demo`], {allowExternal: true}),
      new HtmlWebpackPlugin({template: `${wdir}src/lib/showroom/index.html`, title: 'Demo'}),
      /*new CopyWebpackPlugin([
       {from: `${wdir}src/images`, to: 'images'},
       ]),*/
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
