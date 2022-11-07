let queryString = location.search
let qsObj = new URLSearchParams(queryString)
let id = qsObj.get("id")

let urlMovies = `https://api.themoviedb.org/3/movie/${id}?api_key=89b3abec13d5b342a0a8c66f4e9a5020&language=en-US`
fetch(urlMovies)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);

        let urlAppend = "https://image.tmdb.org/t/p/original"
        let urlIMG = `https://api.themoviedb.org/3/movie/${id}/images?api_key=89b3abec13d5b342a0a8c66f4e9a5020&language=en-US`

        let titulo = document.querySelector(".detallespelisTITULO")
        titulo.innerText = data.title

        let imagen = document.querySelector(".detallespelisIMG")
        imagen.innerHTML = `<img src="${urlIMG} alt="">`



        let sinopsis = document.querySelector(".detallespelisSINOPSIS")
        sinopsis.innerText = data.overview

        let fechadestreno = document.querySelector(".detallespelisFECHA")
        fechadestreno.innerText = data.release_date

        let duracionpeli = document.querySelector(".detallespelisDURACION")
        duracionpeli.innerText = data.runtime + " " + "Minutes"

        let rating = document.querySelector(".detallespelisRATING")
        rating.innerText = data.popularity

        let genero = document.querySelector(".detallespelisGENEROS")
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