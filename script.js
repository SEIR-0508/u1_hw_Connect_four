
let player = 1
const colSelect = document.querySelectorAll('.arrow')
const playerName = document.querySelector('.player')
const spot = document.querySelectorAll('.circle')
playerName.innerText = 'Red'
playerName.style.color = 'red'

for (let i = 0; i < colSelect.length; i++) {
    colSelect[i].addEventListener('click', () => {
        if (i === 0) {
            console.log(`We clicked the first arrow`)
            for (let j = 0; j <= 5; j++) {
                console.log(`our spots are: ${j}`)
                if (player === 1) {

                } else {

                }
            }
            playerChanger(player)
        } else if (i === 1) {
            console.log(`We clicked the second arrow`)
            for (let j = 6; j <= 11; j++) {
                console.log(`our spots are: ${j}`)
                if (player === 1) {

                } else {
                    
                }
            }
            playerChanger(player)
        } else if (i === 2) {
            console.log(`We clicked the third arrow`)
            for (let j = 12; j <= 17; j++) {
                console.log(`our spots are: ${j}`)
                if (player === 1) {

                } else {
                    
                }
            }
            playerChanger(player)
        } else if (i === 3) {
            console.log(`We clicked the fourth arrow`)
            for (let j = 18; j <= 23; j++) {
                console.log(`our spots are: ${j}`)
                if (player === 1) {

                } else {
                    
                }
            }
            playerChanger(player)
        } else if (i === 4) {
            console.log(`We clicked the fifth arrow`)
            for (let j = 24; j <= 29; j++) {
                console.log(`our spots are: ${j}`)
                if (player === 1) {

                } else {
                    
                }
            }
            playerChanger(player)
        } else if (i === 5) {
            console.log(`We clicked the sixth arrow`)
            for (let j = 30; j <= 35; j++) {
                console.log(`our spots are: ${j}`)
                if (player === 1) {

                } else {
                    
                }
            }
            playerChanger(player)
        } else {
            console.log(`We clicked the seventh arrow`)
            for (let j = 36; j <= 41; j++) {
                console.log(`our spots are: ${j}`)
                if (player === 1) {

                } else {
                    
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




