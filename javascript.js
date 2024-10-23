let playerScore = 0;
let computerScore = 0;

function capitalize(choice){
    let letter = choice.charAt(0).toUpperCase();
    let newWord = letter + choice.substring(1);
    return newWord;
}

function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3) + 1
    if(choice == 1){
        return "Rock"
    } else if (choice == 2) {
        return "Paper"
    } else {
        return "Scissors"
    }
}

function getHumanChoice(){
    let pChoice;
    while(true) {
        pChoice = prompt("Choose Rock, Paper, or Scissors: ");
        if(pChoice === null){
            alert("Input canceled. You cannot escape your fate. Try again.");
            continue;
        }

        let capChoice = capitalize(pChoice);
        if(capChoice === "Rock" || capChoice === "Paper" || capChoice === "Scissors"){
            return capChoice;
        } else {
            alert("That is not a valid choice, please try again.");
        }    
    }
}

function gameLoop(){
    
    const rules = new Map();
    rules.set("Rock", "Scissors");
    rules.set("Scissors", "Paper");
    rules.set("Paper", "Rock");

    while(true){
        let cChoice = getComputerChoice();
        let pChoice = getHumanChoice();

        console.log("Computer: " + cChoice);
        console.log("Player: " + pChoice);                    

        if(pChoice === cChoice){
            console.log("TIE!");
        } else if(rules.get(pChoice) === cChoice){
            console.log("Player Wins!");
            playerScore += 1;
        } else {
            console.log("Computer Wins!");
            computerScore += 1;
        }

        console.log("Player: " + playerScore + " Computer: " + computerScore);

        if(playerScore === 3 || computerScore === 3){
            if(playerScore === 3){
                console.log("Player Wins: " + playerScore + " to " + computerScore);
            } else {
                console.log("Computer Wins: " + computerScore + " to " + playerScore);
            }
            break;
        }
    }    
}

gameLoop();