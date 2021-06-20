const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    entry: "./src/index.js",
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: "asset/resource"
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {publicPath: "" }
                    },
                    "css-loader","postcss-loader","sass-loader"],
            }
        ]
    },
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: "bundle.js",
        assetModuleFilename: "images/[hash][ext][query]"
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 9999,
        hot: true
    },
    resolve: {
        extensions: [".js"]
    },
    plugins: [new MiniCssExtractPlugin(), new HtmlWebpackPlugin({
        template: "./src/index.html"
    })]
}