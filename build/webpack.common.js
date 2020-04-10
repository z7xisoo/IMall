const { resolve } = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  context: resolve(),
  entry: resolve("src/main.js"),
  output: {
    path: resolve("./dist"),
    library: "common",
    libraryTarget: "umd",
    filename: "[name].js",
    umdNamedDefine: true,
  },
  resolve: {
    extensions: [".vue", ".js", ".jsx", ".scss", ".json", ".css"],
    alias: {
      src: resolve("src"),
      api: resolve("src/api"),
      "@": resolve("src/modules"),
      components: resolve("src/components"),
      img: resolve("src/assets/images"),
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
          {
            loader: "postcss-loader",
            options: {
              plugins: [
                require("autoprefixer")({
                  overrideBrowserslist: [
                    "ie>=8",
                    "Firefox>=20",
                    "Safari>=5",
                    "Android>=4",
                    "Ios>=6",
                    "last 4 version",
                  ],
                }),
              ],
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "./img", // 输出目录，打包后输出到哪个文件下 p/a.jpg -> dist/img/a.jpg
            },
          },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: ["babel-loader"],
      },
      {
        test: /\.vue$/,
        use: {
          loader: "vue-loader",
          options: {
            loaders: {
              scss: "style-loader!css-loader!postcss-loader!sass-loader",
            },
          },
        },
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
        use: {
          loader: "file-loader",
          // options: {
          //   name: "[name].[hash].[ext]",
          //   outputPath: RESOLVE("fonts"),
          // },
        },
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: resolve("./index.html"),
      filename: resolve("./dist/index.html"),
    }),
  ],
};