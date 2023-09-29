const path = require('path');

module.exports = {
    entry: './src/index.js', // Adjust the entry point as needed.
    mode: "development",
    output: {
        filename: 'sate-editor.js', // Adjust the output filename as needed.
        path: path.resolve(__dirname, 'dist'), // Adjust the output directory as needed.
        library: 'sate-editor', // Change 'yourPackageName' to your package's name.
        libraryTarget: 'umd',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },

    resolve: {
        extensions: ['.ts', '.jsx', '.js'],
    },
};
