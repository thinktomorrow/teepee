<!-- Routing en algemene variabelen -->
<?php require('config.php'); ?>
<!-- Hieronder halen we de master-file op -->
<?php
$filename = 'views/_layout/master.php';
if (file_exists($filename)) {
    include($filename); 
} else {
    print "<br>
    The file <mark>$filename</mark> does not exist yet.<br><br>
    Try running
    <pre><mark>|composer install<br>|npm install<br>|npm run dev/prod/watch</mark></pre><br>
    That should do the trick.";
    
}
?>