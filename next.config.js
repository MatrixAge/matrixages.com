const withPlugins = require('next-compose-plugins')
const withLess = require('@zeit/next-less')

const config = {
	cssModules: true,
	typescript: {
		transpileOnly: true,
		ignoreDevErrors: true,
		ignoreBuildErrors: true
	},
	cssLoaderOptions: {
		importLoaders: 1,
		localIdentName: '[hash:base64:3]'
	},
	future: { webpack5: true }
}

module.exports = withPlugins([ withLess ], config)
