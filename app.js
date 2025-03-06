/*-------------------------------- Constants --------------------------------*/
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

/*---------------------------- Variables (state) ----------------------------*/
let board;
let turn;
let winner;
let tie;

/*------------------------ Cached Element References ------------------------*/
const squareElements = document.querySelectorAll(".sqr");
const messageElement = document.querySelector("#message");
const resetButtonElement = document.querySelector('button');

/*-------------------------------- Functions --------------------------------*/
function init() {
    board = ["", "", "", "", "", "", "", "", ""];
    turn = "X";
    winner = false;
    tie = false;
  render();
}
init();

function render() {
  updateBoard();
  updateMessage();
}

function updateBoard() {
  for (let i = 0; i < board.length; i++) {
    squareElements[i].textContent = board[i];
  }
}

function updateMessage() {
  if (winner === false && tie === false) {
    messageElement.textContent = "It's " + turn + "'s turn.";
  } else if (winner === false && tie === true) {
    messageElement.textContent = "You are tied.";
  } else {
    messageElement.textContent = "Congrats! " + turn + " won.";
  }
}

function handleClick(event) {
  if (
    event.target.textContent === "X" ||
    event.target.textContent === "O" ||
    winner === true
  ) {
    return;
  } else {
    const squareIndex = event.target.id;
    placePiece(squareIndex);
    checkForWinner();
    checkForTie();
    switchPlayerTurn();
    render();
  }
}

function placePiece(index) {
  board[index] = turn;
}

function checkForWinner() {
  winningCombos.forEach(function (combo) {
    if (
      (board[combo[0]] === "X" &&
        board[combo[1]] === "X" &&
        board[combo[2]] === "X") ||
      (board[combo[0]] === "O" &&
        board[combo[1]] === "O" &&
        board[combo[2]] === "O")
    ) {
      winner = true;
    }
  });
}

function checkForTie() {
  checkForWinner();
  if (winner === true) {
    return;
  } else if (
    board[0] === "" ||
    board[1] === "" ||
    board[2] === "" ||
    board[3] === "" ||
    board[4] === "" ||
    board[5] === "" ||
    board[6] === "" ||
    board[7] === "" ||
    board[8] === ""
  ) {
    tie = false;
  } else {
    tie = true;
  }
}

function switchPlayerTurn() {
  if (winner === true) {
    return;
  } else if (turn === "X") {
    turn = "O";
  } else if (turn === "O") {
    turn = "X";
  }
}

/*----------------------------- Event Listeners -----------------------------*/
squareElements.forEach(function (square) {
  square.addEventListener("click", handleClick);
});

resetButtonElement.addEventListener('click', init);

//1) Define the required variables used to track the state of the game.

//2) Store cached element references.

//3) Upon loading, the game state should be initialized, and a function should
//   be called to render this game state.

//4) The state of the game should be rendered to the user.

//5) Define the required constants.

//6) Handle a player clicking a square with a `handleClick` function.

//7) Create Reset functionality.
