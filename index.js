import Board from "./classes/board.js";
const board = new Board();

board.addNewState("X", 4);
// board.printBoard();

board.availableIndex();

console.log(board.gameWon());

board.loadBoard();
board.addClickEvent();
