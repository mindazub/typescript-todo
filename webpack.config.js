const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                test: /\.scss$/,
 
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader
                        },
              
                        {
                          loader: 'css-loader',
                          options: {
                            sourceMap: true,
                            modules: true
                            // localIdentName: '[local]___[hash:base64:5]'
                          }
                        },
              
                        // {
                        //   loader: 'postcss-loader'
                        // }
                      ]

            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html"
        }),
        new MiniCssExtractPlugin("style.css")
    ],
    devtool: "source-map",
    resolve: {
        extensions: [".js", ".ts", ".tsx"]
    }
}