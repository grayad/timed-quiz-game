var startButton = document.getElementById("start-btn");
var welcomePage = document.getElementById("welcome-page");

var startGame = function () {
    console.log("started");
    startButton.classList.add("hide");
    welcomePage.classList.add("hide");
    
};

startButton.addEventListener("click", startGame);