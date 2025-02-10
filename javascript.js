function getComputerChoice(){
    let choice = 1+Math.floor(Math.random()*3)
    switch(choice){
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors";
    }
}

function getHumanChoice(){
    let choice = prompt("What would you like to play?" );
    return choice;
}



function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice){
        if(humanChoice.toLowerCase() == computerChoice){
            console.log(`It's a tie! You both picked ${computerChoice}`);
        }
        else if(humanChoice.toLowerCase() == "rock" && computerChoice == "scissors"){
            console.log('You win! Rock beats scissors!');
            humanScore++;
        }
        else if(humanChoice.toLowerCase() == "rock" && computerChoice == "paper"){
            console.log('You lose! Paper beats rock!');
            computerScore++;
        }
        else if(humanChoice.toLowerCase() == "paper" && computerChoice == "rock"){
            console.log('You win! Paper beats rock!');
            humanScore++;
        }
        else if(humanChoice.toLowerCase() == "paper" && computerChoice == "scissors"){
            console.log('You lose! Scissors beats paper!');
            computerScore++;
        }
        else if(humanChoice.toLowerCase() == "scissors" && computerChoice == "paper"){
            console.log('You win! scissors beats paper!');
            humanScore++;
        }
        else if(humanChoice.toLowerCase() == "scissors" && computerChoice == "rock"){
            console.log('You lose! Rock beats scissors!');
            computerScore++;
        }
    }
    for(let i=0; i<5; i++){
        playRound(getHumanChoice(), getComputerChoice());
    }
    if(computerScore > humanScore){
        console.log(`You lose ${computerScore} to ${humanScore}!`);
    }
    else if(humanScore < computerScore){
        console.log(`You win ${humanScore} to ${computerScore}!`);
    }
}

playGame();