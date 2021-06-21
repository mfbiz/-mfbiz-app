

const webpack = require('webpack')
const CompressionPlugin = require('compression-webpack-plugin');

module.exports  = {

  configureWebpack: {
    plugins: [
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
      new CompressionPlugin({
        test: /\.js$|\.html$|.\css/, 
        threshold: 10240,
        deleteOriginalAssets: false
      })
    ],
  },

  devServer: {
    host: '0.0.0.0',
    port: 8088,
  },
  
  productionSourceMap: false,
  transpileDependencies: [],
  lintOnSave: false
}
