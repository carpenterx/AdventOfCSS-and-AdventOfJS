const game = document.getElementById("game")
const options = document.getElementsByClassName("option")

for (let i = 0; i < options.length; i++) {
    options[i].addEventListener("click", ShowResult)
}

function ShowResult(e) {
    console.log(e.target.dataset.selection)
}