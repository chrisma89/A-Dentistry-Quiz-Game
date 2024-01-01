// Array of objects with quix questions
const quizQuestions = [

  {
    question : "How many sets of teeth does a human being have?",
    answers : ["One","Two","Three","Four"],
    correctAnswer : 1,
  },

  {
    question : "What is the total number of teeth in a primary dentition?",
    answers : ["20", "32","34","24"],
     correctAnswer : 0,
    
  },

  {question : "When does the first lower permanent molar tooth erupt?",
    answers : ["5-6 years","7-8 months","5-6 months","6-7 years"],
    correctAnswer : 0,
  },

  {
    question : "How many roots does an upper central incisor tooth have?",
    answers : ["Two","One","Four","Three"],
    correctAnswer : 1
    

  },

  {
    question: "How many teeth does the secondary dentition contain?",
    answers : ["20", "34","30","32"],
    correctAnswer : 3,
  }
]

// start button linked to script.js and landing page contents display set to none

  const start = document.querySelector("#start")
  start.addEventListener("click", quizStart)
  let questionsIndex = 0;
  let timerInterval = 0;



function quizStart () {
  setTime()
  const startScreen = document.querySelector("#start-screen")
  startScreen.style.display = "none";
  quizDisplay()
  quizChoices()
 }
  
  
  
  const questions = document.querySelector("#questions")
  questions.style.display = "block";

 function quizDisplay(){
    const startQuiz = document.querySelector("#question-title")
    startQuiz.textContent = quizQuestions[questionsIndex].question

    // quizChoices()

    }
  



function quizChoices (){  
  const startChoices = document.querySelector(".choices")
  startChoices.innerHTML ="";
  // const button = document.createElement("button")
  
  for (let answerIndex=0; answerIndex < 4; answerIndex++){
 

    const button = document.createElement("button")
 
    button.textContent = quizQuestions[questionsIndex].answers[answerIndex]
    // button.className = "button"
    button.addEventListener("click", function(){userClick(answerIndex)})
    startChoices.appendChild(button)
    
  }
  
}

// timer

function setTime() {
let secondsLeft = 75;
  const timerInterval = setInterval(function(){
    secondsLeft --;
    const timer = document.querySelector(".timer");
    timer.textContent= secondsLeft;

    if(secondsLeft === 0){
      clearInterval(timerInterval)
      questions.style.display = "none";
      const gameEnd = document.querySelector("#end-screen")
      gameEnd.style.display="block";
    }

  },1000)
  
};

function userClick(answerIndex){
  if(answerIndex === quizQuestions[questionsIndex].correctAnswer){
    alert("That is correct")
  }
  else {
    alert("Wrong answer")
  }
 questionsIndex++
 if (questionsIndex < quizQuestions.length){
  quizDisplay()
  quizChoices()
}
else{
  clearInterval(timerInterval)
      questions.style.display = "none";
      const gameEnd = document.querySelector("#end-screen")
      gameEnd.style.display="block";
}
}

// 


