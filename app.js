/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
let board;
let turn;
let winner;
let tie;

/*------------------------ Cached Element References ------------------------*/
const squareElements = document.querySelectorAll('.sqr');
const messageElement = document.querySelector('#message');

/*-------------------------------- Functions --------------------------------*/
function init(){
    render();
};
init();
board = ['', '', '', '', '', '', '', '', ''];
turn = 'X';
winner = false;
tie = false;

function render(){

}

function updateBoard() {
    for (let i = 0; i < board.length; i++){
        
    }
}

/*----------------------------- Event Listeners -----------------------------*/
//1) Define the required variables used to track the state of the game.

//2) Store cached element references.

//3) Upon loading, the game state should be initialized, and a function should 
//   be called to render this game state.

//4) The state of the game should be rendered to the user.

//5) Define the required constants.

//6) Handle a player clicking a square with a `handleClick` function.

//7) Create Reset functionality.
