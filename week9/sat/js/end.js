var div1 = document.createElement("div");
div1.setAttribute("class", "container");
document.body.append(div1);
var div2 = document.createElement("h3");
div2.setAttribute("class", "form-control");
div2.setAttribute("id", "score");
div1.append(div2);
var div3 = document.createElement("input");
div3.setAttribute("name", "username");
div3.setAttribute("id", "username");
div3.setAttribute("type", "text");
div3.setAttribute("placeholder", "username");
div1.append(div3);
var div_br = document.createElement("br");
div1.append(div_br);
var div4 = document.createElement("button");
div4.setAttribute("class", "btn  custom");
div4.setAttribute("id", "saveScoreBtn");
div4.setAttribute("type", "button");
div4.innerHTML = "Save"
div4.setAttribute("onclick", "savescore(document.getElementById('score').innerHTML)");
div1.append(div4);
var div_br = document.createElement("br");
div1.append(div_br);
var div5 = document.createElement("button");
div5.setAttribute("class", "btn  custom");
div5.setAttribute("id", "playagain");
div5.setAttribute("type", "button");
div5.setAttribute("onclick", "document.location='game.html'");
div5.innerHTML = "Play Again"
div1.append(div5);
var div_br = document.createElement("br");
div1.append(div_br);
var div6 = document.createElement("button");
div6.setAttribute("class", "btn  custom");
div6.setAttribute("id", "playagain");
div6.setAttribute("type", "button");
div6.setAttribute("onclick", "document.location='index.html'");
div6.innerHTML = "Go Home"
div1.append(div6);

var queryString = decodeURIComponent(window.location.search);
queryString = queryString.substring(1);
var queries = queryString.split("&");
document.getElementById('score').innerHTML = queries[0];