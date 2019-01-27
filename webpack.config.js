const path = require('path');

module.exports = {
    // entry: './src/main.js',
    entry: './src/main.ts',
    output: {
        // path: path.resolve(__dirname),
        // filename: 'bundle.js'
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'inline-source-map',
    // devtool: 'source-map',
    resolve: {
        extensions: [ '.ts', '.js']
    },
    module: {
        rules: [
            // {
            //     test: /\.(png|jpg|gif)$/,
            //     use: [
            //         {
            //             loader: 'url-loader',
            //             options: {
            //                 limit: 8192
            //             }
            //         }
            //     ]
            // }
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    }
};