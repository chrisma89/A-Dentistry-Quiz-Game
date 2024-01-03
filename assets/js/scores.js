
// dispalying highscores in descending order

let highScore= [];
function displayHighscores(){


  const highScoreslist = document.querySelector("#highscores")
  let highScore = JSON.parse(localStorage.getItem("highScore"))|| [];
 


highScoreslist.innerHTML = "";
const userHighscores = JSON.parse(localStorage.getItem("final_score"))
  const userInitials = JSON.parse(localStorage.getItem("initials"))

 

highScore.push({"initials" : userInitials, "final_score" : userHighscores}) 
highScore.sort(function(i, j){
    return j.final_score - i.final_score
  })

localStorage.setItem("highScore", JSON.stringify(highScore))


for (let i =0; i < highScore.length; i++){
  const displayscore = highScore[i];
  let initials = document.createElement("li") 
  initials.textContent = displayscore.initials + " - " + displayscore.final_score;

  highScoreslist.appendChild(initials)
  }
}


document.addEventListener("DOMContentLoaded", (event) => {
displayHighscores();
}
);


// Clear Scores 

const clearScore = document.querySelector("#clear")

clearScore.addEventListener("click", clear)

function clear(){
 localStorage.clear()
 
 const highScoreslist = document.querySelector("#highscores")

  highScoreslist.innerHTML= "";
  }




