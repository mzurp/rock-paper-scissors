let humanScore = 0;
let computerScore = 0;

const results = document.querySelector("#results");
const score = document.querySelector("#score");

//Función para elegir una opción
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        return "piedra";
    } else if (randomNumber === 1) {
        return "papel";
    } else {
        return "tijeras";
    }
}

function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
        results.textContent =
            `¡Empate! Ambos eligieron ${humanChoice}`;
    } else if (
        (humanChoice === "piedra" && computerChoice === "tijeras") ||
        (humanChoice === "papel" && computerChoice === "piedra") ||
        (humanChoice === "tijeras" && computerChoice === "papel")
    ) {
        humanScore++;

        results.textContent =
            `¡Ganaste! ${humanChoice} vence a ${computerChoice}`;
    } else {
        computerScore++;

        results.textContent =
            `¡Perdiste! ${computerChoice} vence a ${humanChoice}`;
    }

    score.textContent =
        `Jugador: ${humanScore} | Computadora: ${computerScore}`;

    checkWinner();
}
//Función para comprobar el ganador ===5
function checkWinner() {
    if (humanScore === 3) {
        results.textContent = "🎉 ¡Has ganado la partida!";
        disableButtons();
    }

    if (computerScore === 3) {
        results.textContent = "💻 ¡La computadora ha ganado la partida!";
        disableButtons();
    }
}
//Función para desabilitar los botones una vez terminada la partida
function disableButtons() {
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
}
//Funcionamiento de los botones, evento de click
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

rockBtn.addEventListener("click", () => {
    playRound("piedra", getComputerChoice());
});

paperBtn.addEventListener("click", () => {
    playRound("papel", getComputerChoice());
});

scissorsBtn.addEventListener("click", () => {
    playRound("tijeras", getComputerChoice());
});