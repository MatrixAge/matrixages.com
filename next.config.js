const withPlugins = require('next-compose-plugins')
const withCss = require('@zeit/next-css')
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
		localIdentName: '[hash:base64:4]'
	},
	experimental: {
		workerThreads: true,
		optimizeFonts: true,
		optimizeImages: true,
		optimizeCss: true
	}
}

module.exports = withPlugins([ withCss, withLess ], config)
