const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    entry: "./src/index.js",
    mode: "development",
    plugins: [
        new VueLoaderPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: "ts-loader",
                options: {
                    appendTsxSuffixTo: [/\.vue$/],
                },
            },
            {
                test: /\.vue$/,
                loader: "vue-loader",
            },
        ]
    }
};
