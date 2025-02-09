function playRockPaperScissors() {
    let userChoice = prompt("Enter rock, paper, or scissors:").toLowerCase();
    let choices = ["rock", "paper", "scissors"];
    
    if (!choices.includes(userChoice)) {
        alert("Invalid choice! Please enter rock, paper, or scissors.");
        return;
    }
    
    let computerChoice = choices[Math.floor(Math.random() * 3)];
    alert(`Computer chose ${computerChoice}`);
    
    if (userChoice === computerChoice) {
        alert("It's a tie!");
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "scissors" && computerChoice === "paper") ||
        (userChoice === "paper" && computerChoice === "rock")
    ) {
        alert("You win!");
    } else {
        alert("Computer wins!");
    }
}

playRockPaperScissors()