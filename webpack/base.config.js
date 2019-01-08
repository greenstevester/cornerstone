const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = function configure(env, argv, wdir) {
  wdir = `${wdir}/`;

  return {
    devtool: 'source-map',
    resolve: {
      extensions: ['.js', '.ts'],
    },

    module: {
      rules: [
        {
          test: /\.ts$/,
          include: path.join(wdir, 'src'),
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
      contentBase: `${wdir}dist`,
    },
    plugins: [
      new CleanWebpackPlugin([`${wdir}dist`],{allowExternal: true}),
      new HtmlWebpackPlugin({template: `${wdir}src/index.html`, title: 'Progressive Web Application'}),
      new CopyWebpackPlugin([
                              {from: `${wdir}src/images`, to: 'images'},
                            ]),
    ],
    optimization: {},
  };
};
