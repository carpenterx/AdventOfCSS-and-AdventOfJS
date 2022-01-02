const chooseScreen = document.getElementById("choose-screen")
const rockOption = document.getElementById("rock-option")
const paperOption = document.getElementById("paper-option")
const scissorsOption = document.getElementById("scissors-option")

const resultScreen = document.getElementById("result-screen")
const winBg = document.getElementById("win-bg")
const playerWin = document.getElementById("player-win")
const playerChoiceImg = document.getElementById("player-choice-img")
const computerWin = document.getElementById("computer-win")
const computerChoiceImg = document.getElementById("computer-choice-img")
const playAgainBtn = document.getElementById("play-again-btn")
const computerOptions = ["rock", "paper", "scissors"]

rockOption.addEventListener("click", ChooseRock)
paperOption.addEventListener("click", ChoosePaper)
scissorsOption.addEventListener("click", ChooseScissors)

playAgainBtn.addEventListener("click", PlayAgain)

function ChooseRock() {
    ChooseOption("rock")
}

function ChoosePaper() {
    ChooseOption("paper")
}

function ChooseScissors() {
    ChooseOption("scissors")
}

function ChooseOption(option) {
    playerChoiceImg.src = `images/${option}.png`
    playerChoiceImg.alt = option

    let computerOption = GetComputerOption()
    ComputeOption(computerOption)

    let result = DecideWinner(option, computerOption)
    DisplayWinner(result)
    
    chooseScreen.classList.add("hide")
    resultScreen.classList.remove("hide")
}

function GetComputerOption() {
    return computerOptions[Math.floor(Math.random() * computerOptions.length)]
}

function ComputeOption(option) {
    computerChoiceImg.src = `images/${option}.png`
    computerChoiceImg.alt = option
}

function DecideWinner(playerChoice, computerChoice) {
    if (playerChoice == computerChoice) {
        return "tie"
    } else if (playerChoice == "rock") {
        if(computerChoice == "paper") {
            return "lose"
        } else {
            return "win"
        }
    } else if (playerChoice == "paper") {
        if(computerChoice == "scissors") {
            return "lose"
        } else {
            return "win"
        }
    } else if (playerChoice == "scissors") {
        if(computerChoice == "rock") {
            return "lose"
        } else {
            return "win"
        }
    }
}

function DisplayWinner(result) {
    if (result == "win") {
        winBg.classList.remove("lose")
        playerWin.classList.remove("hide")
        computerWin.classList.add("hide")
    } else if (result == "lose") {
        winBg.classList.add("lose")
        playerWin.classList.add("hide")
        computerWin.classList.remove("hide")
    } else {
        winBg.classList.remove("lose")
        playerWin.classList.remove("hide")
        computerWin.classList.remove("hide")
    }
}

function PlayAgain() {
    chooseScreen.classList.remove("hide")
    resultScreen.classList.add("hide")
}


// for (let i = 0; i < options.length; i++) {
//     options[i].addEventListener("click", ShowResult)
// }

// function ShowResult(e) {
//     console.log(e.target.dataset.selection)
// }