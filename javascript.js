const validChoices = ["rock", "paper", "scissors"];

let rps = (choice) => {

    if (!validChoices.includes(choice)) {
        console.log(`${choice} is an invalid selection. Please choose between rock, paper, or scissors.`);
    return;
    }

    let computerChoice = validChoices[Math.floor(Math.random() * validChoices.length)];
}