<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title><?php print $project_title." ".$page_title; ?></title>
  <meta name="author" content="">
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://fonts.googleapis.com/css?family=Nunito:200,400,800&display=swap" rel="stylesheet">

  <link href="compiled_assets/main.css" type="text/css" rel="stylesheet" />
  <link rel="icon" type="image/svg+xml" href="compiled_assets/svg/favicon.svg">

  <?php include('views/_layout/partials/manifest.php') ?>
  <?php include('views/_layout/partials/metaheader.php') ?>

</head>

<body>
  <?php 
  include('compiled_assets/svg/svg-symbol.php'); 
  include('views/_layout/header.php');
  ?>


  <main class="container flex stack h-64 items-center">
      
      <?php include('views/pages/'. $filename. '.php'); ?>

  </main>

  <?php include('views/_layout/footer.php'); ?>


  <script src="compiled_assets/main.js"></script>
</body>

</html>