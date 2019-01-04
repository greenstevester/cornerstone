const path = require("path");
const ClosurePlugin = require('closure-webpack-plugin');

module.exports = {
  entry: "./src/index.ts",

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
      }
    ]
  },

  devServer: {
    contentBase: "./dist"
  },
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
      })
    ]
  }
};
