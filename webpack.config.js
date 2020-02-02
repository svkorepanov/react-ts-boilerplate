const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StylelintWebpackPlugin = require('stylelint-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';
const isDev = !isProduction;
const mode = isProduction ? 'production' : 'development';
const devtool = isProduction ? false : 'source-map';
console.log('NODE_ENV :', mode);

const BUILD_FOLDER = path.resolve(__dirname, 'build');

const filename = (extension) => isDev ? `[name].${extension}` : `[name].[contenthash].${extension}`;

const optimization = () => {
    const config = {
        chunkIds: 'named',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /node_modules/,
                    chunks: 'initial',
                    name: 'vendor',
                    priority: 10,
                    filename: filename('js'),
                    enforce: true

                }
            }
        }
    };

    if (isProduction) {
        config.minimizer = [
            new OptimizeCssAssetsPlugin(),
            new TerserWebpackPlugin()
        ]
    }

    return config;
}

const cssLoaders = () => {
    return [
        {
            // for compilation css directly to css
            loader: MiniCssExtractPlugin.loader,
            options: {
                hmr: isDev,
                reloadAll: true
            }
        },
        'css-loader',
        'postcss-loader'
    ]
}

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode,
    devtool,
    entry: {
        main: './index.tsx'
    },
    devServer: {
        port: 8080,
        hot: isDev
    },
    output: {
        path: BUILD_FOLDER,
        filename: filename('js')
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
    },
    optimization: optimization(),
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: 'ts-loader'
            },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'source-map-loader'
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: cssLoaders()
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            minify: {
                collapseWhitespace: isProduction
            }
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, 'public'),
                to: BUILD_FOLDER
            }
        ]),
        new MiniCssExtractPlugin({
            filename: filename('css'),
        }),
        new StylelintWebpackPlugin({
            context: path.resolve(__dirname, 'src'),
            files: '**/*.css',
            failOnError: isProduction
        })
    ]
}