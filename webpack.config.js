const path = require('path');

module.exports = {
    entry: './src/index.js', // Adjust the entry point as needed.
    mode: "development",
    output: {
        filename: 'sate-editor.js', // Adjust the output filename as needed.
        path: path.resolve(__dirname, 'dist'), // Adjust the output directory as needed.
        library: 'sate-editor', // Change 'yourPackageName' to your package's name.
        libraryTarget: 'umd',
        publicPath: '/dist',
    },
    module: {
        rules: [
           {
            test: /\.(js|jsx)$/,
            use: ["babel-loader"],
            include: path.resolve(__dirname, "src"),
            exclude: /node_modules/,
        },
        ],
    },

    resolve: {
        extensions: ['.ts', '.jsx', '.js'],
        alias: {
            'react': path.resolve(__dirname, './node_modules/react'),
            'react-dom': path.resolve(__dirname, './node_modules/react-dom')
        }
    },
    externals: {
        react: {
            commonjs: "react",
            commonjs2: "react",
            amd: "React",
            root: "React",
        },
        "react-dom": {          
            commonjs: "react-dom",          
            commonjs2: "react-dom",          
            amd: "ReactDOM",          
            root: "ReactDOM"      
        } 
    }
};
