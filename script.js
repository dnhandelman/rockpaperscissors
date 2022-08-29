

/* userCounter = document.getElementById('user')

let buttons = document.querySelectorAll('button');
        // we use the .forEach method to iterate through each button
        buttons.forEach((button) => {
        
            // and for each one we add a 'click' listener
            button.addEventListener('click', playRound => {
                //alert(button.id);
                console.log(button.id)
                

            });
            
        }); */

let userScore = 0
let computerScore = 0
function computerHand() {
    let options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * options.length)];
}

function playRound(userChoice, getComputerChoice) {
    if (userScore < 5 && computerScore < 5) {
        /* if (userChoice == 'rock') {
            playerChoiceIcon.classList = 'imgIDRock'} */
        if (userChoice == 'rock') {
            playerChoiceIcon.classList = 'imgIDRock'
        } else if (userChoice == 'paper') {
            playerChoiceIcon.classList = 'imgIDPaper'
        } else if (userChoice == 'scissors') {
            playerChoiceIcon.classList = 'imgIDScissors'
        } if (getComputerChoice == 'rock') {
            computerChoiceIcon.classList = 'imgIDRock'
        } else if (getComputerChoice == 'paper') {
            computerChoiceIcon.classList = 'imgIDPaper'
        } else if (getComputerChoice == 'scissors') {
            computerChoiceIcon.classList = 'imgIDScissors'
        } if ((userChoice == "rock") && (getComputerChoice == "paper")) {
            //alert("try again. The computer chose " + getComputerChoice + " .")
            roundResult.textContent = "try again!";
            computerScore++
            computerCurrentScore.textContent = computerScore
        } else if ((userChoice == "scissors") && (getComputerChoice == "paper")) {
            //alert("you win! " + userChoice + " beats " + getComputerChoice)
            roundResult.textContent = "you win!";
            userScore++
            playerCurrentScore.textContent = userScore
        } else if ((userChoice == "paper") && (getComputerChoice == "rock")) {
            //alert("you win! " + userChoice + " beats " + getComputerChoice)
            roundResult.textContent = "you win!";
            userScore++
            playerCurrentScore.textContent = userScore
        } else if ((userChoice == "rock") && (getComputerChoice == "scissors")) {
            //alert("you win! " + userChoice + "beats" + getComputerChoice)
            roundResult.textContent = "you win!";
            userScore++
            playerCurrentScore.textContent = userScore
        } else if ((userChoice == "scissors") && (getComputerChoice == "rock")) {
            //alert("try again! " + userChoice + " loses to " + getComputerChoice)
            roundResult.textContent = "try again!";
            computerScore++
            computerCurrentScore.textContent = computerScore
        } else if ((userChoice == "paper") && (getComputerChoice == "scissors")) {
            //alert("try again! " + userChoice + " loses to " + getComputerChoice)
            roundResult.textContent = "try again!";
            computerScore++
            computerCurrentScore.textContent = computerScore
        } else if (userChoice == getComputerChoice) {
            roundResult.textContent = "tie!";
        } if (roundResult.textContent == 'you win!') {
            roundResult.style.cssText = 'text-shadow: 0px 0px 10px green, 0px 0px 20px green, 0px 0px 40px green, 0px 0px 80px green';
        } else if (roundResult.textContent == "try again!") {
            roundResult.style.cssText = 'text-shadow: 0px 0px 10px red, 0px 0px 20px red, 0px 0px 40px red, 0px 0px 80px red';
        } else if (roundResult.textContent == "tie!") {
            roundResult.style.cssText = 'text-shadow: 0px 0px 10px yellow, 0px 0px 20px yellow, 0px 0px 40px yellow, 0px 0px 80px yellow';
        } if (userScore == 5 || computerScore == 5) {
            playerCurrentScore.textContent = userScore;
            computerCurrentScore.textContent = computerScore;
            blurAndPopup();
        }
    }
}

function blurAndPopup() {
    let blur = document.querySelector('.wrapper');
    blur.classList.toggle('active');
    let popup = document.querySelector('#popup');
    popup.classList.toggle('active');
    const restartButton = document.querySelector('#restart-button');
    const gameResult = document.querySelector('#game-result');
    const popupWindow = document.querySelector('#popup.active');
    if (userScore == 5) {
        gameResult.textContent = "you win!";
        popupWindow.style.cssText = "box-shadow: 0px 0px 10px rgb(88, 255, 88), 0px 0px 20px rgb(88, 255, 88), 0px 0px 40px rgb(88, 255, 88), 0px 0px 80px rgb(88, 255, 88); background-color: rgb(166, 255, 166)";
    }
    else if (computerScore == 5) {
        gameResult.textContent = "try again!";
        popupWindow.style.cssText = "box-shadow: 0px 0px 10px rgb(255, 97, 97), 0px 0px 20px rgb(255, 97, 97), 0px 0px 40px rgb(255, 97, 97), 0px 0px 80px rgb(255, 97, 97); background-color: rgb(255, 214, 214)";
    }
    restartButton.addEventListener("click", () => {
        userScore = 0;
        computerScore = 0;
        playerCurrentScore.textContent = userScore;
        computerCurrentScore.textContent = computerScore;
        roundResult.textContent = "";
        computerChoiceIcon.className = "";
        playerChoiceIcon.className = "";
    })
}


/* function game() { //this function defines game()
    
    //userWon and computerWon are defined outside of the loop
    //... they can't be defined inside the loop or they will be reset to 0 each round
    let winnerName //this is to output a winner at end of rounds
        
        let userChoice = 0  
        const winner = playRound(getComputerChoice, userChoice)
        if (winner == "user") {
            userScore++
        } else if (winner == "computer") {
            computerScore++
        }
        // }

        if (userScore > computerScore) { //if user has more wins, winnername is "You" etc.
            winnerName = "You"
        } else if (computerScore > userScore) {
            winnerName = "Computer"
        } else {
            winnerName = "No one"
        }
        alert(`your score is ${userScore}, and the computer's score is ${computerScore}. ${winnerName} won!`)
    } */
const roundResult = document.querySelector('#round-result');
const playerChoiceIcon = document.querySelector('#showUserChoice');
const computerChoiceIcon = document.querySelector('#showComputerChoice');
const playerCurrentScore = document.querySelector('#userScore');
const computerCurrentScore = document.querySelector('#computerScore');

const rockBtn = document.querySelector('#rock-button');
const paperBtn = document.querySelector('#paper-button');
const scissorsBtn = document.querySelector('#scissors-button');
rockBtn.addEventListener("click", () => {
    playRound('rock', computerHand());
})
paperBtn.addEventListener("click", () => {
    playRound('paper', computerHand());
})
scissorsBtn.addEventListener("click", () => {
    playRound('scissors', computerHand());
})