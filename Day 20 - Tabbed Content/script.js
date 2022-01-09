const tabs = document.querySelectorAll(".tab-content")
const titles = document.querySelectorAll(".section-title")

const startingIndex = 2

for (let i = 0; i < titles.length; i++) {
    titles[i].addEventListener("click", function () { ShowInfo(i) })
}

let startingId = titles[startingIndex].getAttribute("for")
let startingInput = document.getElementById(startingId)
startingInput.checked = true
ShowInfo(startingIndex)

function ShowInfo(infoIndex) {
    for (let i = 0; i < tabs.length; i++) {
        if (i == infoIndex)
        {
            tabs[i].style.display = "flex"
        } else {
            tabs[i].style.display = "none"
        }
    }
}