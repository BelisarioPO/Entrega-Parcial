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
    let url_Series_Plataformas = `https://api.themoviedb.org/3/tv/${id}/watch/providers?api_key=5b2a5c18601c66bcba1ae9c824344c2b`
    fetch(url_Series_Plataformas)
        .then(function (Response) {
            return Response.json();
        })
        .then(function (data) {
            console.log(data);
        let plataformas = document.querySelector(".detallesSeriesPlataformas")
        let Plataformas = ""
    if (data.results.AR !== undefined){
        for (let i = 0; i < data.results.AR.flatrate.length; i++) {
            Plataformas += `<li>
            ${data.results.AR.flatrate[i].provider_name}
            </li>`
        }
        plataformas.innerHTML = Plataformas
    }
    else{
        let plataformasEmpty = "<li>Esta Pelicula no esta disponible en tu Region</li>"
        plataformas.innerHTML = plataformasEmpty
    }
        
        
        
        
        
        })
        .catch(function (error) {
            console.log("Los errores son" + error)
        })
    
    
        let url_Series_reviews = `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=5b2a5c18601c66bcba1ae9c824344c2b&language=en-US&page=1`
        fetch(url_Series_reviews)
            .then(function (Response) {
                return Response.json();
            })
            .then(function (data) {
                console.log(data);
            let reviews = document.querySelector(".detallesSeriesREVIEWS")
            let Reviews = ""
            for (let i = 0; i < data.results.length; i++) {
                Reviews += `<li>${data.results[i].author}:
                ${data.results[i].content}</li>`
            }
            reviews.innerHTML = Reviews
           
           
           
           
            })
            .catch(function (error) {
                console.log("Los errores son" + error)
            })
        

//Favoritos
let favoritosSeries = []

//Si ya hay datos de favoritos
let recuperoStorageSeries = localStorage.getItem('favoritosSeries')

//Puede tener o no
if(recuperoStorageSeries !== null){
   favoritosSeries = JSON.parse(recuperoStorageSeries)
}

let boton = document.querySelector('.detallespelis-favoritos');

//Si el id está en el array cambiamos el texto del botón
if(favoritosSeries.includes(id)){
   boton.innerText = "Quitar de favoritos"
}

boton.addEventListener('click', function(){

   //chequear si el id ya está en lista y cambiar el texto del botón
   if(favoritosSeries.includes(id)){
      //Sacar de favoritos
      let indiceFavoritos = favoritosSeries.indexOf(id);
      favoritosSeries.splice(indiceFavoritos, 1)
      boton.innerText = 'Agregar a favoritos';

   } else {
      //Guardar el id del presonaje en el array
         favoritosSeries.push(id);
         boton.innerText = 'Quitar de favoritos';
   }

   //Guardar datos en localStorage
   let favsToString = JSON.stringify(favoritosSeries)
   localStorage.setItem('favoritosSeries',favsToString)
   
   console.log(localStorage);

})