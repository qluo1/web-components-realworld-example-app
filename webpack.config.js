const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './app/index.js',
  plugins: [
    new HtmlWebpackPlugin({
      template: './app/index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.IgnorePlugin(/vertx/)
  ],
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    host: '0.0.0.0',
    disableHostCheck: true,
    contentBase: './',
    historyApiFallback: true
  }
};
