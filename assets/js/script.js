var index = 0;
var sec = 59;
var score = 0;
var timer;

// get HTML elements
var startButton = document.getElementById("start-btn");
var welcomePage = document.getElementById("welcome-page");
var quizEl = document.getElementById("quiz-container");
var questionEl = document.getElementById("question");
var answerBtns = document.getElementById("option-buttons");

var questions = [
  {
    question: "A JavaScript file has an extension of...",
    answers: [
      { text: ".Java", correct: false },
      { text: ".javascript", correct: false },
      { text: ".js", correct: true },
      { text: ".xml", correct: false },
    ],
  },
  {
    question:
      "Which of the following dialog boxes displays a message AND a data entry field?",
    answers: [
      { text: "alert()", correct: false },
      { text: "msg()", correct: false },
      { text: "confirm()", correct: false },
      { text: "prompt()", correct: true },
    ],
  },
  {
    question:
      "Which of the following events occurs when the user clicks on an HTML element?",
    answers: [
      { text: "onchange", correct: false },
      { text: "onclick", correct: true },
      { text: "onhover", correct: false },
      { text: "onupdate", correct: false },
    ],
  },
  {
    question: "How do you get the DOM element with id in JavaScript?",
    answers: [
      { text: "document.getElementById(...)", correct: true },
      { text: "document.innerHTML.getElementById(...)", correct: false },
      { text: "page.getElementById(...)", correct: false },
      { text: "window.getElementById(...)", correct: false },
    ],
  },
  {
    question:
      "Which of the following is used for assigning a value to a variable?",
    answers: [
      { text: "*", correct: false },
      { text: "=", correct: true },
      { text: "-", correct: false },
      { text: "x", correct: false },
    ],
  },
];

// display the quiz and questions
function startGame() {
  startButton.classList.add("hide");
  welcomePage.classList.add("hide");
  quizEl.classList.remove("hide");
  for (var i = 0; i < questions.length; i++) {
    resetState();
    showQuestion(questions[index]);
  }
}

function resetState() {
  while (answerBtns.firstChild) {
    answerBtns.removeChild(answerBtns.firstChild);
  }
}

function showQuestion(question) {
  questionEl.innerText = question.question;
  question.answers.forEach((answer) => {
    var button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    answerBtns.appendChild(button);
    button.onclick = function () {
      if (answer.correct) {
        score += 5;
        // create answer message to verify if correct/wrong
        let correctMsg = document
          .createElement("p")
          .innerHTML("Good job, that is correct!");
        quizEl.append(correctMsg);
      } else {
        (sec -= 10), alert("Wrong!");
      }
      if (index === 4) {
        userPrompt();
        return;
      }
      index++;
      startGame();
    };
  });
}

function userPrompt() {
  var totalScore = score;
  var userName = window.prompt(
    "All done! Your highscore is " +
      totalScore +
      " out of 25! Enter your name to save your score!"
  );
  var user = {
    name: userName,
    score: totalScore,
  };
  var allUsers = JSON.parse(localStorage.getItem("allUsers")) || [];
  allUsers.push(user);
  console.log(allUsers);
  localStorage.setItem("allUsers", JSON.stringify(allUsers));
}

// startButton.onclick = function() {
function startTimer() {
  var timer = setInterval(function () {
    document.getElementById("time").innerHTML = sec;
    sec--;
    if (sec < -1) {
      clearInterval(timer);
      alert("Out of time!");
      userPrompt();
    }
  }, 1000);
}

startButton.addEventListener("click", startGame);
startButton.addEventListener("click", startTimer);
