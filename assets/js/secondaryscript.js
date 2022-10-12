var leaderboard = document.getElementById("scoresList");

let highScores = JSON.parse(localStorage.getItem("allUsers")) || [];
highScores = highScores.sort((a, b) => (a.score < b.score ? 1 : -1));
console.log(highScores);
for (var i = 0; i < highScores.length; i++) {
  var userLi = (document.createElement("li").innerHTML =
    highScores[i].name + " - " + highScores[i].score + "    ;    ");
  scoresList.append(userLi);
}
