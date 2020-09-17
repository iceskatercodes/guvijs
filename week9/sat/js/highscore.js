var users = Object.entries(window.localStorage);
let max = 0;
var highScoreUser = null;
for (let i = 0; i < users.length; i++) {
    var val = parseInt(users[i][1]);
    console.log(val);
    if (val > max) {
        max = users[i][1];
        highScoreUser = users[i][0]
    }
}
document.getElementById("highscore").innerHTML = `${highScoreUser} - ${max}`;

var div1 = document.createElement("div");
div1.setAttribute("class", "container");
document.body.append(div1);
var div2 = document.createElement("h3");
div2.innerHTML = "High Score";
div1.append(div2);
var div3 = document.createElement("h2");
div3.setAttribute("id", "highscore");
div1.append(div3);
var div4 = document.createElement("button");
div4.setAttribute("class", "btn  custom");
div4.setAttribute("id", "goHome");
div4.setAttribute("type", "button");
div4.setAttribute("onclick", "document.location='index.html'");
div4.innerHTML = "Go Home";
div1.append(div4);