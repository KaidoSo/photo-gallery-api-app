var searchForm = document.querySelector("#search-form");
var mainContainer = document.getElementById("main-container");
searchForm.addEventListener("submit", function(e){
    e.preventDefault();
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
                var photoContainer = document.createElement("div");
                photoContainer.classList.add("photo-container");
                photoContainer.innerHTML = `
                    <img src=${photo.src.large}>
                    <div id="author">Author: <a href="${photo.photographer_url}" target="_blank">${photo.photographer}</a></div>
                    <div id="photo-url"><a href="${photo.url}" target="_blank">Photo URL</a></div>
                `;
                mainContainer.appendChild(photoContainer);
            });
        }
    };
    var textValue = document.querySelector("#search-bar").value;
    xhttp.open("GET", `https://api.pexels.com/v1/search?query=${textValue}`, true);
    xhttp.setRequestHeader("Authorization", "563492ad6f91700001000001463302576bfb4b409abf6865fe9ad776");
    xhttp.send();
});


