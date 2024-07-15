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

createBoard.getBoard();
console.table(createBoard.getBoard());

