import Board from './classes/board.js';
const board = new Board();

const loadBoard = (boardState) => {
  const squares = document.querySelectorAll('.section');
  squares.forEach((square) => {
    const squareIndex = square.dataset.index;
    const currentValue = boardState[squareIndex];
    square.innerHTML = `<p>${currentValue}</p>`;
  });
};

document.addEventListener('DOMContentLoaded', () => {
  loadBoard(board.state);

  const squares = document.querySelectorAll('.section');
  squares.forEach((square, index) => {
    square.addEventListener('click', () => {
      board.addClickEvent(index);
      loadBoard(board.state);
      resultMessage();
    });
  });
});

const result = document.getElementById('result');
const resultMessage = () => {
  if (board.gameWon() === null) {
    result.innerText = '';
  } else if (board.gameWon() === { winner: 'draw', direction: null }) {
    result.innerText = 'The game is a draw';
  } else {
    result.innerText = `The winner of the game is WINNER and the direction is DIRECTION`;
  }
};
