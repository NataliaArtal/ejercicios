$.ajax('https://api.github.com/users/NataliaArtal')
.done(function(data){
    var myInfo = {
        imagen : data.avatar_url,   
        web : data.blog,
    }
    $("#perfil").append(`<img class= "imagen" src=${myInfo.imagen} />`)       
    $("#infoPerfil").append(`<a class= "webSite" href=${myInfo.web} a>Web<a/>`)      
});

$.ajax('https://api.github.com/users/NataliaArtal/repos')
.done(function(dato){
        for (var i = 0; i < dato.length; i++) {
            var myRepo = {
                nombre : dato[i].name,
                fecha : dato[i].created_at,
                url : dato[i].url,
            }
            $("#repos").append(`<div class= "repos"><h3>${myRepo.nombre}<h3><a href=${myRepo.url}a>Url<a/><p>${myRepo.fecha}</p></div>`)
        }
    });
