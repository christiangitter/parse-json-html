//start fetch-request
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
//end fetch-request
//Aufruf der Funktion appendData
function appendData(data) {
//loading-div wird zugewiesen
var loading = document.getElementById("loading")
var mainContainer = document.getElementById("topbeer");
for (var i = 0; i < data.length; i++) {
    //name the variables
     var platz = i+1;
     var platzdiv = document.createElement("div");
     var div = document.createElement("div");
     var herkunft = document.createElement("div");
     //fill the vars with content
     platzdiv.innerHTML =  `Platz ${platz}: ` + '<br>';
     div.innerHTML = data[i].bier + '<br>';
     herkunft.innerHTML = data[i].herkunft + '<br>' + '<br>';
     //style the divs
     div.style.fontSize = "large"
     platzdiv.style.fontSize= "small";
     platzdiv.style.fontSize = 200;
     herkunft.style.fontWeight = 200;
     herkunft.style.fontSize = "medium";
     //add the divs to the mainContainer
    mainContainer.appendChild(platzdiv); 
    mainContainer.appendChild(div);
    mainContainer.appendChild(herkunft);
    //wenn die Daten gefetched wurden, wird das loading-div ausgeblendet 
    loading.style.display = "none"
  }
}