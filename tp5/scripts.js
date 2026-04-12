// javascript for interactive Concentration game for 1 player

// track number of turns
let playerClicks = 0;
let timeDelay = 1000; // in milliseconds


// clear clicked classes 
function clearClicks() {

    // get all the clicked elements
    let allClickedCards = document.querySelectorAll(".clicked");
    for (let eachCard of allClickedCards) {
        eachCard.classList.remove("clicked");
    }

    // increase player turn count by 1 and update screen
    playerClicks++;
    document.querySelector("#turnCount span").innerHTML = playerClicks;

    // check for winning
    let allCards = document.querySelectorAll(".card");
    let matchedCards = document.querySelectorAll(".matched");
    if (allCards.length == matchedCards.length) {
        // player has matched all cards
        console.log("all cards matched, player has won");
        document.querySelector("#winning").innerHTML = "You won!";
    }
}



// new function to flip card when clicked
function flipCard() {

    if (!this.classList.contains("matched")) {

        // get all the clicked cards
        let allClickedCards = document.querySelectorAll(".clicked");

        // only proceed if there are less than two clicked
        if (allClickedCards.length < 2) {

            // add clicked class to clicked card
            this.classList.add("clicked");

        }

        // get a fresh list of the clicked cards
        allClickedCards = document.querySelectorAll(".clicked");

        // if it's a pair, compare them
        if (allClickedCards.length == 2) {

            // get the class list of each card as a string
            let card1 = allClickedCards[0].classList.toString();
            let card2 = allClickedCards[1].classList.toString();

            // if the class lists match -- it's a pair
            if (card1 == card2) {
                console.log("it's a match!");
                allClickedCards[0].classList.add("matched");
                allClickedCards[1].classList.add("matched");

            } else {
                console.log("not a match");
                
            }

            // whether matched or not, clear the clicks
            window.setTimeout(clearClicks, timeDelay);

        }
    }
}






// run this code when the DOM loads
document.addEventListener("DOMContentLoaded", function (e) {

    // get handles to game elements
    let allCards = document.querySelectorAll(".card");
    let gameboard = document.querySelector("#gameBoard");

    // loop through cards to randomize and add click listeners
    for (x = 0; x < allCards.length; x++) {
        
        // randomize cards by reinserting them in random spots
        let randNum = Math.floor(Math.random() * allCards.length);
        gameboard.insertBefore(allCards[x], gameboard.children[randNum]);

        // call flipCard() when clicked
        allCards[x].addEventListener("click", flipCard);
    }

});