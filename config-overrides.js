const { resolve } = require("path");
const webpack = require("webpack");
const {
  override,
  addLessLoader,
  adjustStyleLoaders,
  addWebpackAlias,
  overrideDevServer,
  addWebpackPlugin,
} = require("customize-cra");

const target = {
  cur: "http://localhost",
};
const addProxy = () => (config) => {
  config.proxy = {
    "/test/": {
      target: target.cur,
      changeOrigin: true,
      //pathRewrite: { '^/auth-center': '/' },
    },
  };
  return config;
};

module.exports = {
  webpack: override(
    addWebpackPlugin(
      new webpack.DefinePlugin({
        CUR_URL: JSON.stringify(target.cur),
        MODE:
          process.env.mode === "dev"
            ? JSON.stringify("dev")
            : JSON.stringify("pro"),
      })
    ),
    addWebpackAlias({
      "@": resolve(__dirname, "./src/"),
    }),
    addLessLoader(),
    adjustStyleLoaders(({ use: [, , postcss] }) => {
      const postcssOptions = postcss.options;
      postcss.options = { postcssOptions };
    })
  ),
  devServer: overrideDevServer(addProxy()),
};
