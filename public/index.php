<?php require('config.php'); ?>
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title><?php print $project_title." ".$page_title; ?></title>
  <meta name="author" content="">
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://fonts.googleapis.com/css?family=Nunito:200,400,800&display=swap" rel="stylesheet">

  <link href="assets/main.css" type="text/css" rel="stylesheet" />
  <link rel="icon" type="image/svg+xml" href="assets/img/favicon.svg">

  <?php include('_layout/partials/manifest.php') ?>
  <?php include('_layout/partials/metaheader.php') ?>

</head>

<body>

  <?php include('assets/img/svg-symbol.php'); ?>
  <?php include('_layout/header.php'); ?>


  <main class="container flex stack h-64 items-center">
      
      <?php include('views/'. $filename. '.php'); ?>

  </main>

  <?php include('_layout/footer.php'); ?>


  <script src="assets/main.js"></script>
</body>

</html>