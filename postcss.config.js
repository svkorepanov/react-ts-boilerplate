const postcssEnv = require('postcss-preset-env');
const postcssNested = require('postcss-nested');

module.exports = {
    plugins: [
        postcssEnv(),
        postcssNested()
    ]
}