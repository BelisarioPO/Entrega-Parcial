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

        let urlappend = "https://image.tmdb.org/t/p/w500"

        let titulo = document.querySelector(".detallespelisTITULO")
        titulo.innerText = data.title

        let imagen = document.querySelector(".detallespelisIMG")
        imagen.innerHTML = `<img src="${urlappend + data.backdrop_path}" alt="" >`


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

    let url_Movies_Plataformas = "https://api.themoviedb.org/3/watch/providers/movie?api_key=5b2a5c18601c66bcba1ae9c824344c2b&language=en-US"
fetch(url_Movies_Plataformas)
    .then(function (Response) {
        return Response.json();
    })
    .then(function (Data) {
        console.log(Data);
    let plataformas = document.querySelector(".detallespelisPlataformas")
    
    
    
    
    })
    .catch(function (error) {
        console.log("Los errores son" + error)
    })

//Favoritos
//Favoritos
let favoritos = []

//Si ya hay datos de favoritos
let recuperoStorage = localStorage.getItem('favoritos')

//Puede tener o no
if(recuperoStorage !== null){
   favoritos = JSON.parse(recuperoStorage)
}

let boton = document.querySelector('.detallespelis-favoritos');

//Si el id está en el array cambiamos el texto del botón
if(favoritos.includes(id)){
   boton.innerText = "Quitar de favoritos"
}

boton.addEventListener('click', function(){

   //chequear si el id ya está en lista y cambiar el texto del botón
   if(favoritos.includes(id)){
      //Sacar de favoritos
      let indiceFavoritos = favoritos.indexOf(id);
      favoritos.splice(indiceFavoritos, 1)
      boton.innerText = 'Agregar a favoritos';

   } else {
      //Guardar el id del presonaje en el array
         favoritos.push(id);
         boton.innerText = 'Quitar de favoritos';
   }

   //Guardar datos en localStorage
   let favsToString = JSON.stringify(favoritos)
   localStorage.setItem('favoritos',favsToString)
   
   console.log(localStorage);

})