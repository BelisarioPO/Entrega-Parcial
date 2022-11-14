let queryString = location.search
let qsObj = new URLSearchParams(queryString)
let id = qsObj.get("id")

let urlSerie = `https://api.themoviedb.org/3/tv/${id}?api_key=89b3abec13d5b342a0a8c66f4e9a5020&language=en-US`
fetch(urlSerie)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);

        let urlAppend = "https://image.tmdb.org/t/p/w500"

        let titulo = document.querySelector(".detallesSeriesTITULO")
        titulo.innerText = data.name

        let imagen = document.querySelector(".detallesSeriesIMG")
        imagen.innerHTML = `<img src="${urlAppend + data.backdrop_path}" alt="" >`

        let sinopsis = document.querySelector(".detallesSeriesSINOPSIS")
        sinopsis.innerText = data.overview

        let fechadestreno = document.querySelector(".detallesSeriesFECHA")
        fechadestreno.innerText = data.first_air_date

        let rating = document.querySelector(".detallesSeriesRATING")
        rating.innerText = data.popularity

        let genero = document.querySelector(".detallesSeriesGENEROS")
        let Generos = ''
        for (let i = 0; i < data.genres.length; i++) {
            Generos += `<li>
            <p>${data.genres[i].name}</p>
            </li>`
        }
        genero.innerHTML = Generos
    })
    .catch(function (error) {
        console.log("Los errores son" + error)
    })