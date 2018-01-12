const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const colors = require('colors');

const env = process.env.NODE_ENV;

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const buildVersion = function() {
  return require("./package.json").version;
};

const extractSass = new ExtractTextPlugin({
    filename: '[name].[contenthash].css',
    disable: env === 'development'
});

const postCssLoader = {
	loader: 'postcss-loader',
	options: {
    plugins: [
      require('autoprefixer'),
      env === 'production' ? require('cssnano')() : null
    ]
  }
}


const develop = {
	entry: {
		["1-app"]: "./src/app.js",
		// ["0-vendor"]: ["preact", "preact-redux", "redux", "preact-router"]
	},
  output: {
    path: `${__dirname}dist/`,
    filename: 'bundle.min.js',
  },
  devtool: 'eval-source-map',
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'development',
      template: 'index.html'
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
				test: /\.scss$/,
        use: [{
          	loader: 'style-loader',
        }, {
            loader: 'css-loader',
						options: {
							modules: true,
							localIdentName: '[path][name]__[local]--[hash:base64:5]',
              camelCase: true
						}
        }, {
						loader: 'postcss-loader',
						options: {
							plugins:[
								require('autoprefixer')
							]
						}
					}, {
          	loader: 'sass-loader'
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
    port: 5001
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['node_modules'],
    alias: {
      src: path.resolve(__dirname, "src/"),
    }

  }
};

const production = {
	entry: {
		["1-app"]: "./src/app.js",
	},
  output: {
    path: `${__dirname}/dist/`,
    filename: 'bundle.[hash].min.js',
    // publicPath: `/staging/dist/`
    publicPath: `./`

  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'production',
      template: 'index.html',
			cache: true,
			// minify: {
			// 	removeComments: true,
			// 	collapseWhitespace: true
			// }
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
				test: /\.scss$/,
        use: [{
          	loader: 'style-loader',
        }, {
            loader: 'css-loader',
						options: {
							modules: true,
							localIdentName: '[path][name]__[local]--[hash:base64:5]'
						}
        }, {
						loader: 'postcss-loader',
						options: {
							plugins:[
								require('autoprefixer')
							]
						}
					}, {
          	loader: 'sass-loader'
        }]
			}
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['node_modules']
  }
}

switch (env) {
  case 'development':
    console.log('⚙️⚙️⚙️ Run webpack development ⚙️⚙️⚙️'.green, buildVersion());
    module.exports = develop;
    break;
  case 'production':
    console.log('⚡⚡⚡ Run webpack production ⚡⚡⚡'.yellow, buildVersion());
		module.exports = production;
    break;
  default:
    console.log('❌❌❌ Default state is hit: Env variable is not defined somehow ❌❌❌.'.red);
}

/* to do
[ ] - Browserlist
[ ] - Uglify
[ ] - Clean dist

*/
