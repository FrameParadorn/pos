module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/pos/" : "/",
  transpileDependencies: ["vuetify"],
  devServer: {
    disableHostCheck: true,
  },
};
