const path = require("path");

module.exports = {
  entry: "./views/index.jsx",
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "public/javascripts"),
  },
  module: {
    rules: [
      {
        use: "babel-loader",
        test: /\.jsx$/,
        exclude: /node_modules/,
      },
      {
        use: ["style-loader", "css-loader"],
        test: /\.css$/,
        exclude: /node_modules/,
      },
    ],
  },
};
