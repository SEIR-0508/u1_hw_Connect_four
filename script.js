/*
I don't understand these at all.  I've tried putting together my own code and it didnt work.
I dont know if it's because I used a table instad of the spans 
that were used in the example, but at this point I'm done messing with it.

I don't know why messing with the dom is so confusing.  
I am also still struggling with using for loops.  

I could copy the code that the example wrote to get the thing working, but
I would rather show where I was at when I gave up for the day.


If this is counts as incomplete, please use the homework pass for the
frog game for htis homework.


Thanks-

Christopher



*/




/*----- constants -----*/
let board;
let whosTurn;
let winner;

/*----- state variables -----*/


/*----- cached elements  -----*/


/*----- event listeners -----*/


/*----- functions -----*/

init();

function init()
{
    board = [

        [0, 0, 0, 0, 0, 0, 0]
        [0, 0, 0, 0, 0, 0, 0]
        [0, 0, 0, 0, 0, 0, 0]
        [0, 0, 0, 0, 0, 0, 0]
        [0, 0, 0, 0, 0, 0, 0]
        [0, 0, 0, 0, 0, 0, 0]
        [0, 0, 0, 0, 0, 0, 0]
        [0, 0, 0, 0, 0, 0, 0]
    ];

    turn =1; 
    winner = null;
    render();    
}

function render()
{
createBoard();
winnerMsg();
control();
}

function createBoard(){
board.forEach(function(itColl, colId)
{
    board.forEach(function(cellVal, rowID)
        {const cellId = `col${colId}+row${rowID}`
        const cellEl = document.getElementById(cellId);
        cellEl.style.backgroundColor = colors[cellVal];
        });
    });




}
