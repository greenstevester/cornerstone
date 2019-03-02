const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const WebpackDeepScopeAnalysisPlugin = require('webpack-deep-scope-plugin').default;
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');


module.exports = function configure(env, argv, wdir) {
  wdir = `${wdir}/`;

  return {
    devtool: 'source-map',
    resolve: {
      extensions: ['.js', '.ts'],
    },
    resolveLoader: {
      modules: [ 'node_modules' ],
      extensions: [ '.js', '.json' ],
      mainFields: [ 'loader', 'main' ]
    },

    module: {
      rules: [
        {
          test: /\.ts$/,
          include: path.join(wdir, 'src'),
          loader: 'ts-loader',
        },
        {
          test: /\.css$/,
          use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader'],
        },
        {test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader'},
        {test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader'},
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
      new CleanWebpackPlugin([`${wdir}dist/app`], {allowExternal: true}),
      new HtmlWebpackPlugin({template: `${wdir}src/app/index.html`, title: 'Progressive Web Application'}),
      new CopyWebpackPlugin([
                              {from: `${wdir}src/app/images`, to: 'images'},
                            ]),
      new WebpackDeepScopeAnalysisPlugin(),
    ],
    optimization : {
      'concatenateModules': false,
      minimizer: [
        new TerserPlugin({
                           parallel: true,
                           sourceMap: true,
                           terserOptions: {
                             ecma: 6,
                           }
                         }),
        new OptimizeCSSAssetsPlugin({}),
      ],
      splitChunks: {
        // include all types of chunks
        chunks: 'all'
      },

    },
    performance: {
      hints: 'warning',
      maxEntrypointSize: 260000,
      maxAssetSize: 2000000,
    },
  };
};
