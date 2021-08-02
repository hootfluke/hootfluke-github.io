
//main card containers (animation)
flipCard = document.querySelector(".flip-card");
flipCard2 = document.querySelector(".flip-card2");

//card that is animated
card = document.querySelector(".flip-card-inner");
card2 = document.querySelector(".flip-card-inner2");

//front of animated card (face)
cardFront = document.querySelector(".filp-card-back");
cardFront2 = document.querySelector(".filp-card-back2");

//face img of fliped card
cardFace = document.getElementById("cardFace");
cardFace2 = document.getElementById("cardFace2");

//played card container/ stack of played cards
cardPlayed = document.querySelector(".card-played");
cardPlayed2 = document.querySelector(".card-played2");

//face of card played in card pile
currentInPile = document.getElementById("currentInPile");
currentInPile2 = document.getElementById("currentInPile2");

//stack of unplayed cards
cardStack = document.querySelector(".card-stack");
cardStack2 = document.querySelector(".card-stack2");

//card container row
cardContainer1 = document.getElementById("cardRow1");
cardContainer2 = document.getElementById("cardRow2");

//img on card stack
imgOnStack = document.getElementById("imgOnStack");
imgOnStack2 = document.getElementById("imgOnStack2");

//back of card pulled
cardBack = document.getElementById("cardBack")
cardBack2 = document.getElementById("cardBack2")




resetButton = document.getElementById("reset");
gameChoice = document.getElementById("gameSelect");
player1Score = document.getElementById("player1");
player2Score = document.getElementById("player2");

let winCondition = 5;
let isGameOver = false;
let p1score = 0;
let p2score = 0;
let p1Card = 0;
let p2Card = 0;
let p1Card2 = 0;
let p2Card2 = 0;
let gameMode = "";



// Create card hashmap
let cardHashmap = new Map()

function winText() {
    if (p1score > p2score) {
        player1Score.innerText = `You won!! Your final score was ${p1score} points.`
        player2Score.innerText = `You lost with a total of ${p2score} points.`
    }
    else if (p1score < p2score) {
        player2Score.innerText = `You won!! Your final score was ${p2score} points.`
        player1Score.innerText = `You lost with a total of ${p1score} points.`
    }
    else {
        player2Score.innerText = `You tied! Your final score was ${p2score} points.`
        player1Score.innerText = `You tied! Your final score was ${p1score} points.`
    }
}


function War(num1, num2) {
    if (num1 > num2) {
        p1score += num2;
        player1Score.innerText = `Player1 Score: ${p1score}`;
    }
    else if (num2 > num1) {
        p2score += num1;
        player2Score.innerText = `Computer Score: ${p2score}`;
    }

}


// function TwentyOne(pl11, pl12, pl21 = 0, pl22 = 0, winCountLimit = 5) {
//     let totalPl1 = pl11 + pl12;
//     let totalPl2 = pl21 + pl22;
//     if (totalPl1 <= 21 && totalPl1 > totalPl2) {
//         p1score++;
//         player1Score.innerText = `Current Total: 0     Player Hands Won: ${p1score}`;
//     }
//     else if (totalPl2 <= 21 && totalPl2 > totalPl1) {
//         p2score++;
//         player2Score.innerText = `Current Total: 0     Dealer Hands Won: ${p2score}`;
//     }

//     if (p1score === winCountLimit || p2score === winCountLimit) {
//         winText();
//         flipCard.style.pointerEvents = "none"
//         isGameOver = true;
//         console.log("GAME IS OVER")
//     }

// }

// Pull a random number when a button is hit
function makeRand() {
    let randNum = Math.floor(Math.random() * 52)
    return randNum;
}




function cardSuit(cardNum) {
    let result = cardNum % 4;
    if (result === 0) {
        return "of_clubs"
    }
    else if (result === 1) {
        return "of_diamonds"
    }
    else if (result === 2) {
        return "of_hearts"
    }
    else {
        return "of_spades"
    }
}




function specialNumber(cardNum) {
    if (cardNum === 9) {
        return "ace"
    }
    else if (cardNum === 10) {
        return "jack"
    }
    else if (cardNum === 11) {
        return "king"
    }
    else {
        return "queen"
    }
}




function makeCard(playerCardFace) {

    //check if card has been played
    while (cardHashmap.has(currRand) && cardHashmap.size !== 52) {
        currRand = makeRand();
    }

    console.log(currRand);
    console.log(cardHashmap);


    // Add value when card is pulled
    cardHashmap.set(currRand, "Used")


    //set imgs to correct card
    if (currRand % 13 < 9) {
        playerCardFace.src = `PNG-cards-1.3/${currRand % 13 + 2}_${cardSuit(currRand)}.png`
    }
    else {
        playerCardFace.src = `PNG-cards-1.3/${specialNumber(currRand % 13)}_${cardSuit(currRand)}.png`
    }
    return (currRand % 13 + 2);
}




function reset() {
    cardHashmap.clear();

    cardPlayed.style.visibility = "hidden";
    cardStack.style.visibility = "visible";

    if (gameChoice.value !== 1 || gameChoice.value !== 3) {
        cardPlayed2.style.visibility = "hidden";
        cardStack2.style.visibility = "visible";
        currentInPile2.style.visibility = "hidden";
        player1Score.innerText = "Player1 Score: 0";
        player2Score.innerText = "Player2 Score: 0";

    }
    else {
        player1Score.innerText = "";
        player2Score.innerText = "";
    }
    p1score = 0;
    p2score = 0;
    flipCard.style.pointerEvents = "auto";
    isGameOver = false;
    console.log("game is reset");
}

// function animateSecond(player) {
//     if (player === 1) {
//         p1Card2 = makeCard(cardFace);
//         flipCard.style.pointerEvents = "none";
//         card.style.transitionDuration = "750ms"
//         card.style.transform = "rotateY(180deg)";
//         card.style.right = 0;
//         setTimeout(() => {
//             card.style.transitionDuration = "50ms, 50ms"
//             card.style.transform = "none"
//             card.style.right = "-80%";
//             currentInPile.src = cardFace.src;
//             card.style.visibility = "hidden";
//             if (!isGameOver) {
//                 setTimeout(() => {
//                     card.style.visibility = "visible";
//                     flipCard.style.pointerEvents = "auto";
//                 }, 750);
//             }

//         }, 750);
//     }
//     else {
//         p2Card2 = makeCard(cardFace2);
//         flipCard.style.pointerEvents = "none";
//         card2.style.transitionDuration = "750ms"
//         card2.style.transform = "rotateY(180deg)";
//         card2.style.right = 0;
//         setTimeout(() => {
//             card2.style.transitionDuration = "50ms, 50ms"
//             card2.style.transform = "none"
//             card2.style.right = "-80%";
//             currentInPile2.src = cardFace2.src;
//             card2.style.visibility = "hidden";
//             if (!isGameOver) {
//                 setTimeout(() => {
//                     card2.style.visibility = "visible";
//                     flipCard.style.pointerEvents = "auto";
//                 }, 750);
//             }

//         }, 750);
//     }
// }



function cardAnimation() {

    p1Card = makeCard(cardFace);


    if (gameChoice.value === "1" || gameChoice.value === "2") {
        p2Card = makeCard(cardFace2);

    }

    setTimeout(() => {
        if (gameChoice.value === "1") {
            War(p1Card, p2Card);


        }
        // else if (gameChoice.value === "2") {
        //     TwentyOne(p1Card, p2Card, p1Card2, p2Card2, winCondition);
        // }
    }, 1500);

    console.log(`${p1Card}, ${p2Card}`);


    flipCard.style.pointerEvents = "none";




    // make the most recent played card visible on first pull
    if (cardHashmap.size > 0 && cardHashmap.size < 3) {
        setTimeout(() => {
            cardPlayed.style.visibility = "visible";
            if (gameChoice.value === "1" || gameChoice.value === "2") {
                setTimeout(() => {
                    currentInPile2.style.visibility = "visible";
                }, 750);
                console.log(gameChoice.value)
            }
        }, 750);
    }
    // hide card stack if last card is pulled
    else if (cardHashmap.size >= 51) {
        imgOnStack.style.visibility = "hidden";

        setTimeout(() => {
            cardFace.style.visibility = "hidden";
            cardBack.style.visibility = "hidden";
            imgOnStack2.style.visibility = "hidden";

            setTimeout(() => {
                cardFace2.style.visibility = "hidden";
                cardBack2.style.visibility = "hidden";
                currentInPile2.src = cardFace2.src;

                winText();
            }, 750);
        }, 750);
        flipCard.style.pointerEvents = "none"
        isGameOver = true;
        console.log("GAME IS OVER")

    }

    // animate card
    card.style.transitionDuration = "750ms"
    card.style.transform = "rotateY(180deg)";
    card.style.right = 0;


    //animate card2
    setTimeout(() => {
        card2.style.transitionDuration = "750ms"
        card2.style.transform = "rotateY(180deg)";
        card2.style.right = 0;
    }, 750);


    // make hidden reset then make visible again 
    setTimeout(() => {
        card.style.transitionDuration = "50ms, 50ms"
        card.style.transform = "none"
        card.style.right = "-100%";
        currentInPile.src = cardFace.src;
        card.style.visibility = "hidden";
        if (!isGameOver) {
            setTimeout(() => {
                card.style.visibility = "visible";
                flipCard.style.pointerEvents = "auto";

                //reset card2
                card2.style.transitionDuration = "50ms, 50ms"
                card2.style.transform = "none"
                card2.style.right = "-100%";
                currentInPile2.src = cardFace2.src;

                cardBack2.style.visibility = "hidden";
                cardFace2.style.visibility = "hidden"
                if (!isGameOver && gameChoice.value === "1" || gameChoice.value === "2") {
                    setTimeout(() => {
                        cardBack2.style.visibility = "visible";
                        cardFace2.style.visibility = "visible";


                    }, 750);
                }


            }, 750);
        }

    }, 750);
}




//initalize make rand
let currRand = makeRand();

gameChoice.addEventListener("input", function () {


    cardContainer1.height = cardFace.height;
    cardContainer2.height = cardFace.height;

    if (gameChoice.value === "1") {
        reset();
        player1Score.innerText = "Player1 Score: 0";
        player2Score.innerText = "Player2 Score: 0";
        imgOnStack2.style.visibility = "visible";
        cardBack2.style.visibility = "visible";
        cardFace2.style.visibility = "visible";
        gameMode = "War";


    }
    // else if (gameChoice.value === "2") {
    //     reset();
    //     player1Score.innerText = "Current Total: 0     Player Hands Won: 0";
    //     player2Score.innerText = "Current Total: 0    Dealer Hands Won: 0";
    //     imgOnStack2.style.visibility = "visible";
    //     cardBack2.style.visibility = "visible";
    //     cardFace2.style.visibility = "visible";
    //     gameMode = "21";

    // }
    else {
        reset();
        player1Score.innerText = "";
        player2Score.innerText = "";
        imgOnStack2.style.visibility = "hidden";
        cardBack2.style.visibility = "hidden";
        cardFace2.style.visibility = "hidden";
    }
    console.log(gameChoice.value);

})

flipCard.addEventListener("click", function () {


    if (!isGameOver) {
        cardAnimation();
    }


});

resetButton.addEventListener("click", function () {
    reset();
});
