const config = require("./src/config.js");
const path = require("path");

module.exports = {
    mode: "production",
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: "img-optimize-loader",
                        options: {
                            compress: {
                                mode: "high",
                            },
                            publicPath: config.IMAGE_URL,
                            name: `[hash].[ext]`,
                        },
                    },
                ],
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
        ],
    },
};
