const validChoices = ["rock", "paper", "scissors"];

let rps = (choice) => {

    if (!validChoices.includes(choice)) {
        console.log(`${choice} is an invalid selection. Please choose between rock, paper, or scissors.`);
    return;
    }

    let computerChoice = validChoices[Math.floor(Math.random() * validChoices.length)];

    if (choice === computerChoice) {
        console.log(`It's a tie! You chose ${choice} and the computer chose ${computerChoice}.`);
    return;
    }

    if (choice === "rock" && computerChoice === "scissors"
        || choice === "scissors" && computerChoice === "paper"
        || choice === "paper" && computerChoice === "rock"
    ) {
        console.log(`You won! You chose ${choice} and the computer chose ${computerChoice}.`);
        return;
    }

     if (choice === "rock" && computerChoice === "paper"
        || choice === "scissors" && computerChoice === "rock"
        || choice === "paper" && computerChoice === "scissors"
    ) {
        console.log(`You lost! You chose ${choice} and the computer chose ${computerChoice}.`);
        return;
    }
}   