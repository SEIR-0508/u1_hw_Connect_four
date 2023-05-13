
let player = 1
const colSelect = document.querySelectorAll('.arrow')
const playerName = document.querySelector('.player')
const spot = document.querySelectorAll('.circle')
playerName.innerText = 'Red'
playerName.style.color = 'red'

for (let i = 0; i < colSelect.length; i++) {
    colSelect[i].addEventListener('click', () => {
        if (i === 0) {
            for (let j = 5; j >= 0; j--) {
                if (player === 1) {
                    if (!spot[j].style.backgroundColor) {
                        spot[j].style.backgroundColor = 'red'
                        break;
                    }
                } else {
                    if (!spot[j].style.backgroundColor) {
                        spot[j].style.backgroundColor = 'blue'
                        break;
                    }
                }
            }
            playerChanger(player)
        } else if (i === 1) {
            for (let j = 11; j >= 6; j--) {
                if (player === 1) {
                    if (!spot[j].style.backgroundColor) {
                        spot[j].style.backgroundColor = 'red'
                        break;
                    }
                } else {
                    if (!spot[j].style.backgroundColor) {
                        spot[j].style.backgroundColor = 'blue'
                        break;
                    }
                }
            }
            playerChanger(player)
        } else if (i === 2) {
            for (let j = 17; j >= 12; j--) {
                if (player === 1) {
                    if (!spot[j].style.backgroundColor) {
                        spot[j].style.backgroundColor = 'red'
                        break;
                    }
                } else {
                    if (!spot[j].style.backgroundColor) {
                        spot[j].style.backgroundColor = 'blue'
                        break;
                    }
                }
            }
            playerChanger(player)
        } else if (i === 3) {
            for (let j = 23; j >= 18; j--) {
                if (player === 1) {
                    if (!spot[j].style.backgroundColor) {
                        spot[j].style.backgroundColor = 'red'
                        break;
                    }
                } else {
                    if (!spot[j].style.backgroundColor) {
                        spot[j].style.backgroundColor = 'blue'
                        break;
                    }
                }
            }
            playerChanger(player)
        } else if (i === 4) {
            for (let j = 29; j >= 24; j--) {
                if (player === 1) {
                    if (!spot[j].style.backgroundColor) {
                        spot[j].style.backgroundColor = 'red'
                        break;
                    }
                } else {
                    if (!spot[j].style.backgroundColor) {
                        spot[j].style.backgroundColor = 'blue'
                        break;
                    }
                }
            }
            playerChanger(player)
        } else if (i === 5) {
            for (let j = 35; j >= 30; j--) {
                if (player === 1) {
                    if (!spot[j].style.backgroundColor) {
                        spot[j].style.backgroundColor = 'red'
                        break;
                    }
                } else {
                    if (!spot[j].style.backgroundColor) {
                        spot[j].style.backgroundColor = 'blue'
                        break;
                    }
                }
            }
            playerChanger(player)
        } else {
            for (let j = 41; j >= 36; j--) {
                if (player === 1) {
                    if (!spot[j].style.backgroundColor) {
                        spot[j].style.backgroundColor = 'red'
                        break;
                    }
                } else {
                    if (!spot[j].style.backgroundColor) {
                        spot[j].style.backgroundColor = 'blue'
                        break;
                    }
                }
            }
            playerChanger(player)
        }
    })

}

playerChanger = (num) => {
    if (num === 1) {
        player = 2
        playerName.innerText = 'Blue'
        playerName.style.color = 'blue';
    }
    else {
        player = 1
        playerName.innerText = 'Red'
        playerName.style.color = 'red'
    }
}




