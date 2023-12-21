/** @type {import('next').NextConfig} */
const nextConfig = {
	typescript:{
		ignoreBuildErrors: true,
	},
    images: {
		domains: ['cdn.sanity.io','jhs-six.vercel.app']
	}
}

module.exports = nextConfig
