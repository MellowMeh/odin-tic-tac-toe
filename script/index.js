const createBoard = (function () {
    const gameBoard = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ];
    const getGameBoard = () => gameBoard;
    return {
        getBoard: () => getGameBoard(),
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
    let gameBoard = createBoard.getBoard();
    let row0 = gameBoard[0];
    let row1 = gameBoard[1];
    let row2 = gameBoard[2];
    let col0 = gameBoard.map(d => d[0]);
    let col1 = gameBoard.map(d => d[1]);
    let col2 = gameBoard.map(d => d[2]);
})();

const playGame = (function () {
    let player1 = PlayerFactory('Robert', 'Human');
    console.log(player1);
    easyAI.getEasyAIIndex();
})();
