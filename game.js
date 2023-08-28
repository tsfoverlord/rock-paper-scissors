function  getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors']
    let choice = Math.floor(Math.random() * choices.length);
    return choices[choice];
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection == computerSelection){
        return -1; // tie
    }
    if((playerSelection == "rock" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "scissor") ||
        (playerSelection == "scissor"  && computerSelection == "rock")){
            return 0; // player loses
    }
    else {
        return 1; //player wins
    }
}

function game() {
    /*
    Do this 5 times
        get player input
        get computer input
        if computer wins increment its score
        if player wins increment its score
    if user score is greater user wins
    if computer score is greater computer wins
    else tie
    */
    let i = 1;
    let playerScore = 0;
    let computerScore = 0;
    while(i <= 5){
        let playerSelection = prompt("Your move(rock,paper,scissor)");
        playerSelection = playerSelection.toLowerCase();
        if(playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissor"){
            console.log('Invalid move!!');
            continue;
        }
        let computerSelection = getComputerChoice();
        let outcome = playRound(playerSelection, computerSelection);
        if(outcome == 1){
            console.log(`You win! ${playerSelection} beats ${computerSelection}`);
            playerScore++;
        } else if(outcome == 0){
            computerScore++;
            console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        } else {
            console.log('Tie');
        }
        i++;    
    }

    if(playerScore > computerScore){
        console.log(`You win by ${playerScore} : ${computerScore}`);
    } else if(computerScore > playerScore){
        console.log(`You lose by ${playerScore} : ${computerScore}`);
    } else {
        console.log('Game ends in tie')
    }
}
game();