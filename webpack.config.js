const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const path = require('path');

const libConfig = {
	...defaultConfig,
	entry: {
		'force-ui': path.resolve(process.cwd(), 'src/index.js'),
		'utils/withTW': path.resolve(process.cwd(), 'src/utilities/withTW.js'),
	},
	output: {
		path: path.resolve(process.cwd(), 'dist'),
		filename: '[name].js',
		library: {
			name: '[name].[file].js',
			type: 'umd',
		},
		globalObject: `typeof self !== 'undefined' ? self : this`,
	},
	resolve: {
		...defaultConfig.resolve,
		extensions: ['.js', '.jsx', '...'],
		alias: {
			...defaultConfig.resolve.alias,
			'@/icons': path.resolve(process.cwd(), 'src/ui/icons'),
			'@/components': path.resolve(process.cwd(), 'src/components'),
			'@/utilities': path.resolve(process.cwd(), 'src/utilities'),
			'@': path.resolve(process.cwd(), 'src'),
		},
	},
	module: {
		...defaultConfig.module,
		rules: [
			...defaultConfig.module.rules,
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
			{
				test: /\.mjs$/,
				include: /node_modules/,
				type: 'javascript/auto',
			},
		],
	},
	externals: {
		react: 'React',
		'react-dom': 'ReactDOM',
	},
};

module.exports = libConfig;
