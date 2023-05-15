/*----- constants -----*/

let cir1a = document.querySelector(".cir1a")
let cir2a = document.querySelector(".cir2a")
let cir3a = document.querySelector(".cir3a")
let cir4a = document.querySelector(".cir4a")
let cir5a = document.querySelector(".cir5a")
let cir6a = document.querySelector(".cir6a")
let cir7a = document.querySelector(".cir7a")
let cir1b = document.querySelector(".cir1b")
let cir2b = document.querySelector(".cir2b")
let cir3b = document.querySelector(".cir3b")
let cir4b = document.querySelector(".cir4b")
let cir5b = document.querySelector(".cir5b")
let cir6b = document.querySelector(".cir6b")
let cir7b = document.querySelector(".cir7b")
let cir1c = document.querySelector(".cir1c")
let cir2c = document.querySelector(".cir2c")
let cir3c = document.querySelector(".cir3c")
let cir4c = document.querySelector(".cir4c")
let cir5c = document.querySelector(".cir5c")
let cir6c = document.querySelector(".cir6c")
let cir7c = document.querySelector(".cir7c")
let cir1d = document.querySelector(".cir1d")
let cir2d = document.querySelector(".cir2d")
let cir3d = document.querySelector(".cir3d")
let cir4d = document.querySelector(".cir4d")
let cir5d = document.querySelector(".cir5d")
let cir6d = document.querySelector(".cir6d")
let cir7d = document.querySelector(".cir7d")
let cir1e = document.querySelector(".cir1e")
let cir2e = document.querySelector(".cir2e")
let cir3e = document.querySelector(".cir3e")
let cir4e = document.querySelector(".cir4e")
let cir5e = document.querySelector(".cir5e")
let cir6e = document.querySelector(".cir6e")
let cir7e = document.querySelector(".cir7e")
let cir1f = document.querySelector(".cir1f")
let cir2f = document.querySelector(".cir2f")
let cir3f = document.querySelector(".cir3f")
let cir4f = document.querySelector(".cir4f")
let cir5f = document.querySelector(".cir5f")
let cir6f = document.querySelector(".cir6f")
let cir7f = document.querySelector(".cir7f")

const board = [cir1a, cir2a, cir3a, cir4a, cir5a, cir6a, cir7a, cir1b, cir2b, cir3b, cir4b, cir5b, cir6b, cir7b, cir1c, cir2c, cir3c, cir4c, cir5c, cir6c, cir7c, cir1d, cir2d, cir3d, cir4d, cir5d, cir6d, cir7d, cir1e, cir2e, cir3e, cir4e, cir5e, cir6e, cir7e, cir1f, cir2f, cir3f, cir4f, cir5f, cir6f, cir7f]
const arrows = document.querySelector(".arrows")
const arrow1 = document.querySelector(".arrow-one")
const arrow2 = document.querySelector(".arrow-two")
const arrow3 = document.querySelector(".arrow-three")
const arrow4 = document.querySelector(".arrow-four")
const arrow5 = document.querySelector(".arrow-five")
const arrow6 = document.querySelector(".arrow-six")
const arrow7 = document.querySelector(".arrow-seven")
const arrowsArray = [arrow1, arrow2, arrow3, arrow4, arrow5, arrow6, arrow7];
const arrayOfArrowArrays = [arrowArray1, arrowArray2, arrowArray3, arrowArray4, arrowArray5, arrowArray6, arrowArray7];
const arrowArray1 = [cir1a, cir1b, cir1c, cir1d, cir1e, cir1f]
const arrowArray2 = [cir2a, cir2b, cir2c, cir2d, cir2e, cir2f]
const arrowArray3 = [cir3a, cir3b, cir3c, cir3d, cir3e, cir3f]
const arrowArray4 = [cir4a, cir4b, cir4c, cir4d, cir4e, cir4f]
const arrowArray5 = [cir5a, cir5b, cir5c, cir5d, cir5e, cir5f]
const arrowArray6 = [cir6a, cir6b, cir6c, cir6d, cir6e, cir6f]
const arrowArray7 = [cir7a, cir7b, cir7c, cir7d, cir7e, cir7f]
const turnDisplay = document.querySelector("h2")
const playAgainButton = document.querySelector(".play-again")
const winMessage = document.querySelector(".win-message")

/*----- state variables -----*/
let winner = null;


/*----- cached elements  -----*/


/*----- event listeners -----*/


/*----- functions -----*/

function init() {
  winner = false;

}

function renderBoard() {
  for (let i = 0; i < board.length; i++) {
    if (i % 2 === 0) {
      arrowsArray[i].addEventListener("click", () => {
        arrayOfArrowArrays[i][arrowArray1.length - 1].style.backgroundColor = "purple";
      })
    } else if (i % 2 !== 0) {
      arrowsArray[i].addEventListener("click", () => {
        arrayOfArrowArrays[i][arrowArray1.length - 1].style.backgroundColor = "orange";
      })
    }
  }
}

function renderMessage() {
  for (let i = 0; i < board.length; i++) {
    if (i % 2 === 0) {
      arrowsArray[i].addEventListener("click", () => {
        turnDisplay.innerHTML = "<span class=color-heading-purple>PURPLE</span>'S TURN"
      })
    } else if (i % 2 !== 0) {
      arrowsArray[i].addEventListener("click", () => {
        turnDisplay.innerHTML = "<span class=color-heading-orange>ORANGE</span>'S TURN"
      })
    }
  }
}

function renderControls() {

}

const render = () => {
  renderBoard()
  renderMessage()
  renderControls()
}
render()

