const path = require("path");
const ClosurePlugin = require('closure-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: ["./src/index.ts","./src/index.scss"],

  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].bundle.js",
    chunkFilename: "[name].chunk.js"
  },

  resolve: {
    extensions: [".js", ".ts"]
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        include: path.join(__dirname, "src"),
        loader: "ts-loader"
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
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              publicPath: '../images',
              emitFile: true,
            },
          },
        ],
      }
    ]
  },

  devServer: {
    contentBase: "./dist"
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({title: 'Progressive Web Application'}),
    new WorkboxPlugin.GenerateSW({
                                   // these options encourage the ServiceWorkers to get in there fast
                                   // and not allow any straggling "old" SWs to hang around
                                   clientsClaim: true,
                                   skipWaiting: true,
                                 }),
    new MiniCssExtractPlugin({
                               // Options similar to the same options in webpackOptions.output
                               // both options are optional
                               filename: devMode ? '[name].css' : '[name].[hash].css',
                               chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
                             }),
  ],
  optimization: {
    minimizer: [
      new ClosurePlugin({mode: 'STANDARD'}, {
        // compiler flags here
        //
        // for debuging help, try these:
        //
        // formatting: 'PRETTY_PRINT'
        // debug: true,
        // renaming: false
      }),
      new OptimizeCSSAssetsPlugin({}),
    ]
  }
};
