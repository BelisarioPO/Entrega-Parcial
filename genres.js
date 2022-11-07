let url_Genres = "https://api.themoviedb.org/3/genre/movie/list?api_key=5b2a5c18601c66bcba1ae9c824344c2b&language=en-US"
fetch(url_Genres)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        let Genres_html = document.querySelector(".Genres")
        let Generos = ''
        for (let i = 0; i < data.genres.length; i++) {
            Generos += `<li>
            <a href="detail-genres.html?id=${data.genres[i].id}">${data.genres[i].name}</a> </li>`

        }
        Genres_html.innerHTML = Generos
        console.log(Generos)
    
    })