import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	output: "standalone",
	images: {
		domains: ["i.postimg.cc"],
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
};

export default nextConfig;
