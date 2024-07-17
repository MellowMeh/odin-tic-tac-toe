const createBoard = (function () {
    const gameBoard = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ];
    function viewGameBoard() {
        return gameBoard.slice(0);
    };
    let humanMovesCounter = 0;
    function humanChangeGameBoardCell(row, column) {
        if (gameBoard[row][column] === 0) {
            gameBoard[row][column] = 1;
            ++humanMovesCounter;
        } else {
            alert('Please choose an available cell');
            humanChangeGameBoardCell();
        }
    };
    function easyAI () {
        let randomRow = Math.floor(Math.random() * 100);
            console.log(randomRow);
        let randomColumn = Math.floor(Math.random() * 100);
            console.log(randomColumn);
        if (randomRow < 34) {
            easyAIRow = 0;
        } else if (randomRow < 67){
            easyAIRow = 1;
        } else {
            easyAIRow = 2;
        }
        if (randomColumn < 34) {
            easyAIColumn = 0;
        } else if (randomColumn < 67) {
            easyAIColumn = 1;
        } else {
            easyAIColumn = 2;
        }
        console.log(easyAIColumn);
        console.log(easyAIRow);
    };
    function computerChangeGameBoardCell() {
        if (gameBoard[easyAIRow][easyAIColumn] === 0) {
            gameBoard[easyAIRow][easyAIColumn] = -1;
        } else if (humanMovesCounter < 5) {
            console.log('no worky');
            easyAI();
            computerChangeGameBoardCell();
        }
    }
    function sumGameBoard() {
        let addValues = (total, value) => {
                return total + value;
            }
        let row0Value = gameBoard[0].reduce(addValues);
            console.log(row0Value);
        let row1Value = gameBoard[1].reduce(addValues);
            console.log(row1Value);
        let row2Value = gameBoard[2].reduce(addValues);
            console.log(row2Value);

        let col0 = gameBoard.map(e => e[0]);
        let col0Value = col0.reduce(addValues);
            console.log(col0Value);
        let col1 = gameBoard.map(e => e[1]);
        let col1Value = col1.reduce(addValues);
            console.log(col1Value);
        let col2 = gameBoard.map(e => e[2]);
        let col2Value = col2.reduce(addValues);
            console.log(col2Value);

        let diagStartLeft = [];
        diagStartLeft.push(gameBoard[0][0], gameBoard[1][1], gameBoard[2][2]);
        let diagStartLeftValue = diagStartLeft.reduce(addValues);
            console.log(diagStartLeftValue);
        let diagStartRight = [];
        diagStartRight.push(gameBoard[0][2], gameBoard[1][1], gameBoard[2][0]);
        let diagStartRightValue = diagStartRight.reduce(addValues);
            console.log(diagStartRightValue);

        if (row0Value === 3 || row1Value === 3 || row2Value === 3 || col0Value === 3 || col1Value === 3 || col2Value === 3 || diagStartLeftValue === 3 || diagStartRightValue === 3) {
            alert('Human has won');
            location.reload();
            console.table(createBoard.viewBoard());
        }  
        if (row0Value === -3 || row1Value === -3 || row2Value === -3 || col0Value === -3 || col1Value === -3 || col2Value === -3 || diagStartLeftValue === -3 || diagStartRightValue === -3) {
            alert('Computer has won');
            location.reload();
            console.table(createBoard.viewBoard());
        }
    };
    function resetBoard() {
        gameBoard[0][0] = gameBoard[0][1] = gameBoard[0][2] = 0;
        gameBoard[1][0] = gameBoard[1][1] = gameBoard[1][2] = 0;
        gameBoard[2][0] = gameBoard[2][1] = gameBoard[2][2] = 0;
    };
    function executeRound() {
        createBoard.humanMove(row, column);
        console.table(createBoard.viewBoard());
        createBoard.easyAI();
        createBoard.computerMove();
        console.table(createBoard.viewBoard());
    }
    return {
        humanMove: (row, column) => humanChangeGameBoardCell(row, column),
        easyAI: () => easyAI(),
        computerMove: () => computerChangeGameBoardCell(),
        viewBoard: () => viewGameBoard(),
        getSum: (number) => sumGameBoard(number),
        restartGame: () => resetBoard(),
        executeRound: () => executeRound(),
        getBoardData: () => getBoardArrays(),
    }
})();

let PlayerFactory = function (name, status) {
    let player = {};
    player.name = name;
    player.status = status; //human or AI
    return player;
};

const playGame = (function () {
    let buttons = document.querySelectorAll('button');
    console.table(createBoard.viewBoard());
    for (let button of buttons){
        button.addEventListener('click', () => {
            target = event.target;
            switch (target.id) {
                case 'one':
                    row = 0;
                    column = 0;
                    createBoard.executeRound();
                    button.disabled = true;
                    createBoard.getSum();
                    break;
                case 'two':
                    row = 0;
                    column = 1;
                    createBoard.executeRound();
                    button.disabled = true;
                    createBoard.getSum();
                    break;
                case 'three':
                    row = 0;
                    column = 2;
                    createBoard.executeRound();
                    button.disabled = true;
                    createBoard.getSum();
                    break;
                case 'four':
                    row = 1;
                    column = 0;
                    createBoard.executeRound();
                    button.disabled = true;
                    createBoard.getSum();
                    break;
                case 'five':
                    row = 1;
                    column = 1;
                    createBoard.executeRound();
                    button.disabled = true;
                    createBoard.getSum();
                    break;
                case 'six':
                    row = 1;
                    column = 2;
                    createBoard.executeRound();
                    button.disabled = true;
                    createBoard.getSum();
                    break;
                case 'seven':
                    row = 2;
                    column = 0;
                    createBoard.executeRound();
                    button.disabled = true;
                    createBoard.getSum();
                    break;
                case 'eight':
                    row = 2;
                    column = 1;
                    createBoard.executeRound();
                    button.disabled = true;
                    createBoard.getSum();
                    break;
                case 'nine':
                    row = 2;
                    column = 2;
                    createBoard.executeRound();
                    button.disabled = true;
                    createBoard.getSum();
                    break;
            }
        })
    }
})();
