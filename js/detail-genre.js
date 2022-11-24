let queryString = location.search
let qsObj = new URLSearchParams(queryString)
let id = qsObj.get("id")



let url_Discover = `https://api.themoviedb.org/3/discover/movie?api_key=e3f1ae8bae04c04c63af7b6996decd02&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}&with_watch_monetization_types=flatrate`
fetch(url_Discover)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        let urlAppend = "https://image.tmdb.org/t/p/original"
        let index_genres_movie = document.querySelector(".listado-detail-genres")
        console.log(index_genres_movie)
        let section_genre_movie = ''

        for (let i = 0; i < data.results.length; i++) {

            section_genre_movie += `<li>
            <a href="detail-movie.html?id=${data.results[i].id}">
            <img src="${urlAppend + data.results[i].poster_path}" alt="" class="img-index">
            <p class="Pelis">${data.results[i].title}</p>
            </a>
    </li>`

        }
        index_genres_movie.innerHTML = section_genre_movie
    })
<<<<<<< HEAD
=======


>>>>>>> 417c41749cdced79c655eae3ac5331b6ac3e08ae
    .catch(function (error) {
        console.log("Los errores son" + error)
    })

//Verificacion de Barra de Busqueda

let formulario = document.querySelector(".formulario-busqueda")
let buscador = document.querySelector(".buscador")
let mensajeErrorBuscador = document.querySelector(".mensaje-error-buscador")

formulario.addEventListener("submit", function(e) {
    e.preventDefault()
    if (buscador.value.length == 0) {
        mensajeErrorBuscador.innerHTML = "El campo de búsqueda está vacio"
    } else if (buscador.value.length < 3) {
        mensajeErrorBuscador.innerHTML = "Mínimo 3 caracteres"
    } else {
        this.submit(e)
    }
})















