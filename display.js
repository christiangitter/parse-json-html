fetch('https://beerapilive.herokuapp.com/top5beers')
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
var mainContainer = document.getElementById("topbeer");
for (var i = 0; i < data.length; i++) {
    var div = document.createElement("div");
     div.innerHTML = 'Top 1: ' + data[i].bier + ' ' + data[i].herkunft;
    mainContainer.appendChild(div);
  }
}