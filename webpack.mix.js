const mix = require('laravel-mix');

mix.js('resources/assets/js/head.js', 'public/assets/js/head.js')
    .sass('resources/assets/sass/teepee.scss', 'public/assets/css/style.css')
    .options({
        processCssUrls: false,
    });