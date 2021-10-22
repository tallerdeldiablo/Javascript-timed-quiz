var startEL = document.querySelector("#start");
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
  choice1: " script ",  choice2: "js",  choice3:"javascript",
  answer: 1
}, { question3: "What does Javascript do?",   choice1: "Create Structure", choice2: "Stilize the web", choice3:"Increase interactivity",
  answer: 3
}

];

function setCounterText() {
  countEl.textContent = count;
}

question1EL.addEventListener("click", function() {
  count++;
  setCounterText();

});

question2EL.addEventListener("click", function() {
  
    count++;
    checkanswer();
    setCounterText();

});
question3EL.addEventListener("click", function() {
  
  count++;
  checkanswer();
  setCounterText();

});
question4EL.addEventListener("click", function() {
  
  count++;
  checkanswer();
  setCounterText();

});


startEL.addEventListener("click", function(e) {
  element=e.target;
 element.remove();
    setCounterText();

});