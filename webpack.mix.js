const mix  = require('laravel-mix');
require('laravel-mix-purgecss');

mix.js('resources/assets/js/main.js', 'public/compiled_assets')
    .sass('resources/assets/scss/main.scss', 'public/compiled_assets')
    .copy('resources/assets/svg', 'public/compiled_assets/svg')
    .copy('resources/assets/img', 'public/compiled_assets/img')
    //.copyDirectory('resources/views', 'public/views')
    .setPublicPath('public')
    //.version()

    .options({
        // Our own set of PostCSS plugins.
        postCss: [
            require('tailwindcss')('./resources/assets/scss/tailwind.config.js'),
        ],

        autoprefixer: true,

        // Webpack setting to ignore sass loader to follow url() paths
        processCssUrls: false,
    })

    .purgeCss({
        only: ['assets/main.css'],
    });
