/* --- CONSTANTS --- */
const colSelect = document.querySelectorAll('.arrow')
const playerName = document.querySelector('.player')
const winnerName = document.querySelector('.winner')
const spot = document.querySelectorAll('.circle')
const winnersScreen = document.querySelector('.winnersScreen')
const winnerBtn = document.querySelector('.resetBtn')

/* --- Variables --- */
let player = 1
playerName.innerText = 'Red'
playerName.style.color = 'red'

/* --- Event Listeners --- */

for (let i = 0; i < colSelect.length; i++) {
    colSelect[i].addEventListener('click', () => {
        if (i === 0) {
            placeThePiece(0,5)
        } else if (i === 1) {
            placeThePiece(6,11)
        } else if (i === 2) {
            placeThePiece(12,17)
        } else if (i === 3) {
            placeThePiece(18,23)
        } else if (i === 4) {
            placeThePiece(24,29)
        } else if (i === 5) {
            placeThePiece(30,35)
        } else {
            placeThePiece(36,41)
        }
        playerChanger(player)
        checkWin()
    })

}

for (let x = 0; x < spot.length; x++) {
    winnerBtn.addEventListener('click', () => {
        spot[x].style.backgroundColor = "white"
    })
}

winnerBtn.addEventListener('click', () => {
    if (winnersScreen.style.opacity !=0) {
        winnersScreen.style.opacity = 0
        console.log(`should work?`)
    }
})


/* --- Functions --- */

placeThePiece = (num1, num2) => {
    for (let j = num2; j >= num1; j--) {
        if (player === 1) {
            if (!spot[j].style.backgroundColor || spot[j].style.backgroundColor === 'white') {
                spot[j].style.backgroundColor = 'red'
                break;
            }
        } else {
            if (!spot[j].style.backgroundColor || spot[j].style.backgroundColor === 'white') {
                spot[j].style.backgroundColor = 'blue'
                break;
            }
        }
    }
}

playerChanger = (num) => {
    if (num === 1) {
        player = 2
        playerName.innerText = 'Blue'
        playerName.style.color = 'blue'
    }
    else {
        player = 1
        playerName.innerText = 'Red'
        playerName.style.color = 'red'
    }
}

checkWin = () => {
    // check for winner
    for (let k = 0; k < winningCombinations.length; k++) {
        let thisSpot = winningCombinations[k]
        // check for red win
        if (thisSpot.every((spotNum) => spot[spotNum].style.backgroundColor === "red")) {
           winnerName.innerText = "Red"
           winnerName.style.color = "red"
           winnersScreen.style.opacity = .90

           // check for blue win
        } else if (thisSpot.every((spotNum) => spot[spotNum].style.backgroundColor === "blue")) {
            winnerName.innerText = "Blue"
            winnerName.style.color = "blue"
            winnersScreen.style.opacity = .90
        } 
    }

}

/* --- Arrays --- */

const winningCombinations = [
    [0, 1, 2, 3], 
    [1, 2, 3, 4], 
    [2, 3, 4, 5], 
    [6, 7, 8, 9], 
    [7, 8, 9, 10], 
    [8, 9, 10, 11], 
    [12, 13, 14, 15],
    [13, 14, 15, 16],
    [14, 15, 16, 17],
    [18, 19, 20, 21],
    [19, 20, 21, 22],
    [20, 21, 22, 23],
    [24, 25, 26, 27],
    [25, 26, 27, 28],
    [26, 27, 28, 29],
    [30, 31, 32, 33],
    [31, 32, 33, 34],
    [32, 33, 34, 35],
    [36, 37, 38, 39],
    [37, 38, 39, 40],
    [38, 39, 40, 41],
    [0, 6, 12, 18],
    [6, 12, 18, 24],
    [12, 18, 24, 30],
    [18, 24, 30, 36],
    [1, 7, 13, 19],
    [7, 13, 19, 25],
    [13, 19, 25, 31],
    [19, 25, 31, 37],
    [2, 8, 14, 20],
    [8, 14, 20, 26],
    [14, 20, 26, 32],
    [20, 26, 32, 38],
    [3, 9, 15, 21],
    [9, 15, 21, 27],
    [15, 21, 27, 33],
    [21, 27, 33, 39],
    [4, 10, 16, 22],
    [10, 16, 22, 28],
    [16, 22, 28, 34],
    [22, 28, 34, 40],
    [5, 11, 17, 23],
    [11, 17, 23, 29],
    [17, 23, 29, 35],
    [23, 29, 35, 41],
    [5, 10, 15, 20],
    [10, 15, 20, 25],
    [15, 20, 25, 30],
    [4, 9, 14, 19],
    [9, 14, 19,24],
    [3, 8, 13, 18],
    [11, 16, 21, 26],
    [16, 21, 26, 31],
    [21, 26, 31, 36],
    [17, 22, 27, 32],
    [22, 27, 32, 37],
    [23, 28, 33, 38],
    [41, 34, 27, 20],
    [34, 27, 20, 13],
    [27, 20, 13, 6],
    [40, 33, 26, 19],
    [33, 26, 19, 12],
    [39, 32, 25, 18],
    [35, 28, 32, 15],
    [28, 21, 14, 7],
    [21, 14, 7, 0],
    [29, 22, 15, 8],
    [22, 15, 8, 1],
    [23, 16, 9, 2]
]


