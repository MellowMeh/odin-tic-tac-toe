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

const playGame = (function () {
    createBoard.getBoard();
    console.table(createBoard.getBoard());
    let player1 = PlayerFactory('Robert', 'Human');
    console.log(player1);
})();
