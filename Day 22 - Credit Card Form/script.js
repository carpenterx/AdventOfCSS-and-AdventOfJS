// American Express cards always begin with the number 3- more specifically 34 or 37
// Visa cards begin with the number 4.
// Mastercards start with the number 5.
// Discover Cards begin with the number 6.

const card = document.getElementById("card")

const creditCardNumber = document.querySelector(".credit-card-number")
const creditCardNumberInput = document.getElementById("card-number-input")

const creditCardName = document.querySelector(".credit-card-name")
const creditCardNameBack = document.querySelector(".credit-card-name-back")
const creditCardNameInput = document.getElementById("card-name-input")

const creditCardCCVBack = document.querySelector(".credit-card-ccv-back")
const creditCardCCVInput = document.getElementById("ccv-input")

const creditCardExpiration = document.querySelector(".credit-card-expiration")
const expirationMonthInput = document.getElementById("expiration-month-input")
const expirationYearInput = document.getElementById("expiration-year-input")

creditCardNumberInput.addEventListener("keyup", UpdateCardData)
creditCardNameInput.addEventListener("keyup", UpdateCardNameText)
creditCardCCVInput.addEventListener("keyup", UpdateCardCCVText)

expirationMonthInput.addEventListener("change", UpdateCardExpirationText)
expirationYearInput.addEventListener("change", UpdateCardExpirationText)

creditCardCCVInput.addEventListener("focus", FlipCard)
creditCardCCVInput.addEventListener("blur", FlipCardBack)

function UpdateCardData() {
    UpdateCardImage(creditCardNumberInput.value[0])
    UpdateCardNumberText()
}

// function UpdateCardText() {
//     UpdateCardNumberText()
//     UpdateCardNameText()
//     UpdateCardExpirationText()
//     UpdateCardCCVText()
// }

function UpdateCardNumberText() {
    // console.log(creditCardNumberInput.value.length)
    creditCardNumberInput.value = creditCardNumberInput.value.replace(/[^0-9\ ]/, "")
    // creditCardNumberInput.value = creditCardNumberInput.value.replace("-", " ")
    if (creditCardNumberInput.value.length == 4 || creditCardNumberInput.value.length == 9 || creditCardNumberInput.value.length == 14) {
        creditCardNumberInput.value += " "
    }
    
    creditCardNumber.innerText = creditCardNumberInput.value
}

function UpdateCardNameText() {
    creditCardName.innerText = creditCardNameInput.value
    creditCardNameBack.innerText = creditCardNameInput.value
}

function UpdateCardExpirationText() {
    creditCardExpiration.innerText = `${expirationMonthInput.value}/${expirationYearInput.value}`
}

function UpdateCardCCVText() {
    creditCardCCVBack.innerText = creditCardCCVInput.value
}

function UpdateCardImage(startingInput) {
    switch (startingInput) {
        case "3":
            card.classList.add("american")
            card.classList.remove("mastercard")
            card.classList.remove("discover")
            break
        case "5":
            card.classList.remove("american")
            card.classList.add("mastercard")
            card.classList.remove("discover")
            break
        case "6":
            card.classList.remove("american")
            card.classList.remove("mastercard")
            card.classList.add("discover")
            break;
        default:
            card.classList.remove("american")
            card.classList.remove("mastercard")
            card.classList.remove("discover")
    }
}

function FlipCard() {
    card.classList.add("flip")
}

function FlipCardBack() {
    card.classList.remove("flip")
}