const rangeId = "characters-range"
const charactersRange = document.getElementById(rangeId)
const refreshBtn = document.getElementById("refresh-btn")
const passwordField = document.getElementById("password")
const copyBtn = document.getElementById("copy")
const symbolsCheckbox = document.getElementById("symbols-checkbox")
const numbersCheckbox = document.getElementById("numbers-checkbox")
const lowercaseCheckbox = document.getElementById("lowercase-checkbox")
const uppercaseCheckbox = document.getElementById("uppercase-checkbox")
const similarCheckbox = document.getElementById("similar-checkbox")


const symbols = "`!@#$%^&*()_+[]\\;',./{}|:\"<>?=-"
const numbers = "0123456789"
const lowercase = "qwertyuiopasdfghjklzxcvbnm"
const uppercase = "QWERTYUIOPASDFGHJKLZXCVBNM"
const similar = "iILl1o0O"

const rangeLabel = document.querySelector(`label[for='${rangeId}']`)

refreshBtn.addEventListener("click", GeneratePassword)
copyBtn.addEventListener("click", CopyToClipboard)
charactersRange.addEventListener("input", UpdatePassword)
symbolsCheckbox.addEventListener("click", GeneratePassword)
numbersCheckbox.addEventListener("click", GeneratePassword)
lowercaseCheckbox.addEventListener("click", GeneratePassword)
uppercaseCheckbox.addEventListener("click", GeneratePassword)
similarCheckbox.addEventListener("click", GeneratePassword)

function UpdatePassword() {
    rangeLabel.innerText = `${charactersRange.value} characters`
    GeneratePassword()
}

function GeneratePassword() {
    let characters = charactersRange.value
    let password = ""
    var validCharacters = ""
    if (symbolsCheckbox.checked) {
        validCharacters += symbols
    }
    if (numbersCheckbox.checked) {
        validCharacters += numbers
    }
    if (lowercaseCheckbox.checked) {
        validCharacters += lowercase
    }
    if (uppercaseCheckbox.checked) {
        validCharacters += uppercase
    }
    if (similarCheckbox.checked) {
        for (let i = 0; i < similar.length; i++) {
            validCharacters = validCharacters.replace(similar[i], "")
        }
    }
    if (validCharacters.length > 0) {
        for (let i = 0; i < characters; i++) {
            password += validCharacters[Math.floor(Math.random() * validCharacters.length)]
        }
    }
    
    passwordField.innerText = password
}

function CopyToClipboard() {
    copyBtn.classList.add("copied")
    navigator.clipboard.writeText(passwordField.innerText)
    setTimeout(function() { ResetCopied() }, 2000);
}

function ResetCopied() {
    copyBtn.classList.remove("copied")
}