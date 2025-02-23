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

let humanScore = 0;
let computerScore = 0;

const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");

const div = document.querySelector("div");
div.setAttribute("style", "white-space: pre");

function playRound(humanChoice, computerChoice){
    if(humanChoice.toLowerCase() == computerChoice){
        div.textContent = `It's a tie! You both picked ${computerChoice} \r\n Score ${humanScore + " to " + computerScore}`;
    }
    else if(humanChoice.toLowerCase() == "rock" && computerChoice == "scissors"){
        humanScore++;

        div.textContent = `You win! Rock beats scissors! \r\n Score ${humanScore + " to " + computerScore}`;
    }
    else if(humanChoice.toLowerCase() == "rock" && computerChoice == "paper"){
        computerScore++;

        div.textContent = `You lose! Paper beats rock! \r\n Score ${humanScore + " to " + computerScore}`;
    }
    else if(humanChoice.toLowerCase() == "paper" && computerChoice == "rock"){
        humanScore++;

        div.textContent = `You win! Paper beats rock! \r\n Score ${humanScore + " to " + computerScore}`;
    }
    else if(humanChoice.toLowerCase() == "paper" && computerChoice == "scissors"){
        computerScore++;

        div.textContent = `You lose! Scissors beats paper! \r\n Score ${humanScore + " to " + computerScore}`;
    }
    else if(humanChoice.toLowerCase() == "scissors" && computerChoice == "paper"){
        humanScore++;

        div.textContent = `You win! scissors beats paper! \r\n Score ${humanScore + " to " + computerScore}`;
    }
    else if(humanChoice.toLowerCase() == "scissors" && computerChoice == "rock"){
        computerScore++;

        div.textContent = `You lose! Rock beats scissors! \r\n Score ${humanScore + " to " + computerScore}`;
    }
    if(computerScore >= 5 || humanScore >= 5){
        if(computerScore > humanScore){
            div.textContent = `You lose ${computerScore} to ${humanScore}!`;
            humanScore = 0;
            computerScore = 0;
        }
        else if(humanScore < computerScore){
            div.textContent = `You win ${humanScore} to ${ computerScore}!`;
            humanScore = 0;
            computerScore = 0;
        }
        else{
            div.textContent = "It's a tie!"
        }
    }

}

btn1.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
});
btn2.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
});
btn3.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
});

