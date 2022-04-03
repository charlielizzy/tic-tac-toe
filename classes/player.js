// import Board from './classes/board.js';

export default class Player {
  constructor(name, XOvalue = '', wins = 0, losses = 0, draws = 0) {
    this.name = name;
    this.wins = wins;
    this.losses = losses;
    this.draws = draws;
    this.XOvalue = XOvalue;
  }

  addWin() {
    //wins goes up by one
    this.wins += 1;
    return this.wins;
  }

  addLoss() {
    //losses go up by one
    this.losses += 1;
    return this.losses;
  }

  addDraw() {
    //players draws go up by one
    this.draws += 1;
    return this.draws;
  }
}
