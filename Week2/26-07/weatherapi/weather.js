// var request = new XMLHttpRequest();
var url_string = 'https://api.openweathermap.org/data/2.5/weather?q=chennai,ind&appid=da17c131445c45630bc0602185c70ae0';
// request.open("GET",url,true);
// request.send();
// request.onload = function() {
//   // Begin accessing JSON data here
// var data = JSON.parse(this.response)
// document.getElementById('item').innerHTML = JSON.stringify(data);
// console.log(data);
// }


fetch(url_string)
.then(res=>res.json())
.then(data=>document.getElementById('item').innerHTML = JSON.stringify(data))