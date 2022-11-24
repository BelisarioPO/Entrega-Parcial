//Movies Populares//


let url_Movies_Popular = "https://api.themoviedb.org/3/movie/popular?api_key=5b2a5c18601c66bcba1ae9c824344c2b&language=en-US&page=1"
fetch(url_Movies_Popular)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);

        let urlAppend = "https://image.tmdb.org/t/p/original"
        let index_Movies_populares = document.querySelector(".listado-movie-index-populares")
        let section_Movies_populares = ''

        for (let i = 0; i < data.results.length; i++) {

            section_Movies_populares += `<li>
            <a href="detail-movie.html?id=${data.results[i].id}" </a>
    <img src="${urlAppend + data.results[i].poster_path}" alt="" class="img-index"/> 
    </li>`

        }

        index_Movies_populares.innerHTML = section_Movies_populares

    })
    .catch(function (error) {
        console.log("Los errores son" + error)
    })


//Movies Valorados//


let url_Movies_Valorados = "https://api.themoviedb.org/3/movie/top_rated?api_key=5b2a5c18601c66bcba1ae9c824344c2b&language=en-US&page=1"
fetch(url_Movies_Valorados)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);

        let urlAppend = "https://image.tmdb.org/t/p/original"
        let index_Movies_Top_Rated = document.querySelector(".listado-movies-index-top-rated")
        let section_Movies_top_rated = ''

        for (let i = 0; i < data.results.length; i++) {
            section_Movies_top_rated += `<li>
            <a href="detail-movie.html?id=${data.results[i].id}">
            <img src="${urlAppend + data.results[i].poster_path}" alt="" class="img-index"/>
            <p class="Pelis">${data.results[i].title}</p>
            <p class="Pelis">${data.results[i].release_date}</p>
            </a>
        </li>`

        }

        index_Movies_Top_Rated.innerHTML = section_Movies_top_rated

    })
    .catch(function (error) {
        console.log("Los errores son" + error)
    })


//Tv Shows populares//


let url_Tv_Populares = "https://api.themoviedb.org/3/tv/popular?api_key=5b2a5c18601c66bcba1ae9c824344c2b&language=en-US&page=1"
fetch(url_Tv_Populares)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);

        let urlAppend = "https://image.tmdb.org/t/p/original"
        let index_Tv_populares = document.querySelector(".listado-tv-index-popular")
        let section_Tv_Popular = ''

        for (let i = 0; i < data.results.length; i++) {
            section_Tv_Popular += `<li>
            <a href="detail-serie.html?id=${data.results[i].id}">
            <img src="${urlAppend + data.results[i].poster_path}" alt="" class="img-index"/>
            <p class="Pelis">${data.results[i].name}</p>
            <p class="Pelis">${data.results[i].first_air_date}</p>
            </a>
        </li>`

        }

        index_Tv_populares.innerHTML = section_Tv_Popular
    })
    .catch(function (error) {
        console.log("Los errores son" + error)
    })

//Tv Shows valorados//


let url_Tv_Valorados = "https://api.themoviedb.org/3/tv/top_rated?api_key=5b2a5c18601c66bcba1ae9c824344c2b&language=en-US&page=1"
fetch(url_Tv_Valorados)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);

        let urlAppend = "https://image.tmdb.org/t/p/original"
        let index_Tv_Top_Rated = document.querySelector(".listado-tv-index-top-rated")
        let section_Tv_top_rated = ''

        for (let i = 0; i < data.results.length; i++) {
            section_Tv_top_rated += `<li>
            <a href="detail-serie.html?id=${data.results[i].id}">
            <img src="${urlAppend + data.results[i].poster_path}" alt="" class="img-index"/>
            <p class="Pelis">${data.results[i].name}</p>
            <p class="Pelis">${data.results[i].first_air_date}</p>
            </a>
        </li>`
        }

        index_Tv_Top_Rated.innerHTML = section_Tv_top_rated
    })
    .catch(function (error) {
        console.log("Los errores son" + error)
    })

//Verificacion de Barra de Busqueda

let formulario = document.querySelector(".formulario-busqueda")
let buscador = document.querySelector(".buscador")
let mensajeErrorBuscador = document.querySelector(".mensaje-error-buscador")

formulario.addEventListener("submit", function (e) {
    e.preventDefault()
    if (buscador.value.length == 0) {
        mensajeErrorBuscador.innerHTML = "El campo de búsqueda está vacio"
    } else if (buscador.value.length < 3) {
        mensajeErrorBuscador.innerHTML = "Mínimo 3 caracteres"
    } else {
        this.submit(e)
    }
})