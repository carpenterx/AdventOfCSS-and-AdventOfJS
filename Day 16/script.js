const stars = Array.from(document.querySelectorAll(".star"))
const resetBtn = document.getElementById("reset-btn")

var handlers

resetBtn.addEventListener("click", ResetRating)

ResetRating()

function InitializeStars()
{
    handlers = []
    for (let i = 0; i < stars.length; i++) {
        stars[i].addEventListener("mouseover", FillStars)
        stars[i].addEventListener("mouseout", EmptyStars)
        const boundFunc = SetRating.bind(this, i+1)
        handlers.push(boundFunc)
        stars[i].addEventListener("click", boundFunc)
    }
}

function ResetRating() {
    InitializeStars()
    EmptyStars()
}

function FillStars(e) {
    let index = stars.indexOf(e.target)
    for (let i = 0; i < stars.length; i++) {
        if (i <= index) {
            stars[i].classList.remove("empty")
        } else {
            stars[i].classList.add("empty")
        }
    }
}

function EmptyStars() {
    for (let i = 0; i < stars.length; i++) {
        stars[i].classList.add("empty")
    }
}

function SetRating(rating) {
    console.log("rating: " + rating)
    for (let i = 0; i < stars.length; i++) {
        stars[i].removeEventListener("mouseover", FillStars)
        stars[i].removeEventListener("mouseout", EmptyStars)
        stars[i].removeEventListener('click', handlers[i])
    }
    handlers = []
}