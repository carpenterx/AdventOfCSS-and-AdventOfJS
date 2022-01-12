const toast = document.getElementById("toast")
const closeBtn = document.getElementById("close")

const popupTimeout = setTimeout(ShowPopup, 15000)
// clearTimeout(popupTimeout)

toast.addEventListener("click", HidePopup)


var func = function (e) {
    if (!e.toElement && !e.relatedTarget) {
        ShowPopup()
    }
}
const wrappedFunc = func.bind(this)
document.addEventListener("mouseout", wrappedFunc)

function HidePopup() {
    toast.classList.add("hide")
}

function ShowPopup() {
    toast.classList.remove("hide")
    document.removeEventListener("mouseout", wrappedFunc)
    clearTimeout(popupTimeout)
}