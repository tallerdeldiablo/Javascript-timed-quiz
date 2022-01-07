var timerEl = document.getElementById("time");
var messageEl = document.getElementById("game-over");
var startEl = document.getElementById("myBtn");

var lapreguntaEl = document.querySelector("welcome");
var questEl = document.getElementById("question");
var secondquestDivEl = document.getElementById("#secondQues");

var firstdivEl = document.getElementById("first-screen");

var wrong = 1;
var score = 0;
var questionnumber = 0;

//,"What does Javascript"]
//let questions = [question1, "Inside which HTML element do we put the JavaScript?","What does Javascript"]

let questionsArray = [
  {
    question: " Q 1  - What is Javascript?",
    choice1: "A programming language",
    choice2: " a style sheet language ",
    choice3: "HyperText markup language",
    answer: "1",
  },
  {
    question: " Q -2 Inside which HTML element do we put the JavaScript?",
    choice1: "script",
    choice2: "js",
    choice3: "javascript",
    answer: "1",
  },

  {
    question: " Q - 3 What does Javascript do?",
    choice1: "Create Structure",
    choice2: "Stilize the web",
    choice3: "Increase interactivity",
    answer: "3 ",
  },
  {
    question: " Q - 4 Commonly used data types DO NOT include:",
    choice1: "strings",
    choice2: "booleans",
    choice3: "alerts",
    answer: "3",
  },
];

function selectedchoice(choice) {}
//Timer

function countdown() {
  var timeLeft = 40;

  var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timerEl.textContent = timeLeft;
      timeLeft -= wrong;

      score = timeLeft;
    } else if (timeLeft >= 0) {
      clearInterval(timeInterval);
      timerEl.textContent = "0 Time over";
      end();
    }
  }, 1000);
}

startEl.addEventListener("click", function () {
  start();
  countdown();
});

//*-------clear html
function start() {
  var myobj = document.getElementById("myBtn");

  //delete START BUTTON
  myobj.remove();

  var ques = 0;
  // call funtion --> render question/choices
  renderQ(ques);
}
function renderQ(indexQ) {
  document.getElementById("question").innerHTML =
    "#" + indexQ + questionsArray[indexQ].question;

  var choicesbtns = document.getElementById("choices");

  choicesbtns.innerHTML = ` <button id="btnQuestion3" onclick="selectedanswer('1',${indexQ})">${questionsArray[indexQ].choice1}</button>`;
  choicesbtns.innerHTML += ` <button id="btnQuestion3" onclick="selectedanswer('2',${indexQ})">${questionsArray[indexQ].choice2}</button>`;
  choicesbtns.innerHTML += ` <button id="btnQuestion3" onclick="selectedanswer('3',${indexQ})">${questionsArray[indexQ].choice3}</button>`;
}

function selectedanswer(ch, indexQ) {
  console.log(ch);
  console.log(indexQ);
  if (ch == questionsArray[indexQ].answer) {
    const correct = 0;
    console.log("correct");
  } else {
    const correct = 1;

    console.log(" No correct");
  }
  indexQ++;
  revealtext(indexQ);
}
function revealtext(indexQ) {
  if (indexQ < questionsArray.length) {
    console.log(questionsArray.length);
    renderQ(indexQ);
    console.log("got to next question");
  } else {
    end();
    console.log("end quiz");
  }
}

//end  First Question

function end() {
  document.getElementById("time").remove();

  document.getElementById("card-contents").remove();

  // Creating the form
  document.getElementById("finalForm").innerHTML += `<form action="">
    <label for="fname"> Save your score  </label><br>
    <input type="text" id="fname" name="fname" value="Initials"><br>
    <label for="lname">Score:</label><br>
    ${score}<br><br>
    <input type="submit" value="Submit"
  </form>`;
  // clearInterval(timeInterval);
}
//   //inicio

//   firstdivEl.addEventListener("click", function (event) {
//     var element = event.target;

//     if (element.matches("#btncorrect")) {
//       var state = element.getAttribute("color: green");
//       alert(" Third ");
//       element.closest("div").remove();
//     } else {
//       wrong = 5;
//       element.closest("div").remove();
//       alert(" WRONG ");
//     }
//   });
//   return;
// }
