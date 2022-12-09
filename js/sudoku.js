    // sudoku.js
    const navMenuItems = ["Home", "Play", "Rules"];
    const footerLinks = new Map([
        ['Github', 'https://github.com/SurkovKostiantyn/react_onix_academy'],
        ['Instagram', 'https://www.instagram.com/constantin296'],
        ['Telegram', 'https://t.me/iplague']]
    );
    let x = 0;
    const levels = ['Easy', 'Medium', 'Hard', 'Harder', 'Insane', 'Extreme', 'God', 'Impossible', 'Unsolvable'];
    const colors = [
        '#3cdc64cc',
        '#50c864cc',
        '#64b464cc',
        '#78a064cc',
        '#8c8c64cc',
        '#a07864cc',
        '#b46464cc',
        '#c85064cc',
        '#dc3c64cc'];

    const fColors = [
        '#0a5a0a',
        '#14500a',
        '#1e460a',
        '#283c0a',
        '#32320a',
        '#3c2823',
        '#461e1f',
        '#501422',
        '#5a0a0a'];
    let timerCounter = null, seconds = 0, isGameStarted = false;
    let sGameField = [], sGameFieldSolved = [], iZeroCellsNum = 0, iHintsUsedNum = 0;
    let header, nav, container, sudoku, footer, container_Play, container_Rules, container_Home, range, p_info_timer,p_info_cells,p_info_level;

    window.onload = () => {
        buildHtml();
        buildMenu();
        buildBlocks();
        buildControlPanel();
        buildFooter();
        drawBorder(0);
    }

    buildHtml = () =>{
        let body = document.getElementsByTagName("body")[0];

        // create header
        header = document.createElement('header');
        header.id = 'header';
        header.innerHTML = 'SUDOKU';
        header.onclick = () => location.reload();
        body.appendChild(header);

        // create navigation
        nav = document.createElement('nav');
        nav.id = 'nav';
        body.appendChild(nav);

        // container
        container = document.createElement('div');
        container.id = 'container';
        container.style.backgroundColor = colors[0];
        body.appendChild(container);

        // footer
        footer = document.createElement('footer');
        footer.id = 'footer';
        body.appendChild(footer);
    }

    buildMenu = () => {
        //let nav = document.getElementById('nav');
        // create items
        for (let item of navMenuItems) {
            // create a
            let a = document.createElement('a');
            a.className = 'btn zoom Easy';
            a.id = 'a_' + item;
            a.href = '#';
            a.innerHTML = item;
            a.onclick = () => {
                //let header = document.getElementById('header');
                if(item !== 'Play'){
                    header.classList.remove("hidden");
                }else{
                    header.classList.add("hidden");
                }
                document.getElementById('container_'+item).style.display = 'block';
                let previousId = container.children;
                for (let j = 0; j < previousId.length; j++) {
                    if(previousId[j].style.display === 'block' && previousId[j].id !== 'container_'+item) {
                        previousId[j].style.display = 'none';
                    }
                }
            };
            nav.appendChild(a);
        }
    }

    buildBlocks = () => {
        //let container = document.getElementById('container');
        for (let i = 0; i < navMenuItems.length; i++) {
            window[`container_${navMenuItems[i]}`] = document.createElement('div');
            container.appendChild(window[`container_${navMenuItems[i]}`]);
            window[`container_${navMenuItems[i]}`].id = 'container_' + navMenuItems[i];
            window[`container_${navMenuItems[i]}`].style.display = navMenuItems[i] === 'Home' ? 'block' : 'none';
            buildContent(navMenuItems[i]);
        }
    }

    buildContent = (navMenuItems) => {
        switch (navMenuItems) {
            case 'Home':
                buildHome();
                break;
            case 'Play':
                buildGame();
                break;
            case 'Rules':
                buildRules();
                break;
        }
    }

    buildHome = () => {
        container_Home = document.getElementById('container_Home');
        let h1 = document.createElement('h1');
        container_Home.appendChild(h1);
        h1.innerHTML = 'Hi!';

        let p = document.createElement('p');
        container_Home.appendChild(p);
        p.innerHTML = 'Welcome to my portfolio project. This is a simple game, where you have to solve sudoku. You can choose between 7 levels of difficulty. Good luck!';
    }

    buildRules = () => {
        container_Rules = document.getElementById('container_Rules');
        let h1 = document.createElement('h1');
        container_Rules.appendChild(h1);
        h1.innerHTML = 'Rules';
        let p = document.createElement('p');
        container_Rules.appendChild(p);
        p.innerHTML = 'The objective of Sudoku is to fill a 9×9 grid with numbers so that each row, column and 3×3 section contain all of the digits between 1 and 9. As a logic puzzle, Sudoku is also an excellent brain game. If you play Sudoku daily, you will soon start to see improvements in your concentration and overall brain power. Start a game now.  ';
    }

    buildGame = () => {
        sudoku = document.createElement('div');
        sudoku.id = 'sudoku';
        container_Play = document.getElementById('container_Play');
        container_Play.appendChild(sudoku);

        // timer field
        p_info_timer = document.createElement('p');
        p_info_timer.id = 'p_info_timer';
        p_info_timer.innerHTML = 'Time: 00:00:00';
        container_Play.appendChild(p_info_timer);

        // create 81 blocks
        for (let i = 0; i < 81; i++) {
            let input = document.createElement('input');
            input.type = 'number';
            input.min = '1';
            input.max = '9';
            input.pattern = '[1-9]{1}';
            input.id = 'input' + i;
            input.value = '';
            input.readOnly = true;
            sudoku.appendChild(input);
        }
    }

    buildControlPanel = () => {
        // create lever range
        let controlPanel = document.createElement('div');
        controlPanel.id = 'controlPanel';
        container_Play.appendChild(controlPanel);

        let changeLevel = document.createElement('div');
        changeLevel.id = 'changeLevel';
        controlPanel.appendChild(changeLevel);

        range = document.createElement('input');
        range.id = 'range';
        range.type = 'range';
        range.min = '7';
        range.max = '15';
        range.value = '7';
        range.oninput = () => showLevel();
        changeLevel.appendChild(range);

        p_info_cells = document.createElement('p');
        p_info_cells.id = 'p_info_cells';
        p_info_cells.innerHTML = `Cells: 0, Hints used: 0`;
        changeLevel.appendChild(p_info_cells);

        p_info_level = document.createElement('p');
        p_info_level.id = 'p_info_level';
        p_info_level.innerHTML = `Level: ${levels[range.value - range.min]}`;
        changeLevel.appendChild(p_info_level);

        let buttonsBlock = document.createElement('div');
        buttonsBlock.id = 'buttonsBlock';
        controlPanel.appendChild(buttonsBlock);

        // create button start
        let btn = document.createElement('a');
        btn.className = 'Easy zoom';
        btn.innerHTML = `New Game`;
        btn.id = 'btn';
        btn.onclick = () => startGame();
        buttonsBlock.appendChild(btn);

        // create button show hint
        let btnHint = document.createElement('a');
        btnHint.className   = 'Easy zoom';
        btnHint.innerHTML = 'Show Hint';
        btnHint.id = 'btnHint';
        buttonsBlock.appendChild(btnHint);
    }

    drawBorder = (level) => {
        ++level;
        //let sudoku = document.getElementById('sudoku');
        let pathABCD = [];
        let x = Math.floor(Math.random() * (level+2 - 2) + 2), y = 0;
        for (x, y; x < 100 - level; x += Math.floor(Math.random() * (level+2 - 2) + 2), y=~y) {
            let pathAB = [];
            pathAB.push(`${x}%`);
            pathAB.push(`${0 - y * level}%`);
            pathABCD.push(pathAB);
        }
        y = parseInt(pathABCD[pathABCD.length - 1][1]) + Math.floor(Math.random() * (level+2 - 2) + 2);
        x = 0;
        for (x,y; y < 100 - level; y += Math.floor(Math.random() * (level+2 - 2) + 2), x=~x) {
            let pathBC = [];
            pathBC.push(`${100 + x * level}%`);
            pathBC.push(`${y}%`);
            pathABCD.push(pathBC);
        }
        x = 100 - Math.floor(Math.random() * (level+2 - 2) + 2); y = 0;
        for (x,y; x > level; x -= Math.floor(Math.random() * (level+2 - 2) + 2), y=~y) {
            let pathCD = [];
            pathCD.push(`${x}%`);
            pathCD.push(`${100 + y * level}%`);
            pathABCD.push(pathCD);
        }
        y = parseInt(pathABCD[pathABCD.length - 1][1]) - Math.floor(Math.random() * (level+2 - 2) + 2);
        x = 0;
        for (x,y; y > parseInt(pathABCD[0][1]) + level; y -= Math.floor(Math.random() * (level+2 - 2) + 2), x=~x) {
            let pathDA = [];
            pathDA.push(`${0 - x * level}%`);
            pathDA.push(`${y}%`);
            pathABCD.push(pathDA);
        }
        pathABCD = pathABCD.map(item => item.join(' ')).join(',');

        if(sudoku.querySelector("style") !== null){
            sudoku.querySelector("style").remove();
        }
        let style = document.createElement('style');
        style.innerHTML = `#sudoku:before {clip-path: polygon(${pathABCD}); margin: ${-25 - level}px;}; }`;
        document.getElementById("sudoku").appendChild(style);
    }

    showHint = () => {
        let inputs = document.querySelectorAll('input');

        let input = inputs[Math.floor(Math.random() * inputs.length)];
        while (input.value !== '') {
            input = inputs[Math.floor(Math.random() * inputs.length)];
        }
        let i = input.id.replace('input', '');
        let x = Math.floor(i / 9);
        let y = i % 9;
        input.value = sGameFieldSolved[x][y];
        sGameField[x][y] = sGameFieldSolved[x][y];
        input.style.backgroundColor = 'lightcoral';
        input.style.transition = 'all 0.2s';
        setTimeout(() => {  input.style.backgroundColor = '#FAEBD7FF'; }, 200);
        input.readOnly = true;
        checkInput(input);
        iHintsUsedNum++;
        p_info_cells.innerHTML = `Cells: ${iZeroCellsNum}, Hints used: ${iHintsUsedNum}`;
    }

    showTimer = () => {
        seconds++;
        let h = Math.floor(seconds / 3600);
        let m = Math.floor(seconds / 60);
        let sec = seconds % 60;
        p_info_timer.innerHTML = `Time: ${h < 10 ? '0' + h : h}:${m < 10 ? '0' + m : m}:${sec < 10 ? '0' + sec : sec}`;
    }

    buildFooter = () => {
        //let footer = document.getElementById('footer');
        // create items
        for (let item of footerLinks.entries()) {
            let a = document.createElement('a');
            a.id = 'a_' + item[0];
            a.href = item[1];
            a.className = 'btn zoom Easy';
            footer.appendChild(a);
        }
        let p = document.createElement('p');
        p.id = 'footer_text';
        p.innerHTML = '© 2022 by Surkov Kostiantyn';
        p.onclick = () => location.reload();
        footer.appendChild(p);
    }

    showLevel = () => {
        const level = range.value - range.min;
        p_info_level.innerHTML = `Level: ${levels[level]}`;

        let allLinks = document.getElementsByClassName('btn');

        for(let i = 0; i < 81; i++) {
            let input = document.getElementById('input' + i);
            input.style.backgroundColor = 'none';
            input.value = '';
        }

        for(let i = 0; i < allLinks.length; i++) {
            for(let j = 0; j < colors.length; j++) {
                allLinks[i].classList.remove(levels[j]);
            }
            allLinks[i].classList.add(levels[level]);
        }

        changeBackgroundImage(level);
        changeBackgroundColor(level);
        drawBorder(level);
    }

    changeBackgroundImage = (level) => sudoku.style.backgroundImage = `url(files/bg/${level+1}.png)`;

    changeBackgroundColor = (index) => container.style.backgroundColor = colors[index];

    showWinMessage = () => {
        p_info_cells.style.display = 'none';
        clearInterval(timerCounter);

        let winMessageBlock = document.createElement('div');
        winMessageBlock.id = 'winMessageBlock';
        setTimeout(() => {
            winMessageBlock.style.textShadow = '0 0 0 rgb(0,0,0)';
        }, 100);
        winMessageBlock.innerHTML = 'You win!';
        sudoku.appendChild(winMessageBlock);
        setTimeout(() => {
            winMessageBlock.remove();
        }, 5000);
        createFireworks();
   }

    createFireworks = () => {
        for(let firework = 1; firework <= 20; firework++) { // MAX 20
            let div = document.createElement('div');
            div.className = `firework-${firework}`;
            div.style.left = Math.floor(Math.random() * (90 - 10) + 10) + '%';
            div.style.top = Math.floor(Math.random() * (90 - 10) + 10) + '%';
            container_Play.appendChild(div);
            setTimeout((div) => {
                div.remove();
            }, 5000, div);
        }
    }

    startGame = () => {

        let sVal = new Array(9).fill(null).map(()=> (new Array(9).fill(0)));
        getSolvedField(sVal);
        iHintsUsedNum = 0;
        iZeroCellsNum = 0;
        createField(sVal);

        if(timerCounter) {
            clearInterval(timerCounter);
            timerCounter = null;
            seconds = 0;
        }
        timerCounter = setInterval(() => showTimer(0), 1000);
        document.getElementById('btnHint').onclick = () => showHint();

        let btn = document.getElementById('btn');
        btn.innerHTML = 'End Game';
        btn.onclick = () => endGame();

        range.disabled = true;
        range.style.display = 'none';

        p_info_cells.style.display = 'block';

        sudoku.style.backgroundColor = '#FAEBD7FF';
        sudoku.style.backgroundImage = 'none';
        isGameStarted = true;
    }

    endGame = (showWinMsg = false) => {
        if(showWinMsg)
            showWinMessage();

        let btn = document.getElementById('btn');
        btn.onclick = null;
        let hint = document.getElementById('btnHint');
        hint.onclick = null;
        clearInterval(timerCounter);
        timerCounter = null;
        seconds = 0;
        p_info_timer.innerHTML = `Time: 00:00:00`;
        for(let i = 0; i < 81; i++) {
            let input = document.getElementById('input' + i);
            setTimeout(() => {
                if(sGameField[Math.floor(i / 9)][i % 9] === 0) {
                    input.style.color = fColors[range.value - range.min];
                }else
                    input.style.color = '#000';
                input.readOnly = false;
                input.value = sGameFieldSolved[Math.floor(i / 9)][i % 9];
                input.style.transition = 'all 0.05s';
                input.style.backgroundColor = fColors[range.value - range.min];
                setTimeout(() => {
                    input.style.backgroundColor = 'rgba(255,255,255,0)';
                }, 50);}, 50 * i);
        }
        setTimeout(() => {
            range.disabled = false;
            range.style.display = 'block';
            p_info_cells.style.display = 'none';
            btn.innerHTML = 'New Game';
            btn.onclick = () => startGame();
            changeBackgroundColor(range.value - range.min);
        }, 50 * 81);
        isGameStarted = false;
    }

    isCorrectValue = (x, y, num, sVal) => {
        if(sVal.filter((el,i) => el[x] === num && i !== y).length > 0) return false;
        if(sVal[y].filter((el,i) => el === num && i !== x).length > 0) return false;
        let blockX = Math.floor(x/3);let blockY = Math.floor(y/3);
        for(let i = blockY*3; i < blockY*3+3; i++)for(let j = blockX*3; j < blockX*3+3; j++)if(sVal[i][j] === num && i !== y && j !== x) return false;
        return true;
    }

    getSolvedField = (sVal) =>{
        if(isValid(sVal) === false)
            return 2;
        for(let y = 0; y <  sVal.length; y++){
            for(let x = 0; x < sVal[y].length; x++){
                if(sVal[y][x] !== 0)
                    continue;
                let numbers = [1,2,3,4,5,6,7,8,9].sort(() => Math.random() - 0.5);
                for(let n = 0; n < 9; n++){
                    if(isCorrectValue(x, y, numbers[n], sVal)){
                        sVal[y][x] = numbers[n];
                        let status = getSolvedField(sVal); // рекурсия
                        if(status === 1)return 1;
                        else if(status === 2)sVal[y][x] = 0;
                    }
                }
                return 2;
            }
        }
        return 1;
    }

    isValid = (sVal) =>{
        for(let y = 0; y < sVal.length; y++)
            for(let x = 0; x < sVal[y].length; x++)
                if(isCorrectValue(x, y, sVal[y][x], sVal) === false && sVal[y][x] !== 0)
                    return false;
        return true;
    }

    createField = (sValSolved) => {
        sGameFieldSolved = sValSolved.map(el => el.slice());
        sGameField = sValSolved.map(el => el.slice());
        for (let i = 0; i < 81; i++) {
            let indexX = Math.floor(i / 9);
            let indexY = i % 9;
            let chance = Math.floor(Math.random() * range.value);
            if(chance > 5) {
                sGameField[indexX][indexY] = 0;
                iZeroCellsNum++;
            }
            let input = document.getElementById('input' + i);
            input.style.backgroundColor = '#FAEBD7FF';
            if(sGameField[indexX][indexY] !== 0) {
                input.readOnly = true;
                input.value = sGameField[indexX][indexY];
                    input.style.color = fColors[range.value - range.min];
                    input.removeAttribute('onchange');
                input.removeAttribute('onclick');
            }else {
                input.removeAttribute('readonly');
                input.value = '';
                input.onchange = function(){checkInput(this)};
                input.style.color = 'black';
                input.onclick = () => showHighlight();
            }
        }
        p_info_cells.innerHTML = `Cells: ${iZeroCellsNum}, Hints used: ${iHintsUsedNum}`;
    }

    checkInput = (i) => {
        i.value = (i.value > 9 || i.value < 1) ? 0 : i.value;
        let idx = +i.id.replace('input', '');
        let indexX = Math.floor(idx / 9);
        let indexY = idx % 9;
        sGameField[indexX][indexY] = +i.value;
        if(checkSudoku(sGameField.map(el => el.slice())) === true)
            endGame(true);
    }

    checkSudoku = (copy) => {
        for(let i = 0; i < 9; i+=3) {
            for(let j = 0; j < 9; j+=3) {
                let block = [];
                for(let k = i; k < i+3; k++)for(let l = j; l < j+3; l++) block.push(copy[k][l]);
                if(block.sort().join('') !== '123456789')return false;
            }
        }
        let cols = copy.map((row, i) => copy.map(col => col[i]));
        for(let row = 0; row < 9; row++)if (cols[row].sort().join('') !== '123456789')return false;
        for(let row = 0; row < 9; row++)if (copy[row].sort().join('') !== '123456789')return false;
        return true;
    }

    showHighlight = () => {
        if(!isGameStarted)return;
        let colorID = range.value - range.min;
        let input = document.activeElement;
        let idx = +input.id.replace('input', '');
        let indexX = Math.floor(idx / 9);
        let indexY = idx % 9;
        let blockX = Math.floor(indexX/3);let blockY = Math.floor(indexY/3);
        for(let i = 0; i < 81; i++) {
            let prevInput = document.getElementById('input' + i);
            prevInput.style.backgroundColor = '#FAEBD7FF';
            prevInput.style.transition = 'background 0.5s';
        }
        for(let i = 0; i < 9; i++) {
            let rowInput = document.getElementById('input' + (indexX * 9 + i));
            rowInput.style.backgroundColor = colors[colorID];
            let columnInput = document.getElementById('input' + (indexY + i * 9));
            columnInput.style.backgroundColor = colors[colorID];
        }
        for(let i = blockX*3; i < blockX*3+3; i++)for(let j = blockY*3; j < blockY*3+3; j++) {
            let input = document.getElementById('input' + (i * 9 + j));
            input.style.backgroundColor = colors[colorID];
        }
    }

    window.addEventListener('focusout', (event) => {
        if(event.target.tagName === 'INPUT') {
            for(let i = 0; i < 81; i++) {
                let prevInput = document.getElementById('input' + i);
                prevInput.style.backgroundColor = 'rgba(0, 0, 0, 0)';
                prevInput.style.transition = 'background 0.5s';
            }
        }
    });