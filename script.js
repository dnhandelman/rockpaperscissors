game() //this function runs the game below

function game() { //this function defines game()
    let userWon = 0
    let computerWon = 0
    //userWon and computerWon are defined outside of the loop
    //... they can't be defined inside the loop or they will be reset to 0 each round
    let winnerName //this is to output a winner at end of rounds

    for (let i = 0; i < 5; i++) { //a loop of five rounds
        // anything in here runs 5 times
        //                  0 ,   1    , 2
        let options = ["rock", "paper", "scissors"];
        let getComputerChoice = options[Math.floor(Math.random() * options.length)];
        let userChoice = prompt("rock, paper, or scissors?").toLowerCase();
        const winner = playRound(getComputerChoice, userChoice)
        if (winner == "user") {
            userWon++
        } else if (winner == "computer") {
            computerWon++
        }
    }

    if (userWon > computerWon) { //if user has more wins, winnername is "You" etc.
        winnerName = "You"
    } else if (computerWon > userWon) {
        winnerName = "Computer"
    } else {
        winnerName = "No one"
    }

    alert(`hello, your score is ${userWon}, and the computer's score is ${computerWon}. ${winnerName} won!`)
}

function playRound(getComputerChoice, userChoice) {
    if (userChoice == getComputerChoice) {
        alert("A tie! I chose " + getComputerChoice + "too!")
        return "tie"
    } else if ((userChoice == "rock") && (getComputerChoice == "paper")) {
        alert("You lose. The computer chose " + getComputerChoice + " .")
        return "computer"
    } else if ((userChoice == "scissors") && (getComputerChoice == "paper")) {
        alert("You win! " + userChoice + " beats " + getComputerChoice)
        return "user"
    } else if ((userChoice == "paper") && (getComputerChoice == "rock")) {
        alert("You win! " + userChoice + " beats " + getComputerChoice)
        return "user"
    } else if ((userChoice == "rock") && (getComputerChoice == "scissors")) {
        alert("You win! " + userChoice + "beats" + getComputerChoice)
        return "user"
    } else if ((userChoice == "scissors") && (getComputerChoice == "rock")) {
        alert("You lose! " + userChoice + " loses to " + getComputerChoice)
        return "computer"
    } else if ((userChoice == "paper") && (getComputerChoice == "scissors")) {
        alert("You lose! " + userChoice + " loses to " + getComputerChoice)
        return "computer"
    } else {
        alert("please input rock, paper or scissors")   
    }
}



