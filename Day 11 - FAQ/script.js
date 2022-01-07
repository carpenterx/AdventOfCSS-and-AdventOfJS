const questions = document.getElementsByClassName("question")

for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener("click", ToggleAnswer)
    
}

function ToggleAnswer(e) {
    e.target.classList.toggle("collapsed")
    var content = e.target.nextElementSibling;
    // if (content.style.display === "block") {
    //   content.style.display = "none";
    // } else {
    //   content.style.display = "block";
    // }

    if (content.style.maxHeight){
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
}