const tipAmount = document.getElementById("tip-amount")
const totalPerPerson = document.getElementById("total-per-person")
const billAmount = document.getElementById("bill-amount")
const people = document.getElementById("people")
const calculateBtn = document.getElementById("calculate-btn")

calculateBtn.addEventListener("click", CalculateTip)

function CalculateTip() {
    let billValue = Number(billAmount.value)
    let peopleValue = Number(people.value)
    if (!isNaN(billValue) && Number.isInteger(peopleValue))
    {
        let tipPercent = document.querySelector('input[name="percent"]:checked').value
        let tip = tipPercent * billAmount.value / 100
        tipAmount.innerText = RoundUpToTwoDecimalPlaces(tip)
        let perPerson = (billValue + tip) / peopleValue
        totalPerPerson.innerText = RoundUpToTwoDecimalPlaces(perPerson)
    }
}

function RoundUpToTwoDecimalPlaces(number) {
    return Math.ceil((number + Number.EPSILON) * 100) / 100
}