const path = require("path/posix");

module.exports = {
    mode: "development",
    entry: './source/index.js',
    output: {
        filename: 'index_bundle.js',
        path: path.resolve(__dirname, "dist")
    }
} 