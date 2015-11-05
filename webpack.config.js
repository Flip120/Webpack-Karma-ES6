module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
            { test: /\.hbs/, loader: "handlebars-template-loader" }
        ]
    },
    node: {
        fs: "empty" // avoids error messages
    }
};
