var leaderboard = document.getElementById("scoresList");

var highScores = JSON.parse(localStorage.getItem("allUsers")) || [];
console.log(highScores);
for (var i=0; i < highScores.length; i++) {
    var userLi = document.createElement("li").innerHTML=highScores[i].name + " - " + highScores[i].score + "    ;    ";
    scoresList.append(userLi);
};


