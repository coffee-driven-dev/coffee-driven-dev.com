module.exports = {
  configureWebpack: {
    // We provide the app's title in Webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: "cdd",
    // Set up all the aliases we use in our app.
    resolve: {
      alias: require("./aliases.config").webpack
    },
    plugins: [
      // Optionally produce a bundle analysis
      // TODO: Remove once this feature is built into Vue CLI
      //   new BundleAnalyzerPlugin({
      //     analyzerMode: process.env.ANALYZE ? 'static' : 'disabled',
      //     openAnalyzer: process.env.CI !== 'true',
      //   }),
    ]
  },
  css: {
    // Enable CSS source maps.
    sourceMap: true,
    // Enable CSS modules for all CSS/pre-processor files.
    // This option does not affect *.vue files.
    modules: true
  }
};
