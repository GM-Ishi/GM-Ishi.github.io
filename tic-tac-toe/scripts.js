// declare the board data for a game, using 3 arrays
// "-" indicates unmarked, "x" indicates an X mark, "o" indicates an O mark
let rowA = [ "-", "-", "-" ];
let rowB = [ "-", "-", "-" ];
let rowC = [ "-", "-", "-" ];

// track whose turn it is
let currentTurn = "x";

// track number of turns left
let remainingTurns = 9;

// track if game is over
let gameOver = false;

// set up blank variable for current player DOM element
let currentPlayer;
   
function checkGameboard(checkA, checkB, checkC) {
  let resultValue = "d";
  
  for (let x = 0; x < checkA.length;x++) {/*Checks all vetical columns*/
    if((checkA[x] == checkB[x]) && (checkA[x] == checkC[x])){
      if(checkA[x] == "x"){
        resultValue = "x";
      }else if(checkA[x] == "o"){
        resultValue = "o";
      }
    }
  }
  
  if((checkA[0] == checkA[1]) && (checkA[0] == checkA[2])){/*checks rowA*/
    if(checkA[0] == " x"){
      resultValue = "x";
    }else if(checkA[0] == "o"){
      resultValue = "o";
    }
  }
  
  if((checkB[0] == checkB[1]) && (checkB[0] == checkB[2])){/*checks rowB*/
    if(checkB[0] == "x"){
      resultValue = "x";
    }else if(checkB[0] == "o"){
      resultValue = "o";
    }
  }
  
  if((checkC[0] == checkC[1]) && (checkC[0] == checkC[2])){/*checks rowC*/
    if(checkC[0] == "x"){
      resultValue = "x";
    }else if(checkC[0] == "o"){
      resultValue = "o";
    }
  }
  
  if( (checkA[0] === checkB[1] && checkB[1] === checkC[2]) || (checkA[2] === checkB[1] && checkB[1] === checkC[0]) ){/*checks both diagonals*/
     if(checkB[1] == "x"){
      resultValue = "x"; 
     }else if(checkB[1] == "o"){
       resultValue = "o";
     }
  }
  
  return resultValue;
}
   /*   that checks the 3 arrays of board data (a, b, and c) and returns
   *   and returns "x" if X has won; "o" if O has won, or 
   *   "d" if the game is a draw. */


// get a handle on the DOM element to be updated with the outcome
let gameOutputMsg = document.querySelector("#gameResult span");


// call your function checkGameboard() with the 3 rows
let winState = checkGameboard(rowA, rowB, rowC);

// test the returned value of the function
if (winState == "x") { 
  gameOutputMsg.innerHTML = "X wins";
  
} else if (winState == "o") {
  gameOutputMsg.innerHTML = "O wins";
  
} else if (winState == "d") {
  gameOutputMsg.innerHTML = "draw";
  
} else {
  gameOutputMsg.innerHTML = "unknown";
}


// function to handle clicks
function clickSquare() {

    // only proceed if space is empty
    if ( (this.innerHTML == "") && (!gameOver) ) {

        // set space
        this.innerHTML = currentTurn;
        this.classList.add("clicked");

        // subtract 1 from remaining turns
        remainingTurns = remainingTurns - 1; // or remainingTurns--
        console.log("Remaining turns: " + remainingTurns);

        // update the array of rows with the player value
        if (this.id == "a1") rowA[0] = currentTurn;
        if (this.id == "a2") rowA[1] = currentTurn;
        if (this.id == "a3") rowA[2] = currentTurn;
        if (this.id == "b1") rowB[0] = currentTurn;
        if (this.id == "b2") rowB[1] = currentTurn;
        if (this.id == "b3") rowB[2] = currentTurn;
        if (this.id == "c1") rowC[0] = currentTurn;
        if (this.id == "c2") rowC[1] = currentTurn;
        if (this.id == "c3") rowC[2] = currentTurn;

        // output arrays to console
        console.log("Rows:");
        console.log(rowA);
        console.log(rowB);
        console.log(rowC);


        // get a handle on the DOM element to be updated with the outcome
        let gameOutputMsg = document.querySelector("#gameResult");

        // call your function checkGameboard() with the 3 rows
        let winState = checkGameboard(rowA, rowB, rowC);

        // test the returned value of the function
        if (winState == "x") {
            gameOutputMsg.innerHTML = "X wins";
            gameOver = true;

        } else if (winState == "o") {
            gameOutputMsg.innerHTML = "O wins";
            gameOver = true;

        } else if ( (winState == "d") && (remainingTurns == 0) ) {
            gameOutputMsg.innerHTML = "draw";
            gameOver = true;

        }

        // reveal game outcome if game is over
        if (gameOver) {
            document.querySelector("#gameResult").style.display = "block";
        }

        // flip turn back and forth
        if (currentTurn == "x") currentTurn = "o";
        else currentTurn = "x";

        // update next player DOM element
        currentPlayer.innerHTML = currentTurn;

    }

}


// wait for the document to load before adding clickable events
document.addEventListener("DOMContentLoaded", function () {

    // find all the clickable spaces
    let allSpaces = document.querySelectorAll(".gameSpace");

    // loop with "for-of" through all the clickable spaces
    for (let eachSpace of allSpaces) {
        eachSpace.addEventListener("click", clickSquare);
    }

    // update current player DOM element with first player
    currentPlayer = document.querySelector("#currentPlayer span");
    currentPlayer.innerHTML = currentTurn;

});