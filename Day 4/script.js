const keyDisplay = document.getElementById("key-display")
const keyPressed = document.getElementById("key-pressed")
const scoreDisplay = document.getElementById("score")
const buttons = document.querySelectorAll(".key")

//var lastKey

var lastJiggledKey
var timer = setInterval(JiggleRandomKey, 8000)
var score = 0

for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = e => {
        MouseClickHandler(e)
    }
}

document.addEventListener('keydown', (e) => {
    // keyDisplay.innerText = `Key pressed: ${e.code}`
    if (e.key === "Tab") {
        e.preventDefault()
    }

    CompareKeys(e.code)
    // if(lastJiggledKey != undefined)
    // {
    //     // keyPressed.innerText = `Key data: ${lastJiggledKey.getAttribute("data-key")}`
    //     if (e.code == lastJiggledKey.getAttribute("data-key")) {
    //         UnjiggleKey(lastJiggledKey)
    //         lastJiggledKey = undefined
    //         score++
    //     }
    //     else
    //     {
    //         score--
    //     }

    //     UpdateScore()
    // }
})

// document.addEventListener('keyup', (e) => {
//     // keyDisplay.innerText = `Key pressed: ${e.code}`
//     if(lastJiggledKey != undefined)
//     {
//         if (e.key == lastJiggledKey.getAttribute("data-key")) {
//             UnjiggleKey(lastJiggledKey)
//             lastJiggledKey = undefined
//         }
//     }
// })

function MouseClickHandler(e) {
    CompareKeys(e.target.getAttribute("data-key"))
    //keyPressed.innerText = e.target.getAttribute("data-key")
    // keyPressed.innerText = `Key clicked: ${e.target.getAttribute("data-key")}`
    //e.target.setAttribute("data-key", lastKey)

    // if (e.target.classList.contains("jiggle"))
    // {
    //     UnjiggleKey(e.target)
    // }
    // else
    // {
    //     JiggleKey(e.target)
    // }
}

function CompareKeys(keyCode) {
    if(lastJiggledKey != undefined)
    {
        // keyPressed.innerText = `Key data: ${lastJiggledKey.getAttribute("data-key")}`
        if (keyCode == lastJiggledKey.getAttribute("data-key")) {
            UnjiggleKey(lastJiggledKey)
            lastJiggledKey = undefined
            score++
        }
        else
        {
            score--
        }

        UpdateScore()
    }
}

function JiggleKey(key) {
    key.classList.add("jiggle")
}

function UnjiggleKey(key) {
    key.classList.remove("jiggle")
}

function JiggleRandomKey() {
    if (lastJiggledKey != undefined) {
        UnjiggleKey(lastJiggledKey)
        score--
        UpdateScore()
    }
    let randomKey = buttons[Math.floor(Math.random() * buttons.length)]
    lastJiggledKey = randomKey
    JiggleKey(randomKey)
}

function UpdateScore() {
    scoreDisplay.innerText = score
}