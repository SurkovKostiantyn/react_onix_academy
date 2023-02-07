window.onload = () => {
    document.querySelectorAll('[id^="menu_a_"]').forEach((item) => {
        item.addEventListener('click', () => switchMenu(item));
    });
    document.querySelectorAll('[id^="gameButton_"]').forEach((item) => {
        item.addEventListener('click', () => switchGames(item));
    });
}
switchMenu = (el) => {
    let header = document.getElementById('header');
    let container = document.getElementById('container');
    let item = el.textContent;
    (item === 'Play') ? header.classList.add("hidden") :  header.classList.remove("hidden");
    document.getElementById('container_'+item).style.display = 'block';
    let previousId = container.children;
    for (let j = 0; j < previousId.length; j++) {
        if(previousId[j].style.display === 'block' && previousId[j].id !== 'container_'+item) {
            previousId[j].style.display = 'none';
        }
    }
}

switchGames = (el) => {
    let id = el.id.replace('gameButton_', '');
    document.querySelectorAll('[id^="gameField"]').forEach(
        (item) => {
            if(item.id === 'gameField'+id) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        }
    )
    document.getElementById('controlPanel').style.display = 'block';
    document.getElementById('p_info_timer').style.display = 'block';
    document.getElementById('gameButtonsBlock').style.display = 'none';
}