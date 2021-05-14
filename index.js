var mainContainer = document.getElementById('main-container');

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var res = JSON.parse(xhttp.responseText);
        var photos = res.photos.map(function(photo){
            return photo;
            
        });
        
        mainContainer.innerHTML = "";
        photos.forEach(function(photo){
            console.log(photo);
        })
    }
};
xhttp.open("GET", "https://api.pexels.com/v1/search?query=people", true);
xhttp.setRequestHeader("Authorization", "563492ad6f91700001000001463302576bfb4b409abf6865fe9ad776");
xhttp.send();