// Import the readline-sync module for interactive terminal input
import readlineSync from "readline-sync";

// ASCII art for the game title with the text "Number Guessing Game".
const gameTitle = `
 _   _                 _
| \\ | |_   _ _ __ ___ | |__   ___ _ __
|  \\| | | | | '_ \` _ \\| '_ \\ / _ \\ '__|
| |\\  | |_| | | | | | | |_) |  __/ |
|_| \\_|\\__,_|_| |_| |_|_.__/ \\___|_|
 / ___|_   _  ___  ___ ___(_)_ __   __ _
| |  _| | | |/ _ \\/ __/ __| | '_ \\ / _\` |
| |_| | |_| |  __/\\__ \\__ \\ | | | | (_| |
 \\____|\\__,_|\\___||___/___/_|_| |_|\\__, |
 / ___| __ _ _ __ ___   ___        |___/
| |  _ / _\` | '_ \` _ \\ / _ \\
| |_| | (_| | | | | | |  __/
 \\____|\\__,_|_| |_| |_|\\___|
`;

// Function to generate a random number between min and max (inclusive)
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to start the number guessing game
function startGame() {
  console.log(gameTitle);
  console.log("I am thinking of a number between 1 and 100.");
  console.log("Can you guess what it is?\n");

  // Define the range for the random number
  const min = 1;
  const max = 100;

  // Generate a random number
  const randomNumber = getRandomNumber(min, max);
  let guess = null;
  let attempts = 0;
  const maxAttempts = 5;

  // Loop until the user guesses the number or runs out of attempts
  while (guess !== randomNumber && attempts < maxAttempts) {
    // Prompt the user for their guess
    guess = parseInt(
      readlineSync.question(`Guess a number between ${min} and ${max}: `),
      10
    );

    // Check if the input is a valid number
    if (isNaN(guess)) {
      console.log("\nPlease enter a valid number.\n");
      continue;
    }

    attempts++;

    // Provide feedback based on the user's guess
    if (guess < randomNumber) {
      console.log("\nToo low! Try again.\n");
    } else if (guess > randomNumber) {
      console.log("\nToo high! Try again.\n");
    } else {
      console.log(
        `\nCongratulations! You guessed the number ${randomNumber} in ${attempts} attempts.\n`
      );
      return;
    }
  }

  // If the user runs out of attempts, reveal the number
  if (guess !== randomNumber) {
    console.log(
      `\nSorry, you've used all ${maxAttempts} attempts. The number was ${randomNumber}.\n`
    );
  }
}

// Start the game
startGame();
