document.getElementById("caja").style.backgroundColor = "red" 
document.getElementById("todo").style.width = "50%"
document.getElementById("caja").style.height = "100px"
document.getElementById("todo").style.marginLeft = "28%"
document.getElementById("title").style.color = "white"
document.getElementById("title").style.textAlign = "center"
document.getElementById("caja").style.textAlign = "center"
document.getElementById ("todo").style.backgroundColor = "gray"
document.getElementById ("todo").style.color = "red"

// window.onload = function(){
//     document.getElementById("boton");addEventListener("click", haceClick)
// }

var addLista = document.getElementById ("list-add");
var lista = document.getElementById("list")

function agregaTareas() {
    var cajaNuevo = document.createElement ("div");
    lista.appendChild(cajaNuevo);
    var textoNuevo = document.createElement("p");
    textoNuevo.innerHTML = addLista.value;
    cajaNuevo.appendChild (textoNuevo);
    var cajita2 = document.createElement ("div");
    cajaNuevo.appendChild(cajita2);
    var boton = document.createElement("button");
    cajita2.appendChild(boton)
    var x = document.createTextNode("x");
    boton.appendChild(x);
    boton.addEventListener("click", remove)
}

function remove (e) {
    var eliminar = e.target.parentNode.parentNode;
    lista.removeChild(eliminar);

}

