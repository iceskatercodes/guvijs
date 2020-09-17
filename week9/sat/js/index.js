var div1 = document.createElement("div");
div1.setAttribute("class", "container");
document.body.append(div1);
var div2 = document.createElement("h3");
div2.innerHTML = "Quick Quiz";
div1.append(div2);
var div3 = document.createElement("button");
div3.setAttribute("class", "btn  custom");
div3.setAttribute("id", "play");
div3.setAttribute("onclick", "document.location='game.html'");
div3.innerHTML = "Play";
div1.append(div3);
var div5 = document.createElement("br");
div1.append(div5)
var div4 = document.createElement("button");
div4.setAttribute("class", "btn  custom");
div4.setAttribute("id", "highscores");
div4.setAttribute("onclick", "document.location='highscore.html'");
div4.innerHTML = "Highscores";
div1.append(div4);

