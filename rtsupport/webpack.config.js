module.exports = {
    entry: './index.js',
    output: {
        path: __dirname,
        filename: 'boundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    }
}