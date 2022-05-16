var leaderboard = document.getElementById("leaderboard");

var highScores = JSON.parse(localStorage.getItem("allUsers")) || [];
console.log(highScores);
for (var i=0; i < highScores.length; i++) {
    var value = highScores.values(highScores[i]);
    console.log(value);
    var userLi = document.createElement("li").innerHTML=value;
    userLi.className="scores";
    console.log(userLi);
    leaderboard.append(userLi);
}


