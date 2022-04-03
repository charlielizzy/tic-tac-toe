import Board from './classes/board.js';
import Player from './classes/player.js';
const board = new Board();
const playerX = new Player('Charlotte', 'X', 0, 0, 0);
const playerO = new Player('Carina', 'O', 0, 0, 0);

const loadBoard = (boardState) => {
  const squares = document.querySelectorAll('.section');
  squares.forEach((square) => {
    const squareIndex = square.dataset.index;
    const currentValue = boardState[squareIndex];
    square.innerHTML = `<p>${currentValue}</p>`;
  });
  // fillName();
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

  const result = document.getElementById('result');
  const resetButton = document.getElementById('reset');
  resetButton.addEventListener('click', () => {
    board.resetBoard();
    loadBoard(board.state);
    result.innerText = '';
  });
  fillName();
  // loadResultGrid();
});

const resultMessage = () => {
  const result = document.getElementById('result');
  const resultOutcome = board.gameWon();
  if (resultOutcome === null) {
    result.innerText = '';
  } else if (resultOutcome.winner === 'draw') {
    result.innerText = 'The game is a draw';
    playerX.addDraw();
    playerO.addDraw();
    //load result grid
  } else {
    result.innerText = `The winner of the game is ${resultOutcome.winner} and the direction is ${resultOutcome.direction}`;
    if (resultOutcome.winner === 'X') {
      playerX.addWin();
      console.log(playerX.wins);
      playerO.addLoss();
    } else if (resultOutcome.winner === 'O') {
      playerO.addWin();
      playerX.addLoss();
    }
    //load result grid
    // fillName();
  }
};

//create load result grid function
// const loadResultGrid = () => {
//   const resultGrid = document.getElementById('scores');
//   fillName();
// };

// create function to fill name in results grid with name in player object inside load result function
const fillName = () => {
  const playerXName = document.getElementById('playerXName');
  playerXName.innerText = `${playerX.name}`;
  const playerOName = document.getElementById('playerOName');
  playerOName.innerText = `${playerO.name}`;
};

// playerX.fillName();
