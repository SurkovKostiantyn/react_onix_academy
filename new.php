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
    echo "<link rel='stylesheet' href='styles/main.css?v=$version'>";
    echo "<link rel='stylesheet' href='js/sudoku.min.js?v=$version'>";
    ?>
    <link rel="icon" href="files/ico.ico">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Averia+Libre&family=Hanalei+Fill&family=Patrick+Hand&family=Source+Sans+Pro:ital,wght@0,300;1,400&display=swap" rel="stylesheet">
    <script src="https://kit.fontawesome.com/a7c1eeb7ad.js" crossorigin="anonymous"></script>
</head>
<body>
    <header id="header">SUDOKU</header>
    <nav id="nav">
        <ul id="nav_menu">
            <li id="nav_menu_item" class="nav_menu_item">
                <a href="" id="nav_menu_item_link1"></a>
            </li>
            <li id="nav_menu_item" class="nav_menu_item">
                <a href="" id="nav_menu_item_link2"></a>
            </li>
            <li id="nav_menu_item" class="nav_menu_item">
                <a href="" id="nav_menu_item_link3"></a>
            </li>
        </ul>
    </nav>
    <div id="container_home">
        <p class="text_header"></p>
        <p class="text_text"></p>
    </div>
    <div id="container_sudoku">
        <div id="container_sudoku_info">
            <p id="container_sudoku_info_timer"></p>
            <p id="container_sudoku_info_level"></p>
            <p id="container_sudoku_info_cells"></p>
        </div>
        <div id="container_sudoku_board">
            <?php for($i = 0; $i < 81; $i++):?>
                <label for="container_sudoku_board_cell<?= $i;?>"></label><input type="number" min="1" max="9" value = '' id="container_sudoku_board_cell<?= $i;?>"></input>
            <?php endfor; ?>
        </div>
        <div id="container_sudoku_level">
            <label for="container_sudoku_level_range"></label><input type="text" type="range" min="7" max="15" value="7" id="container_sudoku_level_range">
        </div>
        <div id="container_sudoku_buttons">
            <button id="container_sudoku_buttons_start"></button>
            <button id="container_sudoku_buttons_hint"></button>
        </div>
    </div>
    <div id="container_rules">
        <p class="text_header"></p>
        <p class="text_text"></p>
    </div>

    <footer id="footer">
        <li id="menu_item" class="menu_item">
            <a href="" id="menu_item_link1"></a>
        </li>
        <li id="menu_item" class="menu_item">
            <a href="" id="menu_item_link2"></a></li>
        <li id="menu_item" class="menu_item">
            <a href="" id="menu_item_link3"></a>
        </li>
    </footer>

</body>
</html>