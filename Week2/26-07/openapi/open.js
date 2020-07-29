
var request = new XMLHttpRequest();
var url = 'https://dog.ceo/api/breeds/list/all'
request.open('GET', url, true);
request.send();
request.onload = function(){
   var data = JSON.parse(this.response);
console.log("data",data);
}