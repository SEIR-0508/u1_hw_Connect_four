/*----- constants -----*/
const colorKey = {
    '-1': 'yellow',
    '0': 'white',
    '1': 'red',
};


const triangles = document.querySelectorAll(`#triangles > div`);
const playAgain = document.querySelector(`button`);
const turnMessage = document.querySelector(`h2`);

/*----- state variables -----*/
let gameBoard;
let playerTurn;
let winner;

/*----- cached elements  -----*/


/*----- event listeners -----*/


/*----- functions -----*/

function init() {
    playerTurn = 1;

    gameBoard = [
        // each of these individual arrays is a column on the gameBoard
        [1,1,1,-1,1,1],
        [1,0,0,0,0,0],
        [0,0,0,0,-1,0],
        [1,0,0,0,0,0],
        [0,0,-1,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
    ];
    
    winner = null;
    render();
}

function render() {
    renderBoard();
    renderMessage();
    renderControls();
}

function renderBoard() {
    //goes through the gameBoard Array and assigns background color based on the value of the cell at that point (i.e. -1, 0, or 1)
    gameBoard.forEach(function(colArray, colIndex) {
        colArray.forEach(function(rowCell, rowIndex) {
            const cellID = `row${rowIndex}col${colIndex}`;
            const cellSpace = document.getElementById(cellID);
            cellSpace.style.backgroundColor = colorKey[rowCell];
        })
    })
}

function renderMessage() {
    if (winner = 'Tie') {
        turnMessage.innerHTML = `<span>TIE GAME!</span>`
    } else if (winner) {
        turnMessage.innerHTML = `<span>${colorKey[winner]} Wins!</span>`
    } else {
        turnMessage.innerHTML = `<span>${colorKey[winner]}'s turn</span>`
    }

}

function renderControls() {
    if (winner) {
        playAgain.style.opacity = 1;
    } else {
        playAgain.style.opacity = 0;
    }

    triangles.forEach(function(tri, triNum) {
        //tri is the value of each triangle while triNum is the index location of tha particular triangle

        // let viableCol = gameBoard[triNum].some((cirlce) => cirlce !== '0'); -- this line of code did't work and I don't know why yet. Used the includes function from the repo hint
        let viableCol = gameBoard[triNum].includes(0);
        console.log(viableCol)
        if (viableCol === false) {
            tri.style.visibility = 'hidden';
        } else {
            tri.style.visibility = 'visible';
        }
    }
    )
}




init();
