// import Board from './classes/board.js';

export default class Player {
  constructor(name, wins = 0, losses = 0, draws = 0) {
    this.name = name;
    this.wins = wins;
    this.losses = losses;
    this.draws = draws;
  }

  addWin() {
    //if winner of game is X, make playerX wins go up by one
    //if winner of game is O, make playerO wins go up by one
  }

  addLoss() {
    //if winner of game is X, make playerO losses go up by one
    //if winner of game is O, make playerX losses go up by one
  }

  addDraw() {
    //if game result is draw, both playerO and playerX draws go up by one
  }
}
