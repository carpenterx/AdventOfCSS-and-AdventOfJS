const verifyBtn = document.getElementById("verify")
const digit1 = document.getElementById("digit-1")
const digit2 = document.getElementById("digit-2")
const digit3 = document.getElementById("digit-3")
const digit4 = document.getElementById("digit-4")
let correctCode = "1234"

verifyBtn.addEventListener("click", VerifyCode)
digit1.addEventListener('paste', (event) => {
    let paste = (event.clipboardData || window.clipboardData).getData('text')
    paste = paste.toUpperCase()

    digit1.value = paste[0]
    digit2.value = paste[1]
    digit3.value = paste[2]
    digit4.value = paste[3]
    digit4.focus()
    VerifyCode()

    event.preventDefault()
})

digit1.addEventListener("input", function() { MoveToElement(digit2) } )
digit2.addEventListener("input", function() { MoveToElement(digit3) } )
digit3.addEventListener("input", function() { MoveToElement(digit4) } )
digit4.addEventListener("input", VerifyCode)

digit1.addEventListener("click", SelectContent)
digit2.addEventListener("click", SelectContent)
digit3.addEventListener("click", SelectContent)
digit4.addEventListener("click", SelectContent)

function MoveToElement(element)
{
    element.focus()
    SelectAll(element)
}

function SelectContent(e) {
    SelectAll(e.target)
}

function SelectAll(element) {
    element.setSelectionRange(0, element.value.length)
}

function VerifyCode()
{
    let inputCode = digit1.value + digit2.value + digit3.value + digit4.value
    if (inputCode == correctCode)
    {
        alert("Correct!")
    }
    else
    {
        alert(`Your code (${inputCode}) is wrong!`)
    }
}