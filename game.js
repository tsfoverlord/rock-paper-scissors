function  getComputerChoice() {
    let choices = ['rock', 'paper', 'scissor']
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

function disableAllButtons(){
    let buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.disabled = true;
    });
}


let playerScore = 0;
let computerScore = 0;
function game(e){
    let playerSelection = this.id; // rock or paper or scissor
    let computerSelection = getComputerChoice();
    console.log(playerSelection+" "+computerSelection);
    let result = '';
    let playerScoreElement = document.querySelector('.user');
    let computerScoreElement = document.querySelector('.computer');
    let resultElement = document.querySelector('.result p');
    let outcome = playRound(playerSelection, computerSelection);
    if(outcome == 1){
        result = `You win! ${playerSelection} beats ${computerSelection}`;
        playerScore++;
    } else if(outcome == 0){
        computerScore++;
        result = `You lose! ${computerSelection} beats ${playerSelection}`;
    } else {
        result = 'Tie';
    }
    resultElement.textContent = result;
    playerScoreElement.textContent = "User: "+playerScore;
    computerScoreElement.textContent = "Computer: "+computerScore;
    
    if(playerScore >= 5){
        result = "Player wins!";
        disableAllButtons();
    } else if(computerScore >= 5){
        result = "Computer wins!";
        disableAllButtons();
    }

    resultElement.textContent = result;
}

let buttons = document.querySelectorAll('button');
buttons.forEach((button)=>{
    button.addEventListener('click',game);
});