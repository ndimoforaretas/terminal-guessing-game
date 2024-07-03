# Number Guessing Game

Welcome to the Number Guessing Game! This is a simple interactive terminal application where you try to guess a randomly generated number within a specified range. It's a great way to practice your JavaScript skills and learn about loops, conditionals, and user input handling.

## Features

- Random number generation
- User input handling
- Feedback on guesses (too low, too high, correct)
- Limited number of attempts
- ASCII art for enhanced user experience

## Getting Started

### Prerequisites

- Node.js (version 12 or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository to your local machine:

   ```sh
   // Replace `yourusername` with your GitHub username

   git clone https://github.com/yourusername/number-guessing-game.git
   ```

2. Navigate to the project directory:

   ```sh
   cd number-guessing-game
   ```

3. Install the required dependencies:

   ```sh
   npm install
   ```

### Running the Game

To start the game, run the following command in your terminal:

```sh
npm start
```

### How to Play

1. The game will display a welcome message with ASCII art.
2. You will be prompted to guess a number between 1 and 100.
3. Enter your guess and press Enter.
4. The game will provide feedback if your guess is too low, too high, or correct.
5. You have a maximum of 5 attempts to guess the correct number.
6. If you guess the number correctly within the allowed attempts, you win!
7. If you run out of attempts, the game will reveal the correct number.

## Code Explanation

The code is written in JavaScript using modern ES6+ syntax. The `readline-sync` package is used to handle user input in the terminal. Here's a brief overview of the main parts of the code:

- **Importing readline-sync**: The `readline-sync` module is imported using ES6 `import` syntax.
- **ASCII Art**: The `gameTitle` constant contains the ASCII art for the game title.
- **Random Number Generation**: The `getRandomNumber` function generates a random number between the specified `min` and `max` values.
- **Game Logic**: The `startGame` function contains the main logic of the game, including prompting the user for guesses, providing feedback, and checking if the user has won or lost.

## Contributing

Contributions are welcome! If you have any ideas for improvements or new features, feel free to fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.

---

Have fun playing the Number Guessing Game! If you have any questions or need further assistance, feel free to reach out.
