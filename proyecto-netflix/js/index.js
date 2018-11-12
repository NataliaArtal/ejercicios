var peliculas = [];

// var pelicula1 = {
//         id: 1,
//         title: 'Harry Potter',
//         rating: 5.0,
//         views: 12345123,
//         isMovie: true,
//         reparto: ['Juani Gallo', 'Nati Guida']
//       }
// var pelicula2 = {
//         id: 2,
//         title: 'Avengers-Infinity Wars',
//         rating : 8.6,
//         views : 24568787,
//         isMovie : true,
//         reparto : ['Robert Downey Jr', 'Chris Hemsworht']
// }
// var pelicula3 = {
//         id: 3,
//         title: 'Los Increibles 2',
//         rating : 7,
//         views : 65879809,
//         isMovie : true,
//         reparto : ['Brad Bird', 'Holly Hunter']
// }
// var pelicula4 = {
//         id: 4,
//         title: 'Merli',
//         rating : 10,
//         views :  24568900,
//         isMovie : false,
//         reparto : ['David Solans', 'Carlos Cuevas']
// }

function addMovie(titulo) {
    peliculas.push(titulo);
}


function getLanzamientos (id) {
    for (var i = 0; i < peliculas.length; i ++) {
        if (id == peliculas[i].id) {
            return peliculas[i];
        }
    }
}
console.log (getLanzamientos(3));

var inputReparto = $('#reparto');
// var botonAgregar = $('#bot');
// var botonGuardar = $('#boton2');
    

function agregar(e) {
    e.preventDefault();
    //var ul = $('#list');
    // var inputValue = inputReparto.value;
    var reparto = $('#reparto').val();
    $('#list').append('<li>' + reparto + '</li>');
    // var li = $('li');    
    if (inputValue !== '') {
    li.innerHTML = inputValue
    ul.append('li');
    }
    inputReparto.value = '';
}


function guardar (e) {
    e.preventDefault();
   // var title = $('#titulo');
    var titleValue = $('#titulo').val();
    var tipoPeli =  $("#tipoPeli").is(':checked');
    var tipoSerie = $("#tipoSerie").is(':checked');
    var isMovie = false;
    var reparto = $('li');  // siempre que ponga un elementS o va a devolver un array
    var contenidoReparto = [];
    

    if (tipoPeli == true) {
        isMovie = true;
    }
    // if (tipoPeli && tipoSerie == "0"){
    //     alert ("Falta elegir tipo")
    // }    

    for (var i = 0; i < reparto.length; i++) {
        contenidoReparto.push(reparto[i].innerHTML)    
    }

    var id 

    if (peliculas.length == 0) {
        id = 1
    }  else {
        id = peliculas[peliculas.length - 1].id + 1
    }
    console.log(id)

   
   var obj = {
    id: id,
    title: titleValue,
    rating : 0,
    views : 0,
    isMovie : isMovie,
    reparto : contenidoReparto, 
}
      
    addMovie(obj)
    console.log(peliculas);

}

function eliminarTitulo (id) {
    for (var i = 0; i < peliculas.length; i++){
        if (peliculas[i].id === id) {
            peliculas.splice(i,1);
        }
    }
}
 
console.log(eliminarTitulo(1))

$('#boton1').on("click", agregar);

$('#boton2').on("click", guardar);





