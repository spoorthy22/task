const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
 
    mode: 'development',

    entry:'./src/index.js',

    devtool: 'inline-source-map',

    devServer: {
    contentBase: './dist'
   },

output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
     publicPath: '/'
    }
//     output:{
//     path: path.join(__dirname, '/src'),
//     filename: 'bundle.js',
// },

   module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, 'src'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },

 plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    })
  ]
}
