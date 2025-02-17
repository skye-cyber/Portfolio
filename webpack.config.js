const path = require("path");
const webpack = require("webpack");
module.exports = {
  entry: {
    main: "./js/script.js",
    aichat: "./js/aichat.js",
    fetch: "./js/fetch.js",
    cryptoK: "./js/cryptoK.js",
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
      //os: require.resolve("os-browserify/browser"),
      crypto: require.resolve("crypto-browserify"),
      vm: require.resolve("vm-browserify"),
      stream: require.resolve("stream-browserify"),
      //fs: require.resolve('browserify-fs'),
      //util: require.resolve("util/"),
      //zlib: require.resolve("browserify-zlib"),
      //https: require.resolve("https-browserify"),
      //url: require.resolve("url/"),
      //http: require.resolve("stream-http"),
      //assert: require.resolve("assert/"),
      //process: require.resolve("process"),
      //child_process: false, //'child-process-promise'
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
