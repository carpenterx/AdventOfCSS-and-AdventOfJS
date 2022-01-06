const subHeadings = document.querySelectorAll("h3")
const toc = document.getElementById("toc")

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
    // console.log(window.scrollY)
    var index = 0
    var value = 9999
    for (let i = 0; i < subHeadings.length; i++) {
        let elementRect = subHeadings[i].getBoundingClientRect()
        let topValue = Math.abs(elementRect.top)
        if (topValue < value) {
            value = topValue
            index = i
        }
    }
    for (let i = 0; i < toc.children.length; i++) {
        if (i == index) {
            toc.children[i].classList.add("selected")
        } else {
            toc.children[i].classList.remove("selected")
        }
    }
}