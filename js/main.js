/*----- constants -----*/

const triangles = document.querySelectorAll(`#triangles`)

/*----- state variables -----*/
let board;
let playerTurn;
let winner;


/*----- cached elements  -----*/


/*----- event listeners -----*/


/*----- functions -----*/

function init() {
    playerTurn = 1;

    board = [
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
    ];
    
    winner = null;
    render();
}

init();

function render() {
    renderBoard();
    renderMessage();
    renderControls();
}

function renderControls() {
    if (winner);

}