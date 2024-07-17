const createBoard = (function () {
    const gameBoard = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ];
    function viewGameBoard() {
        return gameBoard.slice(0);
    };
    function humanChangeGameBoardCell(row, column) {
        gameBoard[row][column] = 1;
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
        gameBoard[easyAIRow][easyAIColumn] = -1;
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
    };
    return {
        humanMove: (row, column) => humanChangeGameBoardCell(row, column),
        easyAI: () => easyAI(),
        computerMove: (row, column) => computerChangeGameBoardCell(row, column),
        viewBoard: () => viewGameBoard(),
        getSum: (number) => sumGameBoard(number),
    }
})();

let PlayerFactory = function (name, status) {
    let player = {};
    player.name = name;
    player.status = status; //human or AI
    return player;
};



createBoard.humanMove(1, 2);
createBoard.humanMove(2, 2);
createBoard.humanMove(2, 0);
createBoard.humanMove(0, 2);
createBoard.easyAI();
createBoard.computerMove(0, 1);
console.table(createBoard.viewBoard());
    createBoard.getSum();
let player1 = PlayerFactory('Robert', 'Human');
    console.log(player1);
