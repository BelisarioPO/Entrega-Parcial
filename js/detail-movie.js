let queryString = location.search
let qsObj = new URLSearchParams(queryString)
let id = qsObj.get("id")

let urlMovies = `https://api.themoviedb.org/3/movie/${id}?api_key=89b3abec13d5b342a0a8c66f4e9a5020&language=en-US`

fetch(urlMovies)
    .then(function (response) {
        return response.json(); //Lo convierte de texto en un objeto
    })
    .then(function (data) {
        console.log(data);

        // EjemploMovie = {
        //     adult: false,
        //     backdrop_path: "/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",
        //     belongs_to_collection: null,
        //     budget: 200000000,
        //     genres: [
        //         {
        //             "id": 28,
        //             "name": "Action"
        //         },
        //         {
        //             "id": 14,
        //             "name": "Fantasy"
        //         },
        //         {
        //             "id": 878,
        //             "name": "Science Fiction"
        //         }
        //     ],
        //     homepage: "https://www.dc.com/BlackAdam",
        //     id: 436270,
        //     imdb_id: "tt6443346",
        //     original_language: "en",
        //     original_title: "Black Adam",
        //     overview: "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.",
        //     popularity: 23828.993,
        //     poster_path: "/pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg",
        //     production_companies: [
        //         {
        //             "id": 12,
        //             "logo_path": "/iaYpEp3LQmb8AfAtmTvpqd4149c.png",
        //             "name": "New Line Cinema",
        //             "origin_country": "US"
        //         },
        //         {
        //             "id": 34081,
        //             "logo_path": null,
        //             "name": "Flynn Picture Company",
        //             "origin_country": "US"
        //         },
        //         {
        //             "id": 73669,
        //             "logo_path": "/7tmSGstK3KwgcDIuBYLTAayjit9.png",
        //             "name": "Seven Bucks Productions",
        //             "origin_country": "US"
        //         },
        //         {
        //             "id": 128064,
        //             "logo_path": "/13F3Jf7EFAcREU0xzZqJnVnyGXu.png",
        //             "name": "DC Films",
        //             "origin_country": "US"
        //         }
        //     ],
        //     production_countries: [
        //         {
        //             "iso_3166_1": "US",
        //             "name": "United States of America"
        //         }
        //     ],
        //     release_date: "2022-10-19",
        //     revenue: 351000000,
        //     runtime: 125,
        //     spoken_languages: [
        //         {
        //             "english_name": "English",
        //             "iso_639_1": "en",
        //             "name": "English"
        //         },
        //         {
        //             "english_name": "Danish",
        //             "iso_639_1": "da",
        //             "name": "Dansk"
        //         }
        //     ],
        //     status: "Released",
        //     tagline: "The world needed a hero. It got Black Adam.",
        //     title: "Black Adam",
        //     video: false,
        //     vote_average: 6.847,
        //     vote_count: 1301
        // }

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

    let url_Movies_Plataformas = `https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=5b2a5c18601c66bcba1ae9c824344c2b`
fetch(url_Movies_Plataformas)
    .then(function (Response) {
        return Response.json();
    })
    .then(function (data) {
        console.log(data);
 
    let plataformas = document.querySelector(".detallespelisPlataformas")
   
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


    let url_Movies_reviews = `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=5b2a5c18601c66bcba1ae9c824344c2b&language=en-US&page=1`
    fetch(url_Movies_reviews)
        .then(function (Response) {
            return Response.json();
        })
        .then(function (data) {
            console.log(data);
        let reviews = document.querySelector(".detallespelisREVIEWS")
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
let favoritosPeliculas = []

//Si ya hay datos de favoritos
let recuperoStoragePeliculas = localStorage.getItem('favoritosPelis')

//Puede tener o no
if(recuperoStoragePeliculas !== null){
   favoritosPeliculas = JSON.parse(recuperoStoragePeliculas)
}

let boton = document.querySelector('.detallespelis-favoritos');

//Si el id está en el array cambiamos el texto del botón
if(favoritosPeliculas.includes(id)){
   boton.innerText = "Quitar de favoritos"
}

boton.addEventListener('click', function(){

   //chequear si el id ya está en lista y cambiar el texto del botón
   if(favoritosPeliculas.includes(id)){
      //Sacar de favoritos
      let indiceFavoritos = favoritosPeliculas.indexOf(id);
      favoritosPeliculas.splice(indiceFavoritos, 1)
      boton.innerText = 'Agregar a favoritos';

   } else {
      //Guardar el id del presonaje en el array
         favoritosPeliculas.push(id);
         boton.innerText = 'Quitar de favoritos';
   }

   //Guardar datos en localStorage
   let favsToString = JSON.stringify(favoritosPeliculas)
   localStorage.setItem('favoritosPelis',favsToString)
   
   console.log(localStorage);

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