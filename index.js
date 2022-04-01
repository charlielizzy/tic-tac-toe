import Board from './classes/board.js';
const board = new Board();

// board.addNewState("X", 4);
// board.printBoard();

// board.availableIndex();

console.log(board.gameWon());

const loadBoard = (boardState) => {
  const squares = document.querySelectorAll('.section');
  squares.forEach((square) => {
    const squareIndex = square.dataset.index;
    const currentValue = boardState[squareIndex];
    square.innerHTML = `<p>${currentValue}</p>`;
  });
};

loadBoard(board.state);
board.addClickEvent();
