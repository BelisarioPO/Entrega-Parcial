let url_Discover = "https://api.themoviedb.org/3/discover/movie?api_key=5b2a5c18601c66bcba1ae9c824344c2b&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=Horror&with_watch_monetization_types=flatrate"
fetch(url_Discover)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);








    })

















    .catch(function (error) {
        console.log("Los errores son" + error)
    })