<?php

$html = file_get_contents('views/pages/content/'. $filename. '/index.md');
$Parsedown = new Parsedown();
echo $Parsedown->text($html);

?> 
