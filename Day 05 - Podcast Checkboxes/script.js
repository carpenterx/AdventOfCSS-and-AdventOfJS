const checkboxesList = document.querySelectorAll("input[type=checkbox]")
const checkboxes = Array.from(checkboxesList)

var previousIndex = undefined

for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].onclick = e => {
        MouseClickHandler(e)
    }
}

function MouseClickHandler(e) {
    let checkbox = e.target
    let nodeIndex = checkboxes.indexOf(checkbox)
    if (checkbox.checked) {
        if (previousIndex < nodeIndex && previousIndex != undefined && e.getModifierState("Shift") == true) {
            CheckAllInRange(previousIndex, nodeIndex)
        }
        previousIndex = nodeIndex
    }
}

function CheckAllInRange(rangeStart, rangeEnd) {
    for (let i = rangeStart; i <= rangeEnd; i++) {
        checkboxes[i].checked = true
    }
}