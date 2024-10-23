// Initialize player and computer scores
let playerScore = 0;
let computerScore = 0;

/**
 * Capitalizes the first letter of the given string.
 * @param {string} choice - The string to be capitalized.
 * @returns {string} The capitalized string.
 */
function capitalize(choice) {
    let letter = choice.charAt(0).toUpperCase(); // Get the first letter and capitalize it
    let newWord = letter + choice.substring(1); // Combine the capitalized letter with the rest of the string
    return newWord;
}

/**
 * Generates a random choice for the computer: Rock, Paper, or Scissors.
 * @returns {string} The computer's choice.
 */
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1; // Random number between 1 and 3
    if (choice == 1) {
        return "Rock"; // Return "Rock" if random number is 1
    } else if (choice == 2) {
        return "Paper"; // Return "Paper" if random number is 2
    } else {
        return "Scissors"; // Return "Scissors" if random number is 3
    }
}

/**
 * Prompts the user to choose Rock, Paper, or Scissors, with input validation.
 * @returns {string} The player's validated choice.
 */
function getHumanChoice() {
    let pChoice;
    while (true) {
        pChoice = prompt("Choose Rock, Paper, or Scissors: "); // Prompt user for input

        // Check if the prompt was canceled
        if (pChoice === null) {
            alert("Input canceled. You cannot escape your fate. Try again.");
            continue; // Restart the loop if input was canceled
        }

        pChoice = pChoice.toLocaleLowerCase(); // Convert input to lowercase
        pChoice = capitalize(pChoice); // Capitalize the first letter

        // Validate the choice
        if (pChoice === "Rock" || pChoice === "Paper" || pChoice === "Scissors") {
            return pChoice; // Return the valid choice
        } else {
            alert("That is not a valid choice, please try again."); // Show error message for invalid input
        }
    }
}

/**
 * The main game loop, where the player and computer make choices, and scores are tracked.
 */
function gameLoop() {

    // Define the winning conditions for the game
    const rules = new Map();
    rules.set("Rock", "Scissors");
    rules.set("Scissors", "Paper");
    rules.set("Paper", "Rock");

    while (true) {
        let cChoice = getComputerChoice(); // Get computer's choice
        let pChoice = getHumanChoice(); // Get player's choice

        console.log("Computer: " + cChoice);
        console.log("Player: " + pChoice);

        // Determine the outcome of the round
        if (pChoice === cChoice) {
            console.log("TIE!"); // It's a tie if both choices are the same
        } else if (rules.get(pChoice) === cChoice) {
            console.log("Player Wins!");
            playerScore += 1; // Increment player score if the player wins
        } else {
            console.log("Computer Wins!");
            computerScore += 1; // Increment computer score if the computer wins
        }

        // Display the current scores
        console.log("Player: " + playerScore + " Computer: " + computerScore);

        // Check if either player has won the game (first to 3 points)
        if (playerScore === 3 || computerScore === 3) {
            if (playerScore === 3) {
                console.log("Player Wins: " + playerScore + " to " + computerScore); // Player wins the game
            } else {
                console.log("Computer Wins: " + computerScore + " to " + playerScore); // Computer wins the game
            }
            break; // Exit the game loop
        }
    }
}

// Start the game
gameLoop();
