let queryString = window.location.search
let qsObj = new URLSearchParams(queryString)
let query = qsObj.get("query")

fetch(`https://api.themoviedb.org/3/search/multi?api_key=89b3abec13d5b342a0a8c66f4e9a5020&language=en-US&page=1&include_adult=false&query=${query}`)
    .then(function (response) {
    return response.json();
})
    .then(function (data) {
        console.log(data)

        if(data.results.length == 0) {
            let contendorError = document.querySelector(".contedor-mensaje")
            contendorError.innerHTML = "No hay resultado para su búsqueda"
        } else {

        let urlAppend = "https://image.tmdb.org/t/p/original"
        
        let contenedor = document.querySelector(".contenedor-resultados")
        let section_resultados = ''
        for (let i = 0; i < data.results.length; i++) {
            section_resultados += `<li>
                <a href="detail-movie.html?id=${data.results[i].id}" </a>
                <img src="${urlAppend + data.results[i].poster_path}" alt="" class="img-index"/> 
            </li>`
        }
        contenedor.innerHTML = section_resultados
        }
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