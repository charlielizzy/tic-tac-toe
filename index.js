class Board {
  constructor(state = ["", "", "", "", "", "", "", "", ""]) {
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
    let newArray = [];
    this.state.forEach((item) => {
      if (item === "X" || item === "O") {
        newArray.push(item);
      }
    });
    if (newArray.length > 0) {
      return false;
    } else {
      return true;
    }
  }

  isFull() {
    let newArray = [];
    this.state.forEach((item) => {
      if (item === "X" || item === "O") {
        newArray.push(item);
      }
    });
    if (newArray.length === 9) {
      return true;
    } else {
      return false;
    }
  }

  addNewState(newXO, position) {
    this.state[position] = newXO;
    this.printBoard();
  }
}

const board = new Board();

board.addNewState("X", 6);
// board.printBoard();
