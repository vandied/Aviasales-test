const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const paths = require('./paths');

module.exports = {
    entry: paths.src + '/index.tsx',

    output: {
        path: paths.build,
        filename: '[name].bundle.js',
        publicPath: '/',
    },

    resolve: {
        extensions: ['*', '.js', '.ts', '.tsx', '.md', '.css'],
        alias: {
            src: paths.src,
        },
    },

    plugins: [
        new CleanWebpackPlugin(),

        new CopyWebpackPlugin({
            patterns: [
                {
                    from: paths.public,
                    to: 'assets',
                    globOptions: {
                        ignore: ['*.DS_Store'],
                    },
                    noErrorOnMissing: true,
                },
            ],
        }),

        new HtmlWebpackPlugin({
            title: 'Поиск дешевых авиабилетов',
            template: paths.src + '/index.html',
            filename: 'index.html',
        }),

        new ESLintPlugin({
            files: ['.', 'src'],
            formatter: 'table',
        }),
    ],

    module: {
        rules: [
            { test: /\.ts|tsx$/, use: ['ts-loader'] },
            { test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: 'asset/resource' },
            { test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: 'asset/inline' },
        ],
    },
};
