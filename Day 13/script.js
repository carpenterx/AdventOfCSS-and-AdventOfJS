const container = document.getElementById("container")
const elgatoModal = document.getElementById("elgato-modal")
const circle = document.getElementById("circle")
// const span = document.getElementsByClassName("close")[0]
const modalClose = document.getElementById("modal-close")

// When the user clicks the button, open the modal 
circle.onclick = ShowModal

modalClose.onclick = HideModal

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == elgatoModal) {
        HideModal()
    }
}

function ShowModal() {
    elgatoModal.style.display = "flex"
    container.classList.add("blur")
}

function HideModal() {
    elgatoModal.style.display = "none"
    container.classList.remove("blur")
}