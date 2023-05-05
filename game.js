introduction();

let wins = 0, losses = 0, ties = 0; //sets up variables to track the player's wins, losses and ties

startGame();

//gives an introduction to the game
function introduction(){
    alert("Welcome to rock, paper, scissors. In this game, you will be playing against the computer. You can play however many rounds you want and we'll keep track you wins, losses and ties.");
}

//invokes functions to play rock, paper, scissors
function startGame(){
    let computerSelection = getComputerChoice();
    let playerSelection = getPlayerChoice();
    compareSelection(playerSelection, computerSelection);
}

//function converts variables to fully uppercase letters
function convertToUpperCase(response){
    return response.toUpperCase();
}

//generates a random selection of rock, paper or scissors for the game
function getComputerChoice(){
    let gameOptions = ["rock", "paper", "scissors"];
    let randomChoice = gameOptions[Math.floor(Math.random()*gameOptions.length)]
    randomChoice = convertToUpperCase(randomChoice);

    return randomChoice;
}

//prompts player for their choice of rock, paper or scissors
function getPlayerChoice(){
    let playerChoice = prompt("Choose rock, paper or scissors: ");
    playerChoice = convertToUpperCase(playerChoice); //converts player's response to uppercase letters to avoid issues with mixed upper case & lower case responses

    //checks if player's response is valid; loop reoccurs if response is not correct
    while (!(playerChoice == "ROCK" ||  playerChoice == "SCISSORS" || playerChoice == "PAPER")){
        playerChoice = prompt("Hmmm. Your response does not seem to be one of the given options. Please respond with either rock, paper or scissors. ");
        playerChoice = convertToUpperCase(playerChoice); //converts player's response to uppercase letters
    }
    return playerChoice;
}

//compares the player's selection to the computer's selection
function compareSelection(playerResponse, computerResponse){
    if (playerResponse === computerResponse){
        console.log("The computer also chose " + playerResponse + " ! No one gets a point this round.");
        ties++;
    } else if (playerResponse === "ROCK" && computerResponse === "PAPER"){
        displayLoseResult(computerResponse, playerResponse);

    } else if (playerResponse === "ROCK" && computerResponse === "SCISSORS"){
        displayWinResult(computerResponse, playerResponse);

    } else if (playerResponse === "PAPER" && computerResponse === "ROCK"){
        displayWinResult(computerResponse, playerResponse);

    } else if (playerResponse === "PAPER" && computerResponse === "SCISSORS"){
        displayLoseResult(computerResponse, playerResponse);

    } else if (playerResponse === "SCISSORS" && computerResponse === "ROCK"){
        displayLoseResult(computerResponse, playerResponse);

    } else if (playerResponse === "SCISSORS" && computerResponse === "PAPER"){
        displayWinResult(computerResponse, playerResponse);
    }

    //displays the cumulative wins, losses and ties of the player
    console.log("Currently, you have " + wins + " wins, " + losses + " losses, and " + ties + " ties.")

    //prompts player to ask if they want to play again
    let playAgain = prompt("Would you like to play again? Enter yes or no.");
    playAgain = convertToUpperCase(playAgain);

    //checks if player's response is yes or no; loop will occur until valid response is given
    while (!(playAgain == "YES" || playAgain == "NO")){
        playAgain = prompt("Sorry, but I do not recognize that response. Would you like to play again? (Please respond with yes or no)");
        playAgain = convertToUpperCase(playAgain);
    }

    if (playAgain === "YES"){
        alert("Sounds great! Good luck for the next round!");
        startGame(); //invokes function that allows the game to restart
    } else if (playAgain === "NO"){
        alert("That is fine!" ); //game ends at this point if player answers no
    }
}

//displays a message in console informing the player they won the round
//function also increments a point to the wins variable tracker
function displayWinResult(computerResult, playerResult){
    console.log("The computer chose " + computerResult + " and you chose " + playerResult + ". Yay! You won this round!");
    wins++; 
}

//displays a message in console informing the player they loss the round
//function also increments a point to the losses variable tracker
function displayLoseResult(computerResult, playerResult){
    console.log("The computer chose " + computerResult + " and you chose " + playerResult + ". Oh no! You lost this round!");
    losses++;

}