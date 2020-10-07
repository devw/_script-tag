const config = require("./src/config.js");
const path = require("path");
const Handlebars = require("handlebars");
const fs = require("fs");
const jsyaml = require("js-yaml");

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
                            publicPath: config.IMAGE_REPOSITORY,
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
            {
                test: /\.hbs$/i,
                loader: "html-loader",
                options: {
                    preprocessor: (content, _) => {
                        const data = fs.readFileSync(
                            "./src/translation.yaml",
                            "utf8"
                        );
                        return Handlebars.compile(content)(
                            jsyaml.load(data)[config.LANG]
                        );
                    },
                },
            },
        ],
    },
};
