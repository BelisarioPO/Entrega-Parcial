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
})
.catch(function (error) {
    console.log("Los errores son" + error)
})

