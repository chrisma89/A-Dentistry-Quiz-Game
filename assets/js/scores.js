// Storing user initials and displaying high scores

// const submitBtn = document.querySelector("#submit")
// const finalScore = document.querySelector("#final-score");

// submitBtn.addEventListener("click", function(event){
//   event.preventDefault();

//   let initials = document.querySelector("#initials").value
//   let final_score = finalScore.textContent
//   localStorage.setItem("initials",JSON.stringify(initials))
//   localStorage.setItem("final-score", JSON.stringify(final_score))
//   window.location.href = "highscores.html";
//   }
// )

function displayHighscores(){

  
  const highScoreslist = document.querySelector("#highscores")
  const userHighscores = JSON.parse(localStorage.getItem("final-score"))
  const userInitials = JSON.parse(localStorage.getItem("initials"))
const initials = document.createElement("li")
highScoreslist.appendChild(initials)
  
  // initials.textContent = userInitials
  initials.textContent = userInitials +" - "+ userHighscores;


}

document.addEventListener("DOMContentLoaded", (event) => {
  displayHighscores();
}
)



