function  getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors']
    let choice = Math.floor(Math.random() * choices.length);
    return choices[choice];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection == computerSelection){
        return "Tie";
    }
    if(playerSelection == "rock" && computerSelection == "paper"){
        return "You Lose! paper beats rock";
    }
    else if(playerSelection == "paper" && computerSelection == "scissor") {
        return "You lose! scissor beats paper";
    }
    else if(playerSelection == "scissor"  && computerSelection == "rock") {
        return "You lose! rock beats scissor"
    }
    else {
        return `You win ${playerSelection} beats ${computerSelection}`
    }
}