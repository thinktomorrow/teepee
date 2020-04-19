# Teepee

Snel starten met gewone php files.
Géén framework, maar een eerste opzet van bestandstructuren en assets.

### Start met 👇

```
composer install
npm install
npm run dev/prod/watch
```

### Pagina's en routes
In ```config.php``` kan je routes naar je pagina's aanmaken. Om te starten zijn er al 3 pagina's beschikbaar: Home, about, 404.
Deze routes vind je terug in de config-file.

Om een pagina bij aan te maken, moet je in de folder ```public/views/pages``` een nieuwe pagina aanmaken.

Dan ga je in ```config.php``` een route definiëren die naar die pagina gaat.

```php
    case '/url-1' : case '/url-2' : //meerdere routes
        $filename = "bestandsnaam"; //lowcaps
        $page_title = "Titel voor de pagina"; // wordt gebruikt in de title-tag
        break;
```

Dat was het in een notendop. Veel plezier.
