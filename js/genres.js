let url_Genres = "https://api.themoviedb.org/3/genre/movie/list?api_key=5b2a5c18601c66bcba1ae9c824344c2b&language=en-US"
fetch(url_Genres)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        let Genres_html = document.querySelector(".ContenedorPadreGenres")
        let Generos = ''
        for (let i = 0; i < data.genres.length; i++) {
            Generos += `<article>
            <a href="detail-genres.html?id=${data.genres[i].id}" class="Genres">${data.genres[i].name}</a>
            </article>`

        }
        Genres_html.innerHTML = Generos
        console.log(Generos)
    
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