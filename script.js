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


I came back to it after this previous message and got a bit further
I put in comments what I'm understanding based on what I got done (redoing what
    was on teh github page for the assginment basically. 
I am able to work things out in my/pseudo-code, but when it comes to putting htem
into code it falls apart

AGain, if this doesn't count as a submission I can use the hoemwork
pass I recieved from teh frog game on it.

If it does, thanks.  

Any help I Can get would be greatly appreciated.  Idont' want to fall behind
any further than I am


*/




/*----- constants -----*/
let board;
let whosTurn;
let winner;

/*----- state variables -----*/
const players =
{

'0': 'white',
'1': 'red',
'-1': 'blue',



}

/*----- cached elements  -----*/
const messageEl = document.getElementById('winnerTitle');
const playAgainButton = document.querySelector('.playAgain');
const markerEl = docuement.querySelectorAll('td')




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


/*Ok, so I tried again after cooling off.  I understand what this does
I think. 

It's a function that gets the turns the cellEl background the color of the player
who just went, sets the CellID to the column  index and row index,
then renders the board again?  I'm confused here.  I re-typed this and
changed the variables but I dont understand what It's doing I dont think.

*/

function createBoard(){
board.forEach(function(colArr, colIndx)
{
colArr.forEach(function(cellID, rowIdx)
{
const cellID = `c${colIndx}r${rowIdx}`
const cellEl = document.getElementById(cellID);
cellEl.style.backgroundColor = players[cellID];
}
);

}
);
}


function renderWinner()
{
//So I understand this as well.  It's just hard for me to create this 
//It sets the winner to the player's color that wins, or
//sets the player color to who's turn it is. 
    if (winner === T)
    {
        messageEl.innerText = "Tie";

    }
    else if (winner)
    {
        messageEl.innerHTML = `<span style = "color: ${players[winner]}">
        ${players[winner].toUpperCase()}</span> Wins!`;
    }
    else
    {
        messageEl.innerHTML = `<span style = "color: ${players[turn]}">
        ${players[winner].toUpperCase()}</span> turn.`;
    };
}

function renderControls()
{



}

/*
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
*/