<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="description" content="Portfolio">
    <meta name="keywords" content="Portfolio, sudoku">
    <meta name="author" content="Kostiantyn Surkov">
    <title>WP Games</title>
    <?php $version = Date('his');
        header('Cache-Control: no-cache, no-store, must-revalidate'); // HTTP 1.1.
        header('Pragma: no-cache'); // HTTP 1.0.
        header('Expires: 0'); // Proxies.
        echo "<link rel='stylesheet' href='style/main.css?v=$version'>";
        echo "<script src='js/sudoku.min.js?v=$version'></script>";
    ?>
    <script src='js/fontawesome.js'></script>
    <link rel="icon" href="files/ico.ico">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Averia+Libre&family=Hanalei+Fill&family=Patrick+Hand&family=Source+Sans+Pro:ital,wght@0,200;0,400;1,400&display=swap" rel="stylesheet">
</head>
<body>
<script src="js/sudoku.min.js"></script>
</body>
</html>