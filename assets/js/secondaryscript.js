var scoreListEl = document.getElementById("scoresList");

// get user data from local storage and sort descending
let highScores = JSON.parse(localStorage.getItem("allUsers")) || [];
highScores = highScores.sort((a, b) => (a.score < b.score ? 1 : -1));

// create a list item for each user
for (var i = 0; i < highScores.length; i++) {
  var userLi = document.createElement("LI");
  var userHTML = document.createTextNode(
    highScores[i].name + " - " + highScores[i].score
  );
  userLi.appendChild(userHTML);
  scoreListEl.appendChild(userLi);
}
