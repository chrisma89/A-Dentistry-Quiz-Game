// Array of objects with quix questions
const quizQuestions = [

  {
    questionOne : "How many sets of teeth does a human being have?",
    answersA : "One",
    answersB : "Two",
    answersC : "Three",
    answersD : "Four"
  },

  {
    questionTwo : "What is the total number of teeth in a primary dentition?",
    answersA : "20",
    answersB : "32",
    answersC : "34",
    answersD : "24"
  },

  {questionThree : "When does the first lower permanent molar erupt?",
    answersA : "5-6 years",
    answersB : "7-8 months",
    answersC : "5-6 months",
    answersD : "6-7 years"
  },

  {
    questionFour : "How many roots does a upper central incisor have?",
    answersA : "One",
    answersB : "Two",
    answersC : "Three",
    answersD : "Four"
  },

  {
    questionFive : "How many teeth does a secondary dentition contain?",
    answersA : "20",
    answersB : "32",
    answersC : "28",
    answersD : "34"
  }
]
  const start = document.querySelector("#start")
  start.addEventListener("click", quizStart)
function quizStart () {
  const wrapper = document.querySelector(".wrapper")
  wrapper.style.display = "none";
  // for (let i = 0; i < quizQuestions.length; i++) {
  //   // console.log(quizQuestions[0].questionOne)
  //   startQuiz.textContent = quizQuestions[0].questionOne
    
  // }

}



