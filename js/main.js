/*----- constants -----*/
const colorKey = {
    '-1': 'yellow',
    '0': 'white',
    '1': 'red',
};


const triangles = document.querySelectorAll(`#triangles > div`);
const playAgain = document.querySelector(`button`);
const turnMessage = document.querySelector(`h2`);
const allTriangles = document.getElementById(`triangles`)

/*----- state variables -----*/
let gameBoard;
let playerTurn;
let winner;

/*----- cached elements  -----*/


/*----- event listeners -----*/

playAgain.addEventListener('click', init);

// couldn't get the handleDrops indiviudal function to work

for (let i = 0 ; i<triangles.length; i++) {
    // console.log(i);
    triangles[i].addEventListener('click', () => {
        console.log(i);
        let colArray = gameBoard[i];
        let targetRow = colArray.findIndex((row) => row === 0);
        console.log(targetRow);
        colArray[targetRow] = playerTurn;
        playerTurn = playerTurn * -1;
        winner = getWinner(i,targetRow);
        render();
        return;
    });
}
// allTriangles.addEventListener('click', handleDrop);


/*----- functions -----*/

function init() {
    playerTurn = 1;

    gameBoard = [
        // each of these individual arrays is a column on the gameBoard
        [0,0,0,0,0,0],
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
    if (winner === 'Tie') {
        turnMessage.innerHTML = `<span>TIE GAME!</span>`
    } else if (winner) {
        turnMessage.innerHTML = `<span>${colorKey[winner]} Wins!</span>`
    } else {
        turnMessage.innerHTML = `<span>${colorKey[playerTurn]}'s turn</span>`
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

        // let viableCol = gameBoard[triNum].some((cirlce) => cirlce !== '0');  -- this line of code did't work and I don't know why yet. Used the includes function from the repo hint
        let viableCol = gameBoard[triNum].includes(0);

        // console.log(viableCol)
        // console.log(winner)
        if (viableCol === false || winner) {
            tri.style.visibility = 'hidden';
        } else {
            tri.style.visibility = 'visible';
        }
    }
    )
}

function handleDrop(columnIndex) {
    // for some reason this breaks when I copy the code from the anonymous function above
}

function countAdjacent(colIndex, rowIndex, colOffset, rowOffset) {
    let whichPlayer= gameBoard[colIndex][rowIndex];
    let count = 0;
    colIndex += colOffset;
    rowIndex += rowOffset;
    while (
        gameBoard[colIndex] !== undefined &&
        gameBoard[colIndex][rowIndex] !== undefined &&
        gameBoard[colIndex][rowIndex] === whichPlayer
    ) {
        count++;
        colIndex += colOffset;
        rowIndex += rowOffset;
    }
    return count;
}

function checkVert(colIndex, rowIndex) {
    if (countAdjacent(colIndex,rowIndex,0,1) === 3) {
        return gameBoard[colIndex][rowIndex];
    } else {
        return null;
    }
}

function checkHorz(colIndex, rowIndex) {
    let checkLeft = countAdjacent(colIndex,rowIndex,-1,0);
    let checkRight = countAdjacent(colIndex,rowIndex,1,0);
    if (checkRight + checkLeft >= 3) {
        return gameBoard[colIndex][rowIndex];
    } else {
        return null;
    }
}

function checkDiaNWSE(colIndex, rowIndex) {
    let checkNW = countAdjacent(colIndex,rowIndex,-1,1);
    let checkSE = countAdjacent(colIndex,rowIndex,1,-1);
    if (checkNW + checkSE >= 3) {
        return gameBoard[colIndex][rowIndex];
    } else {
        return null;
    }
}

function checkDiaNESW(colIndex, rowIndex) {
    let checkNE = countAdjacent(colIndex,rowIndex,1,1);
    let checkSW = countAdjacent(colIndex,rowIndex,-1,-1);
    if (checkNE + checkSW >= 3) {
        return gameBoard[colIndex][rowIndex];
    } else {
        return null;
    }
}


function getWinner (colIndex, rowIndex) {
    return checkVert(colIndex,rowIndex) || checkHorz(colIndex,rowIndex) || checkDiaNWSE(colIndex,rowIndex) || checkDiaNESW(colIndex,rowIndex);
}




init();


