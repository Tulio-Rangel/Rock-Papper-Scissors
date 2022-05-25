let userScore = 0;
let computerScore = 0;
const userScoreSpan = document.getElementById("userScoreID");
const computerScoreSpan = document.getElementById("computerScoreID");
const scoreBoardDiv = document.querySelector(".scoreBoard");
const resultDiv = document.querySelector(".result");
const rockDiv = document.getElementById("rock");
const papperDiv = document.getElementById("papper");
const scissorsDiv = document.getElementById("scissors");

const getComputerChoice = () => {
    const choices = ["Rock", "Papper", "Scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
};

const win = (userChoice, computerChoice) => {
    userScore++;
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore;
    resultDiv.innerHTML = userChoice + " Beats " + computerChoice + ". You Win!";
};

const lose = (userChoice, computerChoice) => {
    computerScore++;
    computerScoreSpan.innerHTML = computerScore;
    resultDiv.innerHTML = computerChoice + " Beats " + userChoice + ". You Lose!";
};

const draw = (userChoice, computerChoice) => {
    resultDiv.innerHTML = userChoice + " Ties With " + computerChoice + ". You Tie!"
};

const game = (userChoice) => {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice){
        case "RockScissors":
        case "PapperRock":
        case "ScissorsPapper":
            win(userChoice, computerChoice);
            break;
        case "RockPapper":
        case "PapperScissors":
        case "ScissordRock":
            lose(userChoice, computerChoice);
            break;
        case "RockRock":
        case "PapperPapper":
        case "ScissorsScissors":
            draw(userChoice, computerChoice);
            break;
    };
};

const main = () => {
    rockDiv.addEventListener("click", () => {
        game("Rock");
    });
    papperDiv.addEventListener("click", () => {
        game("Papper");
    });
    scissorsDiv.addEventListener("click", () => {
        game("Scissors");
    });
};

function getInputValue() {
    const input1 = document.getElementById('player1').value;
    const input2 = document.getElementById('player2').value;

    document.getElementById('userLabel').innerHTML = input1;
    document.getElementById('computerLabel').innerHTML = input2;
}

main();