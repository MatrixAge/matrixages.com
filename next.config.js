const withMDX = require('@next/mdx')()

/** @type {import('next').NextConfig} */
const config = {
	reactStrictMode: true,
	swcMinify: true,
	i18n: {
		locales: ['en-US', 'zh-CN'],
		defaultLocale: 'en-US'
	},
	experimental: {
		cpus: 4,
		appDir: true,
		mdxRs: true,
		typedRoutes: true,
		optimizeCss: true,
		isrFlushToDisk: true,
		swcFileReading: true,
		forceSwcTransforms: true,
		gzipSize: true,
		optimisticClientCache: true
	}
}

module.exports = withMDX(config)
