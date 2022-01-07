const subHeadings = document.querySelectorAll("h3")
const toc = document.getElementById("toc")

var oldIndex = 0

GenerateTOC()

function GenerateTOC() {
    toc.innerHTML = ""
    for (let i = 0; i < subHeadings.length; i++) {
        let id = `subheading-${i}`
        subHeadings[i].id = id

        let li = document.createElement("li")
        if (i == 0) {
            li.classList.add("selected")
        }
        let a = document.createElement("a")
        a.href = "#" + id
        a.innerText = subHeadings[i].innerText
        li.appendChild(a)
        toc.appendChild(li)
    }
}

window.onscroll = GetScrollPosition

function GetScrollPosition() {
    var index = 0
    var negativeIndex = 0
    var newIndex
    var value = 9999
    var negativeValue = -9999
    var hasNegatives = false
    for (let i = 0; i < subHeadings.length; i++) {
        let elementRect = subHeadings[i].getBoundingClientRect()
        let topValue = Math.abs(elementRect.top)
        if (topValue < 0) {
            hasNegatives = true
        }
        if (hasNegatives) {
            if (topValue > negativeValue) {
                negativeValue = topValue
                negativeIndex = i
            }
        }
        if (topValue < value) {
            value = topValue
            index = i
        }
    }
    if (hasNegatives == true) {
        newIndex = negativeIndex
    } else {
        newIndex = index
    }
    if (newIndex != oldIndex) {
        console.log(`new heading: ${subHeadings[newIndex].innerText}`)
        for (let i = 0; i < toc.children.length; i++) {
        
            if (i == newIndex) {
                toc.children[i].classList.add("selected")
            } else {
                toc.children[i].classList.remove("selected")
            }
        }
        oldIndex = newIndex
    }
}