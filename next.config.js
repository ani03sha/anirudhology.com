let path = require("path");
let withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true",
});
let { i18n } = require("./next-i18next.config");

module.exports = withBundleAnalyzer({
    reactStrictMode: true,
    pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
    eslint: {
        dirs: [
            "components",
            "constant",
            "layouts",
            "libs",
            "pages",
            "scripts",
            "utils",
        ],
    },
    images: {
        domains: ["i.scdn.co"],
    },
    typescript: {
        tsconfigPath: "./tsconfig.json",
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        ignoreBuildErrors: true,
    },
    i18n,
    trailingSlash: true,
    webpack: (config, options) => {
        config.module.rules.push({
            test: /\.(png|jpe?g|gif|mp4)$/i,
            use: [
                {
                    loader: "file-loader",
                    options: {
                        publicPath: "/_next",
                        name: "static/media/[name].[hash].[ext]",
                    },
                },
            ],
        });

        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"],
        });

        config.module.rules.push({
            test: /\.json$/,
            use: [options.defaultLoaders.babel],
            include: path.resolve(__dirname, "public/locales"),
        });

        return config;
    },
});
