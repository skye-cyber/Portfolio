const path = require("path");
const webpack = require("webpack");
module.exports = {
  entry: {
    main: "./js/script.js",
    aichat: "./js/aichat.js",
    cryptoK: "./js/cryptoK.js",
    contact: "./js/contact.js",
  },
  output: {
    filename: "final_[name].js", // This will generate files named after the entry points
    path: path.resolve(__dirname, "./js"),
  },
  resolve: {
    extensions: [".js", ".mjs", ".json"],
    fallback: {
      buffer: require.resolve("buffer/"),
      path: require.resolve("path-browserify"),
      crypto: require.resolve("crypto-browserify"),
      vm: require.resolve("vm-browserify"),
      stream: require.resolve("stream-browserify"),
    },
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: "process/browser",
      Buffer: ['buffer', 'Buffer']
    }),
  ],
  node: {
    global: true,
  },
  externals: {
    crypto: "crypto",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          /*options: {
           p resets: ['@babel/preset-env', { targets: { browsers: ['last 2 *versions'] }}]
        }*/
        }
      },
    ],
  },
  devtool: 'source-map', // Consider using source maps for better debugging
  mode: "development",
};
