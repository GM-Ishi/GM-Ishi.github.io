// declare the board data for a game, using 3 arrays
// "-" indicates unmarked, "x" indicates an X mark, "o" indicates an O mark
let rowA = [ "-", "-", "-" ];
let rowB = [ "-", "-", "-" ];
let rowC = [ "-", "-", "-" ];


   
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
   *   "d" if the game is a draw.
   *
   *   You should be able to change the input data (the 3 arrays)
   *   and your function will still determine the correct winner
   *
   ********************************* */






// **********************************************
// ***** DO NOT EDIT THE CODE BELOW THIS LINE
// **********************************************


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

