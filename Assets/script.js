console.log("hello world")

//build array of objects
//question and array of answers
//top right countdown timer - set intervals
var timeEl = document.getElementById("timer");

var secondsLeft = 90;

timeEl.addEventListener("click", function(event) {
    event.preventDefault();
    function setTime() {
        var myInterval = setInterval(function(){
            console.log("Every second this should run!");
            secondsLeft--;
            timeEl.textContent = secondsLeft + " seconds";

            if (secondsLeft === 0 ){
            clearInterval(myInterval);
            sendMessage();
            };
        }, 100)
    }
    setTime();
});

function sendMessage() {
  timeEl.textContent = "TIMES UP!!!";
};


//use the questions and answers on the gif
//Unit 04 Web APIs HW Rubric    
    //Deployment
    //gotta have a button - start button displays questions
    //countdown timer starts when quiz begins
    //game ends when all questions have been answered or time = 0 
    //after game ends, user can save their initials and score to highscore view using local storage