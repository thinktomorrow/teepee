const mix = require('laravel-mix');

mix.js('resources/assets/js/head.js', 'public/assets/js/head.js')
    .js('resources/assets/js/app.js', 'public/assets/js/app.js')
    .sass('resources/assets/sass/app.scss', 'public/assets/css/app.css')
    .options({
        processCssUrls: false,
    });