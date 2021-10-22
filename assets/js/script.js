var startEL = document.querySelector("#start");

var cardContentsEL = document.querySelector("#card-contents");
var question1EL = document.querySelector("#question1");
var question2EL = document.querySelector("#question2");
var question3EL = document.querySelector("#question3");
var question4EL = document.querySelector("#question4");
var timerEL = document.querySelector("#timer");
var countEl = document.querySelector("#count");
var count = 0;

const questions = [
  { 
  question1: "What is Javascript?",
  choice1: "A programming language",
  choice2: " a style sheet language ",
  choice3:"HyperText markup language",
  answer: "A programming language"
}, { 
  question2: "Inside which HTML element do we put the JavaScript?",
  choice1: ["script", "js","javascript"],
    answer: "script"
},
 { question3: "What does Javascript do?",  
  choice1: "Create Structure", 
  choice2: "Stilize the web",
   choice3:"Increase interactivity",
  answer: 3
}

];

function setCounterText() {
  countEl.textContent = count;
}

function startimer() 
{
  timerEL.textContent = "start the Timer";
}




cardContentsEL.addEventListener("click", function(e) {
  element=e.target;

 
  });

/*
  let a = document.querySelectorAll(".btns");
  console.log(a);
   array.forEach(a => {
     console.log(a.textContent)
   });


 
  count++;
  checkanswer();
  setCounterText();
*/

function createQuestion(indexQ) {
  
  for (var i = 0; i < 3; i++) {


    let buttonA = document.createElement("button");
    buttonA.setAttribute("class", "btnQuestion"); 
    buttonA.textContent = "questions creted in for";
    cardContentsEL.appendChild(buttonA);
 
    }
}


startEL.addEventListener("click", function(e) {
  element=e.target;
  element.remove();

  startimer();
  createQuestion();
 
});