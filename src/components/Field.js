const MemoryBlock = (props) => {
    let memoryBlocks = [];
    for (let i = 0; i < props.numberOfBlocks; i++) {
        memoryBlocks.push(<div className='memoryBlock' key={i} ></div>);
    }
    return memoryBlocks;
}

const SudokuBlock = (props) => {
    let sudokuBlocks = [];
    for (let i = 0; i < props.numberOfInputs; i++) {
        let index = 'input'+i;
        sudokuBlocks.push(<input type="number" min="1" max="9" pattern="[1-9]" id={index} key={i} />);
    }
    return sudokuBlocks;
}

let Field = () =>{
return (
        <div id="container" style={{backgroundColor: '#3CDC64CC'}}>
            <div id="container_Home" style={{display:'block'}}>
                <h1>Hi!</h1>
                <p>Welcome to my portfolio project. This is a simple game, where you have to solve sudoku. You can choose between 9 levels of difficulty. Good luck!</p>
            </div>
            <div id="container_Play" style={{display:'none'}}>
                <div id="gameButtonsBlock" style={{display:'flex'}}>
                    <button className="btn zoom Easy" id="gameButton_1">Sudoku</button>
                    <button className="btn zoom Easy" id="gameButton_2">Memory</button>
                </div>
                <div id="gameField1" style={{display:'none'}}>
                    <div id="sudoku" style={{backgroundImage:'url(files/bg/1.png)'}}>
                        < SudokuBlock numberOfInputs="81" />
                    </div>
                </div>
                <div id="gameField2" style={{display:'none'}}>
                    <div id="memory">
                        < MemoryBlock numberOfBlocks="100"/>
                    </div>
                </div>
                <p id="p_info_timer" style={{display:'none'}}>Time: 00:00:00</p>
                <div id="controlPanel" style={{display:'none'}}>
                    <div id="changeLevel">
                        <input type="range" min="7" max="15" step="1" id="range"/>
                        <p id="p_info_cells">Cells: 0, Hints used: 0</p><p id="p_info_level">Level: Easy</p>
                    </div>
                    <div id="buttonsBlock">
                        <a className="btn Easy zoom" id="btnNewGame">New Game</a>
                        <a className="btn Easy zoom" id="btnHint">Hint</a>
                        <a className="btn Easy zoom" id="btnMenu">Menu</a>
                    </div>
                </div>
            </div>
            <div id="container_Rules" style={{display:'none'}}>
                <h1>Rules</h1>
                <p>The objective of Sudoku is to fill a 9×9 grid with numbers so that each row, column and 3×3 section contain all of the digits between 1 and 9. As a logic puzzle, Sudoku is also an excellent brain game. If you play Sudoku daily, you will soon start to see improvements in your concentration and overall brain power. Start a game now.  </p>
            </div>
        </div>
    )
}

export default Field;