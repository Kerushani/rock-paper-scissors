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

//generates a random selection of rock, paper or scissors for the game
function getComputerChoice(){
    let gameOptions = ["rock", "paper", "scissors"];
    let randomChoice = gameOptions[Math.floor(Math.random()*gameOptions.length)]
    randomChoice = convertToUpperCase(randomChoice);
    console.log(randomChoice);

    return randomChoice;
}

//function converts variables to fully uppercase letters
function convertToUpperCase(response){
    return response.toUpperCase();
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
        displayLoseResult(computerResponse);

    } else if (playerResponse === "ROCK" && computerResponse === "SCISSORS"){
        displayWinResult(computerResponse);

    } else if (playerResponse === "PAPER" && computerResponse === "ROCK"){
        displayWinResult(computerResponse);

    } else if (playerResponse === "PAPER" && computerResponse === "SCISSORS"){
        displayLoseResult(computerResponse);

    } else if (playerResponse === "SCISSORS" && computerResponse === "ROCK"){
        displayLoseResult(computerResponse);

    } else if (playerResponse === "SCISSORS" && computerResponse === "PAPER"){
        displayWinResult(computerResponse);
    }

    console.log("Currently, you have " + wins + " wins, " + losses + " losses, and " + ties + " ties.")

    let playAgain = prompt("Would you like to play again? Enter yes or no.");
    playAgain = convertToUpperCase(playAgain);

    if (playAgain === "YES"){
        alert("Sounds great! Good luck for the next round!");
        startGame();
    } else {
        alert("That is fine!" );
    }
}

function displayWinResult(computerResult){
    console.log("The computer chose " + computerResult + ". Yay! You won this round!");
    wins++; 
}

function displayLoseResult(computerResult){
    console.log("The computer chose " + computerResult + ". Oh no! You lost this round!");
    losses++;

}