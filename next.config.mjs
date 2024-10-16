/** @type {import('next').NextConfig} */
const nextConfig = {
	// images: {
	// 	domains: ['uploadthing.com', 'utfs.io'],
	// },

	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'uploadthing.com',
			},
			{
				protocol: 'https',
				hostname: 'utfs.io',
			},
		],
	},
}

export default nextConfig
