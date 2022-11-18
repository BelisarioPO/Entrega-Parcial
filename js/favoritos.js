let recuperoStorageSeries = localStorage.getItem('favoritosSeries')
let favoritosSeries = JSON.parse(recuperoStorageSeries)
console.log(favoritosSeries);

let favs = document.querySelector('.listado-series-favoritas')
let favos = ''

for (let i = 0; i < favoritosSeries.length; i++) {
    let url = `https://api.themoviedb.org/3/tv/${favoritosSeries[i]}?api_key=89b3abec13d5b342a0a8c66f4e9a5020&language=en-US`
    let urlAppend = "https://image.tmdb.org/t/p/original"
    fetch(url)
        .then(function (res) {
            return res.json()
        })
        .then(function (data) {
            console.log(data);
            favos += `<li>
            <a href="detail-serie.html?id=${data.id}">
                <img src="${urlAppend + data.poster_path}" alt="" class="img-index">
            </a>
        </li>`

            favs.innerHTML = favos
        })
        .catch(function (error) {
            console.log(error);
        })
}

let recuperoStoragePeliculas = localStorage.getItem('favoritosPelis')
let favoritosPeliculas = JSON.parse(recuperoStoragePeliculas)
console.log(favoritosPeliculas);

let favsSeries = document.querySelector('.listado-peliculas-favoritas')
let favosSeries = ''

for (let i = 0; i < favoritosPeliculas.length; i++) {
    let url = `https://api.themoviedb.org/3/movie/${favoritosPeliculas[i]}?api_key=89b3abec13d5b342a0a8c66f4e9a5020&language=en-US`
    let urlAppend = "https://image.tmdb.org/t/p/original"
    fetch(url)
        .then(function (res) {
            return res.json()
        })
        .then(function (data) {
            console.log(data);
            favosSeries += `<li>
            <a href="detail-movie.html?id=${data.id}"><img src="${urlAppend + data.poster_path}" alt="" class="img-index"></a>
        </li>`

            favsSeries.innerHTML = favosSeries
        })
        .catch(function (error) {
            console.log(error);
        })
}