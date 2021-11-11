
fetch("https://beer-live.p.rapidapi.com/top10beers", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "beer-live.p.rapidapi.com",
		"x-rapidapi-key": "6b5438322bmsh499cfcde3ebbe7fp11fabfjsn0a23997d94f6"
	}
})
    
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                appendData(data);
            })
            .catch(function (err) {
                console.log('error: ' + err);
            });


function appendData(data) {
//loading-div wird zugewiesen
var loading = document.getElementById("loading")
var mainContainer = document.getElementById("topbeer");
for (var i = 0; i < data.length; i++) {
    var platz = i+1;
    console.log(platz)
    var div = document.createElement("div");
     div.innerHTML = `Platz ${platz}: ` + data[i].bier + ' ' + 'aus ' + data[i].herkunft;
    mainContainer.appendChild(div);
    //wenn die Daten gefetched wurden, wird das loading-div ausgeblendet 
    loading.style.display = "none"
  }
}