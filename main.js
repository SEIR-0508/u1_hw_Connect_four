// followed along on TI Connect Four lesson


/*----- constants -----*/

const colors = {
    '0': 'white',
    '1': 'blue',
    '-1': 'red',
    }

/*----- state variables -----*/

    let playerTurn; /* whose turn it is: 1 or 2 */

    let gameBoard; /* an array of 7 columns */
    
    let winner; /* who's winning: no one, 1 or 2, or tie */
    

/*----- cached elements  -----*/

const messageElement = document.querySelector('h3');
const playAgain = document.querySelector('button');
const columnButtons = [...document.querySelectorAll('.column-buttons > div')];

/*----- event listeners -----*/

document.querySelector('.column-buttons').addEventListener('click', playersMove);
playAgain.addEventListener('click', init)

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


function playersMove(event) {
    const colClicked = event.target;
    if (colClicked === null) {
        return;
    }
    const columnIndex = columnButtons.indexOf(colClicked);
    const columns = gameBoard[columnIndex];
    const clkRowIndex = columns.indexOf(0);
    // update gameboard with current player value (1 or 2 --> playerTurn)
    gameBoard[columnIndex][clkRowIndex] = playerTurn;
    // change player turn
    playerTurn *= -1;
    // check for a winner

    winner = getWinner();

    render();
}

function getWinner(columnIndex, clkRowIndex) {
    return vertWin(columnIndex, clkRowIndex);
}

function vertWin(columnIndex, clkRowIndex) { /* <-- where the last move was made */
    return countChips(columnIndex, clkRowIndex, 0, -1) === 3 ? gameBoard[columnIndex][clkRowIndex] : null;
}

function countChips(columnIndex, clkRowIndex, colCheck, rowCheck) {
    const player = gameBoard[columnIndex][clkRowIndex];
    let count = 0;
    columnIndex += colCheck;
    clkRowIndex += rowCheck;
    while (
        gameBoard[columnIndex] !== undefined && gameBoard[columnIndex][clkRowIndex] !== undefined && gameBoard[columnIndex][clkRowIndex] === player
        ) {
            count++;
            columnIndex += colCheck;
            clkRowIndex += rowCheck;
        }
    return count;
}

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

