const path = require("path");

/**Перезапуск проекта при изменений*/
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
/**Плагин для работы с EsLint*/
const ESLintPlugin = require("eslint-webpack-plugin");
/**Проверка TypeScript */
const TsCheckerPlugin = require("fork-ts-checker-webpack-plugin");
/**Плагин для запуска проекта */
const HtmlWebpackPlugin = require("html-webpack-plugin");
/**Работа с css стилями */
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
/**Путь для сборки */
const buildPath = path.resolve(__dirname, "dist");
/**Путь src */
const srcPath = path.resolve(__dirname, "src");
const isProd = process.env.NODE_ENV === "production";

const getSettingsForStyles = (withModules = false) => {
  return [
    isProd ? MiniCssExtractPlugin.loader : "style-loader",
    !withModules
      ? "css-loader"
      : {
          loader: "css-loader",
          options: {
            modules: {
              localIdentName: !isProd
                ? "[path][name]__[local]"
                : "[hash:base64]",
            },
          },
        },
    {
      loader: "postcss-loader",
      options: {
        postcssOptions: {
          plugins: [["autoprefixer"]],
        },
      },
    },
    "sass-loader",
  ];
};

module.exports = {
  entry: path.join(srcPath, "index.tsx"),
  target: !isProd ? "web" : "browserslist",
  devtool: isProd ? "hidden-source-map" : "eval-source-map",
  output: {
    path: buildPath,
    filename: "bundle.js",
    publicPath: "/",
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(srcPath, "index.html"),
    }),

    !isProd && new ReactRefreshWebpackPlugin(),

    new MiniCssExtractPlugin({
      filename: "[name]-[hash].css",
    }),
    new TsCheckerPlugin(),
    new ESLintPlugin(),
  ].filter(Boolean),
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  module: {
    rules: [
      {
        test: /\.module\.s?css$/,
        use: getSettingsForStyles(true),
      },
      {
        test: /\.s?css$/,
        exclude: /\.module\.s?css$/,
        use: getSettingsForStyles(),
      },
      {
        test: /\.[tj]sx?$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.(png|svg|jpg)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024,
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".jsx", ".js", ".ts"],
    alias: {
      "@components": path.join(srcPath, "components"),
      "@config": path.join(srcPath, "config"),
      "@styles": path.join(srcPath, "styles"),
      "@utils": path.join(srcPath, "utils"),
      "@models": path.join(srcPath, "models"),
      "@store": path.join(srcPath, "store"),
      "@type": path.join(srcPath, "type"),
      "@service": path.join(srcPath, "service"),
    },
  },
  devServer: {
    // host: '127.0.0.1',
    port: 3000,
    hot: true,
    historyApiFallback: true,
  },
};
