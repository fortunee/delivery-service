const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-env',
                            '@babel/react',
                        {
                            'plugins': ['@babel/plugin-proposal-class-properties']
                        }
                    ]
                }
            },
            {
				test: /\.s?css$/,
				use: ["style-loader", "css-loader", "sass-loader"]
			}
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: './dist',
        hot: true,
        historyApiFallback: true,
    }
};