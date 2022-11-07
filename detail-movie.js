let queryString = location.search
let qsObj = new URLSearchParams(queryString)
let id = qsObj.get("id")

let urlMovies = `https://api.themoviedb.org/3/movie/popular?api_key=5b2a5c18601c66bcba1ae9c824344c2b&language=en-US&page=1/${id}`
fetch(urlMovies)
.then(function(response){
    return response.json();
})
.then(function(data){
console.log(data);
let titulo = document.querySelector(".pelititulodetalle")
titulo.innerText = data.title


let sinopsis = document.querySelector(".detallespelisSINOPSIS")
sinopsis.innerText = data.overview

let fechadestreno = document.querySelector(".detallespelisFECHA")
fechadestreno.innerText = data.release_date

//let duracionpeli = document.querySelector()//
//duracionpeli.innerText =// 

let rating = document.querySelector(".detallespelisRATING")
rating.innerText = data.popularity

let genero = document.querySelector()
//genero.innerText = data.!!
})
.catch(function (error) {
    console.log("Los errores son" + error)
})

