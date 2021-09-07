const gameContainer = document.getElementById("game");
const arr = [];
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
function flipCard(card) {
  card.classList.add('flip-card');
  setTimeout(function () { card.classList.remove('flip-card') }, 1000);
}
// TODO: Implement this function!
function handleCardClick(event) {
  // you can use event.target to see which element was clicked

  let card = event.target;
  console.log("you just clicked", card);
  card.style.backgroundColor = card.className;
  flipCard(card);
  arr.push(card);

  if (arr.length > 1) {
    console.log(arr);
    console.log(arr[0].classList[0]);
    console.log(arr[1].classList[0]);
    if (arr[0].classList[0] === arr[1].classList[0]) {
      console.log("match");
      arr.length = 0;
    }
    else {
      console.log("no match");
      setTimeout(function () {
        console.log(arr.length);
        for (i = 0; i < arr.length; i++) {
          console.log('this happened');
          flipCard(arr[i]);
          arr[i].style.backgroundColor = "white";

          console.log('card flipped');
        }
        arr.length = 0;
      }, 1000)



    }

  }
  // if (arr.length > 1) {
  //   if (arr[0].classList = arr[1].classList) {
  //     console.log('its a match');
  //   }
  //   else {

  //     console.log('not a match');
  //   }
  //   // arr.length = 0;
  // }


  // card.style.backgroundColor = card.className;
  // card.classList.add('flip-card');
  // setTimeout(function () { card.classList.remove('flip-card') }, 500);

  // function flipCard() {
  //   card.style.backgroundColor = "white";
  //   card.classList.add('flip-card');
  //   setTimeout(function () { card.classList.remove('flip-card') }, 500);
  // }
  // setTimeout(flipCard, 1000);
}

// when the DOM loads
createDivsForColors(shuffledColors);
