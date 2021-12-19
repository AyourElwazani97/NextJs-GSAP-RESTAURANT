const withTM = require("next-transpile-modules")(["hover-effect"]);
const withImages = require("next-images");
const withPlugins = require("next-compose-plugins");

module.exports = withPlugins([
  withTM,
  withImages,
  [
    {
      images: {
        disableStaticImages: true,
      },
    },
  ],
  [
    {
      module: {
        loaders: [
          {
            test: /.jsx?$/,
            loader: "babel-loader",
            exclude: /node_modules/,
          },
          {
            test: /\.css$/,
            loader: "style-loader!css-loader",
          },
          {
            test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
            loader: "url-loader?limit=100000",
          },
        ],
      },
    },
  ],
]);
