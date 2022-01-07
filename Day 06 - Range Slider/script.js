// alert("yo")
const dollarAmmount = document.getElementById("dollar-ammount")
const priceRange = document.getElementById("price-range")
const pinkColor = getComputedStyle(document.documentElement).getPropertyValue('--pink')
const grayColor = getComputedStyle(document.documentElement).getPropertyValue('--progress-gray')

UpdateDollarAmmount()
priceRange.addEventListener("input", UpdateDollarAmmount)
// background: linear-gradient(to right, #008000 0%, #008000 50%, #ffffff 50%, #ffffff 100%);
// style.background = prefixes[i] + 'linear-gradient(#000000, #ffffff)';
function UpdateDollarAmmount() {
    let ammount = parseFloat(priceRange.value)
    let output;
    if (Number.isInteger(ammount))
    {
        output = ammount.toFixed(0)
    }
    else
    {
        output = ammount.toFixed(2)
    }
    dollarAmmount.innerText = output
    //let percentage = priceRange.max / ammount
    UpdateBackground(ammount)
}

function UpdateBackground(percentage) {
    priceRange.style.background = `linear-gradient(to right, ${pinkColor} 0%, ${pinkColor} ${percentage}%, ${grayColor} ${percentage}%, ${grayColor} 100%)`
}