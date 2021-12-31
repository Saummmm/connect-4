import React from "react";
import ReactDOM from "react-dom";
import White from "./white.png";
import Red from "./red.png";
import Yellow from "./yellow.png";
import "./index.css";

function Square(props) {
  //creating a function component
  let img = White; //initial board layout
  if (props.value === "Player 1") {
    //if player 1 entered, red circle
    img = Red;
  }
  if (props.value === "Player 2") {
    //if player 2 entered, yellow circle
    img = Yellow;
  }
  return (
    //return function that holds image
    <button className="square" onClick={props.onClick}>
      <img src={img} height="33" width="33" alt={props.value} />
    </button>
  );
}

//Board class component
class Board extends React.Component {
  //constructor intializes values and creates intial 2-D array
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(6)
        .fill(null)
        .map((row) => Array(7).fill(null)),
      p1IsNext: true, //value used to check next person's turn
    };
  }

  //function used to check who won the game.
  checkAll(board) {
    return (
      checkVertical(board) ||
      checkDiagonalRight(board) ||
      checkDiagonalLeft(board) ||
      checkHorizontal(board) ||
      checkDraw(board)
    );
  }

  //function to handle clicks based on column clicked in
  handleClick(c) {
    //create temp double array to modify
    const squares = this.state.squares.slice();

    //check for win conditions
    if (this.checkAll(squares)) {
      return;
    }

    //loop the column to check if a value already exists in the spot, place in the next highest spot
    for (let r = 5; r >= 0; r--) {
      if (squares[r][c] == null) {
        squares[r][c] = this.state.p1IsNext ? "Player 1" : "Player 2";
        this.setState({
          squares: squares,
          p1IsNext: !this.state.p1IsNext, //flips to next player
        });
        break;
      }
    }
  }

  //render rows
  renderRow(r) {
    let row = []; //empty array of rows
    for (let c = 0; c < 7; c++) {
      //loop based on each column in that row
      row.push(this.renderSquare(r, c)); //create square
    }
    return row;
  }

  renderSquare(r, c) {
    //renders square
    return (
      <Square
        value={this.state.squares[r][c]} //establishes connection between model and DOM for value of square
        onClick={() => this.handleClick(c)} //establishes connection between Square and it's onclick function
      />
    );
  }

  //render board
  render() {
    const winner = this.checkAll(this.state.squares); //check win condition
    let status;
    if (winner) {
      status = "Winner: " + winner; //display winner or if draw
    } else {
      status =
        "Next player: " + (this.state.p1IsNext ? "Player 1" : "Player 2"); //display whose turn is next
    }

    //render all the rows
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">{this.renderRow(0)}</div>
        <div className="board-row">{this.renderRow(1)}</div>
        <div className="board-row">{this.renderRow(2)}</div>
        <div className="board-row">{this.renderRow(3)}</div>
        <div className="board-row">{this.renderRow(4)}</div>
        <div className="board-row">{this.renderRow(5)}</div>
      </div>
    );
  }
}

//for future modifications, also class component
class Game extends React.Component {
  render() {
    return (
      //render Board
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root")); //render to DOM

//check vertical win
function checkVertical(board) {
  // Check only if row is 3 or greater
  for (let r = 3; r < 6; r++) {
    for (let c = 0; c < 7; c++) {
      if (board[r][c]) {
        if (
          board[r][c] === board[r - 1][c] &&
          board[r][c] === board[r - 2][c] &&
          board[r][c] === board[r - 3][c]
        ) {
          return board[r][c]; //return the name of player who won
        }
      }
    }
  }
}

//check horizontal win
function checkHorizontal(board) {
  // Check only if column is 3 or less
  for (let r = 0; r < 6; r++) {
    for (let c = 0; c < 4; c++) {
      if (board[r][c]) {
        if (
          board[r][c] === board[r][c + 1] &&
          board[r][c] === board[r][c + 2] &&
          board[r][c] === board[r][c + 3]
        ) {
          return board[r][c]; //return the name of player who won
        }
      }
    }
  }
}

//check wins diagonally to the right
function checkDiagonalRight(board) {
  // Check only if row is 3 or greater AND column is 3 or less
  for (let r = 3; r < 6; r++) {
    for (let c = 0; c < 4; c++) {
      if (board[r][c]) {
        if (
          board[r][c] === board[r - 1][c + 1] &&
          board[r][c] === board[r - 2][c + 2] &&
          board[r][c] === board[r - 3][c + 3]
        ) {
          return board[r][c]; //return the name of player who won
        }
      }
    }
  }
}

//check wins diagonally to the left
function checkDiagonalLeft(board) {
  // Check only if row is 3 or greater AND column is 3 or greater
  for (let r = 3; r < 6; r++) {
    for (let c = 3; c < 7; c++) {
      if (board[r][c]) {
        if (
          board[r][c] === board[r - 1][c - 1] &&
          board[r][c] === board[r - 2][c - 2] &&
          board[r][c] === board[r - 3][c - 3]
        ) {
          return board[r][c]; //return the name of player who won
        }
      }
    }
  }
}

function checkDraw(board) {
  for (let r = 0; r < 6; r++) {
    for (let c = 0; c < 7; c++) {
      if (board[r][c] === null) {
        return null; //if there is empty square no draw
      }
    }
  }
  return "draw"; //return if draw is found
}
