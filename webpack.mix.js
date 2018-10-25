const mix = require('laravel-mix');

mix.js('resources/assets/js/app.js', 'public/assets/js/app.js')
    .sass('resources/assets/sass/teepee.scss', 'public/assets/css/style.css')
    .options({
        processCssUrls: false,
    });