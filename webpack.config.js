var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var PRODUCTION = process.argv.indexOf('--production') != -1;


logMode(PRODUCTION);

module.exports = {
	entry: {
		main:             __dirname + '/src/entry/main.js',
		'style-importer': __dirname + '/src/entry/style-importer.js',
	},
	output: {
		path: __dirname + '/build',
		// filename: generated scripts according to the keys of the "entry" object above
		filename: '[name].bundle' + (PRODUCTION ? '.min' : '') + '.js'
	},
	watch: true,
	devtool: PRODUCTION ? 'source-map' : null,
	module: {
		// with this configuration we are using babel to transpile our code from ES6 to ES5
		loaders: [{
			// transform only .js files
				test: /\.js$/,
				// doesnt transform files in node_modules or bower_components folder
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				}
			},
			{
				// css loader
				test: /\.css$/,
				loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer-loader')
			},
			{
				// needed for loading 3rd party css (such as bootstrap)
				test: /\.(png|woff|woff2|eot|ttf|svg)$/,
				loader: 'url-loader?limit=200000'
			},
			{
				// for compiling SCSS files to CSS
				test: /\.(sass|scss)$/,
				exclude: /(node_modules|bower_components)/,
				loader:  ExtractTextPlugin.extract('style-loader','css-loader!autoprefixer-loader!sass-loader?outputStyle=expanded')
			}
		]
	},
	plugins: getPlugins(PRODUCTION),
	externals: {
		// globally available
		"jquery": "jQuery",
		"angular": "angular"
	}
};

function logMode(PRODUCTION) {
	if(PRODUCTION) {
		console.log('**************************************************');
		console.log('**************** PRODUCTION MODE! ****************');
		console.log('**************************************************');
	} else {
		console.log('**************************************************');
		console.log('**************** DEVELOPMENT MODE! ***************');
		console.log('**************************************************');
	}
	console.log();
}

function getPlugins(PRODUCTION) {
	var returnedPlugins = [];
	
	if(PRODUCTION) {
		returnedPlugins.push(new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		}));
	}
	
	// for bundling styles into a css file
	returnedPlugins.push(new ExtractTextPlugin('./css/styles' + (PRODUCTION ? '.min' : '') + '.css'));
	
	return returnedPlugins;
}