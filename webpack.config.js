const path = require('path');

module.exports = {
    entry: './src/main.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'inline-source-map',
    resolve: {
        extensions: [ '.ts', '.js'],
        alias: {
          '~':  path.resolve(__dirname, 'src')
        }
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