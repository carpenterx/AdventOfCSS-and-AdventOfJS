const tabs = document.querySelectorAll(".tab-content")
const titles = document.querySelectorAll(".section-title")

const startingIndex = 0


for (let i = 1; i < tabs.length; i++) {
    tabs[i].style.display = "none"
}

for (let i = 0; i < titles.length; i++) {
    titles[i].addEventListener("click", function () {ShowInfo(i) })
}

ShowInfo(startingIndex)

function ShowInfo(infoIndex) {
    for (let i = 0; i < tabs.length; i++) {
        if (i == infoIndex)
        {
            tabs[i].style.display = "flex"
            titles[i].parentElement.classList.add("selected")
        } else {
            tabs[i].style.display = "none"
            titles[i].parentElement.classList.remove("selected")
        }
    }
}