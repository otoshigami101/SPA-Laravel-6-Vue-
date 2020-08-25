require("laravel-mix-alias");
require("laravel-mix-purgecss");
require("laravel-mix-sass-resources-loader");

const mix = require("laravel-mix");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

mix.alias({
    "@": "./resources/assets"
});

mix.sassResources("resources/assets/sass/global.scss");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.sass("resources/assets/sass/app.scss", "public/css").js(
    "resources/assets/js/app.js",
    "public/js"
);

mix.webpackConfig({
    output: { chunkFilename: "js/[name].[hash].js" },
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ["./js/*", "./css/*", "./fonts/*"]
        }),
    ]
});

mix.babelConfig({
    plugins: ["@babel/plugin-syntax-dynamic-import"]
});

mix.version();
