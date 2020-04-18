<header class="container stack flex justify-between">
    <span><?php print $project_title ?></span>
    <nav>
        <a class="p-2 <?php if ($filename == "home") {?>active<?php }?>" href="/home">Home</a>
        <a class="p-2 <?php if ($filename == "about") {?>active<?php }?>" href="/about">Over ons</a>
    </nav>
</header>

