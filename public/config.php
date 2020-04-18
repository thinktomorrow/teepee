<?php 
$request = $_SERVER['REQUEST_URI'];

$project_title = "Teepee";


//========================
//====== Routing =========
//========================

switch ($request) {
    case '/' : case '/home' : // meerder url's mogelijk door de cases op te splitsen
        $filename = "home"; //
        $page_title = "Homepagina";
        break;
    case '' : case '/home' :
        $filename = "home"; 
        $page_title = "Homepagina";
        break;
    case '/over-ons' : case '/about' :
        $filename = "about"; 
        $page_title = "Over ons";
        break;
    default:
        http_response_code(404);
        $filename = "404"; 
        $page_title = "Niet gevonden";
        break;
}
?>