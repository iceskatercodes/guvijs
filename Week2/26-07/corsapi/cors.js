var request = new XMLHttpRequest();
var url =  "https://cors-anywhere.herokuapp.com/https://api.domainsdb.info/v1/domains/search?domain=facebook&zone=com"
request.open("GET",url,true);
request.send();
request.onload = function() {
  // Begin accessing JSON data here
var data = JSON.parse(this.response)
document.getElementById('item').innerHTML = JSON.stringify(data);
console.log(data);
}