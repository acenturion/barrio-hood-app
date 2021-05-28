module.exports = {
    module: {
        rules: [
            {
                test: /\.(ttf)$/,
                use: {
                    loader: 'url-loader',
                },
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader', // creates style nodes from JS strings
                    'css-loader', // translates CSS into CommonJS
                    'sass-loader' // compiles Sass to CSS, using Node Sass by default
                ],
            }

        ]
    }
};
