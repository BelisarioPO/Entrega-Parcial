let recuperoStorage = localStorage.getItem('favoritos')
let favoritos = JSON.parse(recuperoStorage)
console.log(favoritos);

let favs = document.querySelector('.listado-series-favoritas')
let favos = ''

for (let i = 0; i < favoritos.length; i++) {
    let url = `https://api.themoviedb.org/3/tv/${favoritos[i]}?api_key=89b3abec13d5b342a0a8c66f4e9a5020&language=en-US`
    let urlAppend = "https://image.tmdb.org/t/p/original"
    fetch(url)
        .then(function (res) {
            return res.json()
        })
        .then(function (data) {
            console.log(data);
            favos += `<li>
            <a href="detail-serie.html?id=${data.id}"><img src="${urlAppend + data.backdrop_path}" alt="" class="img-index"></a>
        </li>`

            favs.innerHTML = favos
        })
        .catch(function (error) {
            console.log(error);
        })
}

console.log(favos);
console.log(favs);

let favsPeliculas = document.querySelector('.listado-peliculas-favoritas')
let favosPeliculas = ''

for (let i = 0; i < favoritos.length; i++) {
    let url = `https://api.themoviedb.org/3/movie/${favoritos[i]}?api_key=89b3abec13d5b342a0a8c66f4e9a5020&language=en-US`
    let urlAppend = "https://image.tmdb.org/t/p/original"
    fetch(url)
        .then(function (res) {
            return res.json()
        })
        .then(function (data) {
            console.log(data);
            favosPeliculas += `<li>
            <a href="detail-movie.html?id=${data.id}"><img src="${urlAppend + data.backdrop_path}" alt="" class="img-index"></a>
        </li>`

            favsPeliculas.innerHTML = favosPeliculas
        })
        .catch(function (error) {
            console.log(error);
        })
}