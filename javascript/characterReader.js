var request = new XMLHttpRequest();
request.open("GET", "fortnights.json", false);
request.send(null)
var fortnights = JSON.parse(request.responseText);
