const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
             {
                 test: /\.css$/,
                 use: ['style-loader','css-loader']
             },
             {
                test: /\.(jpg|jpeg|gif|png|ico)$/,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
            }
        ]
    }       
}