// build array of objects
var questions =
[
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: [
            {text: "<script>", correct: true }, 
            {text: "<javascript>", correct: false },
            {text: "<js>", correct: false }, 
            {text: "<style>", correct: false }
        ]
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        answers: [
            {text: "alertWorld('Hello World')", correct: false }, 
            {text: "msg('Hello World')", correct: false }, 
            {text: "alert('Hello World')", correct: true }, 
            {text: "alertBox('Hello World')", correct: false }
        ]
    },
    {
        question: "How to write an IF statement in JavaScript?",
        answers: [
            {text: "maybeIf (i == 5)", correct: false }, 
            {text: "if i = 5", correct: false }, 
            {text: "if (i == 5)", correct: true }, 
            {text: "if i = 5 then", correct: false }
        ]
    },
    {
        question: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
        answers: [
            {text: "if (i <> 5)", correct: false }, 
            {text: "if (i != 5)", correct: true }, 
            {text: "if i =! 5 then", correct: false }, 
            {text: "if i <> 5", correct: false }
        ]
    },
    {
        question: "How does a FOR loop start?",
        answers: [
            {text: "for i = 1 to 5", correct: false }, 
            {text: "for (i <= 5; i++)", correct: true }, 
            {text: "for (i = 0; i <= 5)", correct: false }, 
            {text: "for (i = 0; i <= 5; i++)", correct: false }
        ]
    }
]

//question and array of answers
//top right countdown timer - set intervals
var startQuizEl = document.getElementById("timer");

var secondsLeft = 60;

startQuizEl.addEventListener("click", function(event) {
    event.preventDefault();
    function setTime() {
        var myInterval = setInterval(function(){
            console.log("Every second this should run!");
            secondsLeft--;
            startQuizEl.textContent = secondsLeft + " seconds";

            if (secondsLeft <= 0 ){
            clearInterval(myInterval);
            sendMessage();
            };
        }, 100)
    }
    setTime();

    document.getElementById("main-section").classList.remove("welcome");
    document.getElementById("main-section").classList.add("quiz");

    // for (i = 0; i < questions.length; i++){
        // var questions = questions[i].question;
        document.getElementById("message").innerHTML = questions[i];
        // var options = questions[i].choices;

    // }


});



function sendMessage() {
  startQuizEl.textContent = "TIMES UP!!!";
};


//use the questions and answers on the gif
//Unit 04 Web APIs HW Rubric    
    //Deployment
    //gotta have a button - start button displays questions
    //countdown timer starts when quiz begins
    //game ends when all questions have been answered or time = 0 
    //after game ends, user can save their initials and score to highscore view using local storage