// Initialize a base z-index value
let baseZIndex = 4;

// Initialize a loop counter
let loopCounter = 0;

ShuffleCard1.addEventListener("click", (e) => {
  // Toggle the flipped class
  ShuffleCard1.classList.toggle("shuffle-card-flipped1");

  // If the card is flipped, bring it to the front and increment z-index
  if (ShuffleCard1.classList.contains("shuffle-card-flipped1")) {
    ShuffleCard1.style.zIndex = baseZIndex + loopCounter;
  } else {
    // If the card is flipped back, keep the current z-index
    ShuffleCard1.style.zIndex = baseZIndex + loopCounter;
  }

  // Increment the loop counter
  loopCounter += 1;

  // Check if all cards have been clicked, and reset the loop counter
  if (loopCounter >= 4) {
    loopCounter = 0;
    baseZIndex += 1;
  }
});

ShuffleCard2.addEventListener("click", (e) => {
  // Toggle the flipped class
  ShuffleCard2.classList.toggle("shuffle-card-flipped2");

  // If the card is flipped, bring it to the front and increment z-index
  if (ShuffleCard2.classList.contains("shuffle-card-flipped2")) {
    ShuffleCard2.style.zIndex = baseZIndex + loopCounter;
  } else {
    // If the card is flipped back, keep the current z-index
    ShuffleCard2.style.zIndex = baseZIndex + loopCounter;
  }

  // Increment the loop counter
  loopCounter += 1;

  // Check if all cards have been clicked, and reset the loop counter
  if (loopCounter >= 4) {
    loopCounter = 0;
    baseZIndex += 1;
  }
});

ShuffleCard3.addEventListener("click", (e) => {
  // Toggle the flipped class
  ShuffleCard3.classList.toggle("shuffle-card-flipped3");

  // If the card is flipped, bring it to the front and increment z-index
  if (ShuffleCard3.classList.contains("shuffle-card-flipped3")) {
    ShuffleCard3.style.zIndex = baseZIndex + loopCounter;
  } else {
    // If the card is flipped back, keep the current z-index
    ShuffleCard3.style.zIndex = baseZIndex + loopCounter;
  }

  // Increment the loop counter
  loopCounter += 1;

  // Check if all cards have been clicked, and reset the loop counter
  if (loopCounter >= 4) {
    loopCounter = 0;
    baseZIndex += 1;
  }
});

ShuffleCard4.addEventListener("click", (e) => {
  // Toggle the flipped class
  ShuffleCard4.classList.toggle("shuffle-card-flipped4");

  // If the card is flipped, bring it to the front and increment z-index
  if (ShuffleCard4.classList.contains("shuffle-card-flipped4")) {
    ShuffleCard4.style.zIndex = baseZIndex + loopCounter;
  } else {
    // If the card is flipped back, keep the current z-index
    ShuffleCard4.style.zIndex = baseZIndex + loopCounter;
  }

  // Increment the loop counter
  loopCounter += 1;

  // Check if all cards have been clicked, and reset the loop counter
  if (loopCounter >= 4) {
    loopCounter = 0;
    baseZIndex += 1;
  }
});

// ---------------------------------------------------------------------

const cards = ["card1", "card2", "card3", "card4"];
let count = 1;
let increasing = true;

function resetStyles() {
  cards.forEach((card, index) => {
    const shuffleCard = document.getElementById(card);
    shuffleCard.style.zIndex = increasing ? cards.length - index : index + 1;
  });
}

function handleCardClick() {
  if (count === cards.length * 2) {
    count = 1;
    increasing = !increasing;
    resetStyles();
  } else {
    count++;
  }
}

cards.forEach((card) => {
  const shuffleCard = document.getElementById(card);
  shuffleCard.addEventListener("click", handleCardClick);
});

// Inicializar os estilos iniciais
resetStyles();
