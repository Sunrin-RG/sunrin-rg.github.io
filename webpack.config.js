module.exports = {
    module: {
        rules: [
            {
                test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[contenthash].[ext]",
                            outputPath: "font/",
                        },
                    },
                ],
            },
        ],
    },
};
