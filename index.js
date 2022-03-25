class Board {
  constructor(state = ["O", "X", "O", "X", "O", "O", "X", "O", "X"]) {
    this.state = state;
  }

  printBoard() {
    let formattedString = "";
    this.state.forEach((item, index) => {
      if (item === "") {
        formattedString += "   |";
      } else {
        formattedString += ` ${item} |`;
      }

      if (index === 2 || index === 5 || index === 8) {
        formattedString = formattedString.slice(0, -1);
        if (index !== 8) {
          formattedString +=
            "\n\u2015\u2015\u2015 \u2015\u2015\u2015 \u2015\u2015\u2015\n";
        }
      }
    });
    console.log("%c" + formattedString, "color: pink; font-size: 18px;");
  }

  isEmpty() {
    let emptyArray = [];
    this.state.forEach((item) => {
      if (item === "X" || item === "O") {
        emptyArray.push(item);
      }
    });
    if (emptyArray.length > 0) {
      return false;
    } else {
      return true;
    }
  }

  isFull() {
    let fullArray = [];
    this.state.forEach((item) => {
      if (item === "X" || item === "O") {
        fullArray.push(item);
      }
    });
    if (fullArray.length === 9) {
      return true;
    } else {
      return false;
    }
  }

  addNewState(newXO, index) {
    if (newXO !== "X" && newXO !== "O") {
      throw new Error("Invalid character - enter X or O");
    }
    if (this.state[index] !== "") {
      throw new Error("This space is full");
    } else {
      this.state[index] = newXO;
      this.printBoard();
      if (index > 8 || index < 0) {
        throw new Error("Position does not exist");
      }
      if (isNaN(index) === true) {
        throw new Error("Position does not exist");
      }
    }
  }

  availableIndex() {
    let availableArray = [];
    this.state.forEach((item, index) => {
      if (item === "") {
        availableArray.push(index);
      }
    });
    console.log(availableArray);
  }

  gameWon() {
    let gameWon;
    if (((this.state[0] === this.state[1]) === this.state[2]) !== "") {
      gameWon = true;
    } else if (((this.state[3] === this.state[4]) === this.state[5]) !== "") {
      gameWon = true;
    } else if (((this.state[6] === this.state[7]) === this.state[8]) !== "") {
      gameWon = true;
    } else if (((this.state[0] === this.state[3]) === this.state[6]) !== "") {
      gameWon = true;
    } else if (((this.state[1] === this.state[4]) === this.state[7]) !== "") {
      gameWon = true;
    } else if (((this.state[2] === this.state[5]) === this.state[8]) !== "") {
      gameWon = true;
    } else if (((this.state[0] === this.state[4]) === this.state[8]) !== "") {
      gameWon = true;
    } else if (((this.state[2] === this.state[4]) === this.state[6]) !== "") {
      gameWon = true;
    } else {
      gameWon = false;
    }
    return gameWon;
    // else (gameWon === true) {
    //   return "game won";
    //   // } else if (gameWon === false) {
    //   //   return "game draw";
    // }
  }
}

const board = new Board();

// board.addNewState("X", 4);
board.printBoard();

board.availableIndex();

console.log(board.gameWon());
