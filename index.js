import Board from './classes/board.js';
import Player from './classes/player.js';
const board = new Board();
const playerX = new Player('Char', 0, 0, 0);
const playerO = new Player('Carina', 0, 0, 0);

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
      // const index = item.dataset.index;
      // const result = document.getElementById('result');

      // try {
      //   board.addClickEvent(index);
      //   result.innerText = '';
      // } catch (error) {
      //   result.innerText = 'This space is already filled';
      // }
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
  fillScores();
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
  } else {
    result.innerText = `The winner of the game is ${resultOutcome.winner} and the direction is ${resultOutcome.direction}`;
    if (resultOutcome.winner === 'X') {
      playerX.addWin();
      playerO.addLoss();
    } else if (resultOutcome.winner === 'O') {
      playerO.addWin();
      playerX.addLoss();
    }
  }
  fillScores();
};

// const printError = () => {
//   const result = document.getElementById('result');
//   result.innerText = 'error message';
// };

// create function to fill name in results grid with name in player object inside load result function
const fillName = () => {
  const playerXName = document.getElementById('playerXName');
  playerXName.innerText = `${playerX.name}`;
  const playerOName = document.getElementById('playerOName');
  playerOName.innerText = `${playerO.name}`;
};

// create function to fill scores in results grid
const fillScores = () => {
  const playerXWins = document.getElementById('playerXWins');
  playerXWins.innerText = `${playerX.wins}`;
  const playerXLosses = document.getElementById('playerXLosses');
  playerXLosses.innerText = `${playerX.losses}`;
  const playerXDraws = document.getElementById('playerXDraws');
  playerXDraws.innerText = `${playerX.draws}`;

  const playerOWins = document.getElementById('playerOWins');
  playerOWins.innerText = `${playerO.wins}`;
  const playerOLosses = document.getElementById('playerOLosses');
  playerOLosses.innerText = `${playerO.losses}`;
  const playerODraws = document.getElementById('playerODraws');
  playerODraws.innerText = `${playerO.draws}`;
};
