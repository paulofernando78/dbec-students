// GUESS THE WORD

const selectedWord = "LORENZO"; //
let guessedWord = [];
let incorrectGuesses = [];
const maxAttempts = 3; //
let gameOver = false; //

function initializeGame() {
  // Initialize guessedWord with underscores
  guessedWord = [];
  for (let i = 0; i < selectedWord.length; i++) {
    guessedWord.push("_");
  }

  // Reset incorrect guesses
  incorrectGuesses = [];

  // Reset game over flag
  gameOver = false;

  // Update the HTML display
  updateDisplay();
}

function updateDisplay() {
  // Update the word display
  const wordDisplay = document.getElementById("word");
  wordDisplay.textContent = guessedWord.join(" ");

  // Update incorrect guesses
  const incorrectGuessesDisplay = document.getElementById("incorrectGuesses");
  incorrectGuessesDisplay.textContent = incorrectGuesses.join(" ");

  // Update attempts remaining
  const attemptsRemainingDisplay = document.getElementById("attemptsRemaining");
  attemptsRemainingDisplay.textContent = maxAttempts - incorrectGuesses.length;

  // Get the message element
  const messageElement = document.getElementById("message");

  // Check for win or lose
  if (guessedWord.join("") === selectedWord && !gameOver) {
    // Player wins
    messageElement.textContent = "Congrats! You got it.";
    messageElement.style.color = "green";
    messageElement.style.fontWeight = "bold";
    gameOver = true;
  } else if (incorrectGuesses.length >= maxAttempts && !gameOver) {
    // Player loses
    messageElement.textContent = "Sorry! Try again.";
    messageElement.style.color = "red";
    messageElement.style.fontWeight = "bold";
    gameOver = true;
  }
}

function guessLetter(letter) {
  // Check if the letter has already been guessed
  if (
    guessedWord.includes(letter) ||
    incorrectGuesses.includes(letter) ||
    gameOver
  ) {
    return; // Letter already guessed or game over, do nothing
  }

  // Check if the letter is in the selected word
  if (selectedWord.includes(letter)) {
    // Update guessedWord with the correctly guessed letter
    for (let i = 0; i < selectedWord.length; i++) {
      if (selectedWord[i] === letter) {
        guessedWord[i] = letter;
      }
    }
  } else {
    // Incorrect guess
    incorrectGuesses.push(letter);
  }

  // Update the game display
  updateDisplay();
}

window.onload = function () {
  initializeGame();
  document.getElementById("message").textContent = "";
};

function resetHM() {
  // Reinitialize the game
  initializeGame();

  // Clear the message
  const messageElement = document.getElementById("message");
  messageElement.textContent = "";
}
