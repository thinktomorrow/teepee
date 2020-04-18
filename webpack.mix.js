const mix  = require('laravel-mix');
require('laravel-mix-purgecss');

mix.js('resources/js/main.js', 'public/assets')
    .sass('resources/css/main.scss', 'public/assets')
    .copy('resources/img', 'public/assets/img')
    .setPublicPath('public')
    .version()

    .options({
        // Our own set of PostCSS plugins.
        postCss: [
            require('tailwindcss')('./resources/css/tailwind.config.js'),
        ],

        autoprefixer: true,

        // Webpack setting to ignore sass loader to follow url() paths
        processCssUrls: false,
    })

    .purgeCss({
        only: ['assets/main.css'],
    });
