const createBoard = (function () {
    const gameBoard = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
    ];
    const getGameBoard = () => gameBoard;
    let row1 = gameBoard[0], row2 = gameBoard[1], row3 = gameBoard[2];
    let col1 =[], col2 = [], col3 = [];
        gameBoard.forEach(x => {col1.push(x[0]); col2.push(x[1]); col3.push(x[2])});
    let diag1 = [];
        diag1.push(gameBoard[0][0], gameBoard[1][1], gameBoard[2][2]); 
    let diag2 = [];
        diag2.push(gameBoard[0][2], gameBoard[1][1], gameBoard[2][0]); 
    return {
        getBoard: () => getGameBoard(),
        row1,
        row2,
        row3,
        col1,
        col2,
        col3,
        diag1,
        diag2,
    }
})();

let PlayerFactory = function (name, status) {
    let player = {};
    player.name = name;
    player.status = status; //human or AI
    return player;
};

const easyAI = (function () {
    const randomDecimal = Math.random();
    const getRandomNumber = (randomDecimal*100);
    console.log(getRandomNumber);
    const changeIndex = () => {
        if (getRandomNumber < 12) {
            let gameBoard = createBoard.getBoard();
                gameBoard[0][0] = -1;
                console.table(createBoard.getBoard());
        } else if (getRandomNumber < 23) {
            let gameBoard = createBoard.getBoard();
                gameBoard[0][1] = -1;
                console.table(createBoard.getBoard());
        } else if (getRandomNumber < 34) {
            let gameBoard = createBoard.getBoard();
                gameBoard[0][2] = -1;
                console.table(createBoard.getBoard());
        } else if (getRandomNumber < 45) {
            let gameBoard = createBoard.getBoard();
                gameBoard[1][0] = -1;
                console.table(createBoard.getBoard());
        } else if (getRandomNumber < 56) {
            let gameBoard = createBoard.getBoard();
                gameBoard[1][1] = -1;
                console.table(createBoard.getBoard());
        } else if (getRandomNumber < 67) {
            let gameBoard = createBoard.getBoard();
                gameBoard[1][2] = -1;
                console.table(createBoard.getBoard());
        } else if (getRandomNumber < 78) {
            let gameBoard = createBoard.getBoard();
                gameBoard[2][0] = -1;
                console.table(createBoard.getBoard());
        } else if (getRandomNumber < 89) {
            let gameBoard = createBoard.getBoard();
                gameBoard[2][1] = -1;
                console.table(createBoard.getBoard());
        } else {
            let gameBoard = createBoard.getBoard();
                gameBoard[2][2] = -1;
                console.table(createBoard.getBoard());
        }
    };
    return {
        getEasyAIIndex: () => changeIndex(),
        
    } 
})();

const sumArrays = (function () {
    console.log(createBoard.col1);
})();

const playGame = (function () {
    let player1 = PlayerFactory('Robert', 'Human');
    console.log(player1);
    easyAI.getEasyAIIndex();
})();
