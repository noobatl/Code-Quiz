//start quiz button
var startButton = document.getElementById("start-btn");
//question container
var questionContainerEl = document.getElementById("question'container");
var questionEl = document.getElementById("question");
//button elements
var answerButtonsEl = document.getElementById("buttons");
//top right countdown timer
var timerEl = document.getElementById("timer");
var secondsLeft = 60;
//shuffle questions
let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener("click", setTime);
startButton.addEventListener("click", startQuiz);

function setTime() {
  var myInterval = setInterval(function() {
    console.log("Every second this should run!");
    secondsLeft--;
    timerEl.textContent = secondsLeft + " seconds";
    if (secondsLeft <= 0) {
      clearInterval(myInterval);
      sendMessage();
    }
  }, 100);
}

function startQuiz() {
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  document.getElementById("main-section").classList.remove("welcome");
  document.getElementById("main-section").classList.add("quiz");
  setNextQuestion();
}

function setNextQuestion() {
  //   resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  //   btn.classList.add("hide");
  questionEl.innerText = question.question;
  question.answers.forEach(answer => {
    var button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsEl.appendChild(button);
  });
}

function selectAnswer(e) {
  var selectedButton = e.target;
  var correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonsEl.children).forEach(button => {
    setStatusClass(button, button.dataset.correct);
  });
  if (correct) {
    var q = document.getElementById("question-review")
    var w = document.createTextNode("You are Correct!");
    q.appendChild(w);
  } else {
    var q = document.getElementById("question-review")
    var w = document.createTextNode("You are Wrong!");
    q.appendChild(w);
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

function sendMessage() {
  timerEl.textContent = "TIMES UP!!!";
}

// timerEl.addEventListener("click", function(event) {

// });

//
//Code that did not work
//
// // for (i = 0; i < questions.length; i++){
//     // var questions = questions[i].question;
//     document.getElementById("message").innerHTML = questions[i];
//     // var options = questions[i].choices;
// startButton.classList.add("hide");
// // }
// questionContainerEl.classList.remove("hide");
//use the questions and answers on the gif
//Unit 04 Web APIs HW Rubric
//Deployment
//gotta have a button - start button displays questions
//countdown timer starts when quiz begins
//game ends when all questions have been answered or time = 0
//after game ends, user can save their initials and score to highscore view using local storage
// function resetState() {
//   clearStatusClass(document.body);
// //   nextButton.classList.add("hide");
//   while (answerButtonsEl.firstChild) {
//     answerButtonsEl.removeChild(answerButtonsEl.firstChild);
//   }
// }
// build array of objects
var questions = [
  {
    question: "Inside which HTML element do we put the JavaScript?",
    answers: [
      { text: "<script>", correct: true },
      { text: "<javascript>", correct: false },
      { text: "<js>", correct: false },
      { text: "<style>", correct: false }
    ]
  },
  {
    question: "How do you write 'Hello World' in an alert box?",
    answers: [
      { text: "alertWorld('Hello World')", correct: false },
      { text: "msg('Hello World')", correct: false },
      { text: "alert('Hello World')", correct: true },
      { text: "alertBox('Hello World')", correct: false }
    ]
  },
  {
    question: "How to write an IF statement in JavaScript?",
    answers: [
      { text: "maybeIf (i == 5)", correct: false },
      { text: "if i = 5", correct: false },
      { text: "if (i == 5)", correct: true },
      { text: "if i = 5 then", correct: false }
    ]
  },
  {
    question:
      "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
    answers: [
      { text: "if (i <> 5)", correct: false },
      { text: "if (i != 5)", correct: true },
      { text: "if i =! 5 then", correct: false },
      { text: "if i <> 5", correct: false }
    ]
  },
  {
    question: "How does a FOR loop start?",
    answers: [
      { text: "for i = 1 to 5", correct: false },
      { text: "for (i <= 5; i++)", correct: true },
      { text: "for (i = 0; i <= 5)", correct: false },
      { text: "for (i = 0; i <= 5; i++)", correct: false }
    ]
  }
];
