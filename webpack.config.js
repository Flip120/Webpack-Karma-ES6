module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.scss$/, loader: 'style!css!sass' },
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
            { test: /\.hbs/, loader: "handlebars-template-loader" },
        ]
    },
    node: {
        fs: "empty" // avoids error messages
    }
};
