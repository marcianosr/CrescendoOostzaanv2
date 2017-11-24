const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const colors = require('colors');

const env = process.env.NODE_ENV;

const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: env === "development"
});

const develop = {
  entry: './src/App.js',
  output: {
    path: `${__dirname}dist/`,
    filename: 'bundle.min.js'
  },
  devtool: 'eval-source-map',
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'development',
      template: 'template.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: {
          loader: 'css-loader'
        }
      }, 
			{
				test: /\.scss$/,
        use: [{
            loader: "style-loader"
        }, {
            loader: "css-loader"
        }, {
            loader: "sass-loader"
        }]
			}
    ]
  },
  devServer: {
    hot: true,
    historyApiFallback: true,
    contentBase: __dirname,
    compress: true,
    overlay: true,
    port: 5000
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['node_modules']
  }
};

switch (env) {
  case 'development':
    console.log('⚙️⚙️⚙️ Run webpack development ⚙️⚙️⚙️'.green);
    module.exports = develop;
    break;
  case 'production':
    console.log('⚡⚡⚡ Run webpack production ⚡⚡⚡'.red);
    break;
  default:
    console.log('❌❌❌ Default state is hit: Env variable is not defined somehow ❌❌❌.'.red);
}
