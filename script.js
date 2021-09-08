const gameContainer = document.getElementById("game");
const arr = [];
const cardsArr = [];
const cards = document.getElementsByTagName('div');
const letsgo = document.querySelector("#letsgo");
let noClick = false;




const COLORS = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "red",
    "blue",
    "green",
    "orange",
    "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
    for (let color of colorArray) {
        // create a new div
        const newDiv = document.createElement("div");

        // give it a class attribute for the value we are looping over
        newDiv.classList.add(color);

        // call a function handleCardClick when a div is clicked on
        newDiv.addEventListener("click", handleCardClick);

        // append the div to the element with an id of game
        gameContainer.append(newDiv);
    }
}
// function flipCard(card) {
//     card.classList.add('flip-card');
//     setTimeout(function () { card.classList.remove('flip-card') }, 1000);
// }
// TODO: Implement this function!
function handleCardClick(event) {
    // you can use event.target to see which element was clicked
    if (noClick) return;
    let card = event.target;
    let color = card.classList[0];
    console.log(card);
    card.classList.add('flip-card');
    card.style.backgroundColor = color;
    //push card to cardsArr
    cardsArr.push(card);

    if (cardsArr.length > 1) {
        noClick = true;
        if (cardsArr[0].className === cardsArr[1].className && !(cardsArr[0].id === cardsArr[1].id)) {
            console.log("match");
            noClick = false;
            cardsArr.length = 0;
        }
        else {
            console.log("no match");
            setTimeout(function () {
                cardsArr[0].style.backgroundColor = "white";
                cardsArr[1].style.backgroundColor = "white";
                noClick = false
                cardsArr.length = 0;
            }, 1000);
        }

    }







}

// letsgo.addEventListener('click', function (e) {
//     e.preventDefault();
//     createDivsForColors(shuffledColors);
//     for (let i = 1; i < cards.length; i++) {
//         cards[i].setAttribute('id', i);
//         console.log(cards[i]);

//     }

// });

// when the DOM loads
createDivsForColors(shuffledColors);
for (let i = 1; i < cards.length; i++) {
    cards[i].setAttribute('id', i);
    console.log(cards[i]);

}


