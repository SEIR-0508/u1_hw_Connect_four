/*----- constants -----*/

const colors = {
    '0': 'white',
    '1': 'blue',
    '2': 'red',
    }

/*----- state variables -----*/

    let playerTurn; /* whose turn it is: 1 or 2 */

    let gameBoard; /* an array of 7 columns */
    
    let winner; /* who's winning: no one, 1 or 2, or tie */
    

/*----- cached elements  -----*/

const messageElement = document.querySelector('h3');
const playAgain = document.querySelector('button');
const columnButtons = document.querySelectorAll('.column-buttons > div');

/*----- event listeners -----*/

document.querySelector('.column-buttons').addEventListener('click', playersMove);

/*----- functions -----*/

function init() {
    gameBoard = [
        [0, 0, 0, 0, 0, 0], // column 1
        [0, 0, 0, 0, 0, 0], // column 2
        [0, 0, 0, 0, 0, 0], // column 3
        [0, 0, 0, 0, 0, 0], // column 4
        [0, 0, 0, 0, 0, 0], // column 5
        [0, 0, 0, 0, 0, 0], // column 6
        [0, 0, 0, 0, 0, 0] // column 7
    ];
    playerTurn = 1;
    winner = null;
    render();
}
init();


function render() {
    renderBoard();
    renderMessage();
    renderControls();
}

function renderBoard() {
    gameBoard.forEach(function(columnArray, columnIndex) {
        columnArray.forEach(function(boardSpace, rowIndex) {
            const spaceId = `c${columnIndex}r${rowIndex}`;
            const spaceElement = document.getElementById(spaceId);
            spaceElement.style.backgroundColor = colors[boardSpace];
        });
    });
}

function renderMessage() {
    if (winner === 'tie') {
        messageElement.innerHTML = `It's a <span style="color: purple">TIE</span>!`;
    }
    else if (winner) {
        messageElement.innerHTML = `<span style="color: ${colors[winner]}">${colors[winner].toUpperCase()}</span> wins!!!`;

    }
    else {
        messageElement.innerHTML = `<span style="color: ${colors[playerTurn]}">${colors[playerTurn].toUpperCase()}</span>'s turn`;
    }
}

function renderControls() {
    playAgain.style.visibility = winner ? 'visible' : 'hidden';
    columnButtons.forEach(function(columnBtn, columnIndex) {
        const hideButton = !gameBoard[columnIndex].includes(0) || winner;
        columnBtn.style.visibility = hideButton ? 'hidden' : 'visible';
    })
}


function playersMove(event) {
    const colClicked = event.target.id;
    if (colClicked === '') return;
    const columns = gameBoard[colClicked];
    const clkRowIndex = columns.indexOf(0);

    console.log(colClicked, clkRowIndex);

    render();
}