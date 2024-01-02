function displayHighscores(){


  const highScoreslist = document.querySelector("#highscores")
  let highScore = JSON.parse(localStorage.getItem("highScore"))|| [];
  highScore.sort(function(i, j){
    return j.final_score - i.final_score
  })

// console.log(highScoreslist)
highScoreslist.innerHTML = "";
const userHighscores = JSON.parse(localStorage.getItem("final_score"))
  const userInitials = JSON.parse(localStorage.getItem("initials"))
// const initials = document.createElement("li")

  
  // initials.textContent = userInitials
 

highScore.push({"initials" : userInitials, "final_score" : userHighscores})

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

});


const clearScore = document.querySelector("#clear")

clearScore.addEventListener("click", clear)

function clear(){
 localStorage.clear()
 
 const highScoreslist = document.querySelector("#highscores")

  highScoreslist.innerHTML= "";
  
 
//  initials.textContent ="";
//  displayHighscores()
}




