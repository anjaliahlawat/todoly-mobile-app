module.exports = {
  entry: "App.js",
  output: {
    filename: "./build/bundle.js",
  },
  devtool: "source-map",
  resolve: {
    extensions: ["", ".ts", ".tsx", ".js", "jsx"],
  },
  loaders: [{ test: /\.tsx?$/, loader: "awesome-typescript-loader" }],
  preLoaders: [{ test: /\.js$/, loader: "source-map-loader" }],
};
