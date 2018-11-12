function contador () {
    var cont = $("li").length
    return cont
}
function contadorFinalizadas () {
    var cont = $(".tachado").length
    return cont
}
$("#button").on("click", function() {
    var task = $("input").val();

    var span = "<span>" + task + "</span>";
    var btnBorrar = "<button class='borrar'>Borrar</button>";
    var btnEdit = "<button class='edit'>Editar</button>";
    var btnGuardar = "<button class='guardar hide'>Guardar</button>";
    var input = "<input class='hide' />";

    $("ul").append("<li class>" + span + input + btnBorrar + btnEdit + btnGuardar + "</li>");

    $("input").val("");
    var totalDeTareas = contador();
    $('.totales').html(totalDeTareas);
    // console.log(contador());
})

$(document).on('click', 'li span', function() {
    $(this).toggleClass('tachado');

    var totalDeTareasFinalizadas = contadorFinalizadas();
    $('.finalizadas').html(totalDeTareasFinalizadas);
})

$(document).on('click', '.borrar', function() {
    $(this).parent("li").remove();

    var totalDeTareas = contador();
    $('.totales').html(totalDeTareas);

    var totalDeTareasFinalizadas = contadorFinalizadas();
    $('.finalizadas').html(totalDeTareasFinalizadas);
})

$(document).on('click', '.edit', function() {
    // obtenemos el valor tarea
    var tarea = $(this).siblings("span").html();
    // ocultamos el span que tiene el texto
    $(this).siblings("span").addClass("hide");
    // ocultamos el boton eliminar
    $(this).siblings(".borrar").addClass("hide");
    // ocultamos el boton editar
    $(this).addClass("hide");
    // al input que tenemos en el li le asignamos como value el texto que tiene el span
    // desocultando el input
    $(this).siblings("input").val(tarea).removeClass("hide");
    // desocultar el boton guardar
    $(this).siblings(".guardar").removeClass("hide");
})

$(document).on('keypress', 'li input', function(event) {
    if (event.keyCode === 13) {
        // vamos a buscar el valor del input
        var nuevaTarea = $(this).val();
        // asignamos en el span el nuevo valor de la tarea
        $(this).siblings('span').html(nuevaTarea);
        // desocultamos el span que tiene el texto
        $(this).siblings("span").removeClass("hide");
        // desocultamos el boton eliminar
        $(this).siblings(".borrar").removeClass("hide");
        // desocultamos el boton editar
        $(this).siblings(".edit").removeClass("hide");
        // ocultamos el input
        $(this).addClass("hide");
        // ocultar el boton guardar
        $(this).siblings('.guardar').addClass("hide");
    }
});

$(document).on('click', '.guardar', function () {
    // vamos a buscar el valor del input
    var nuevaTarea = $(this).siblings("input").val();
    // asignamos en el span el nuevo valor de la tarea
    $(this).siblings('span').html(nuevaTarea);
    // desocultamos el span que tiene el texto
    $(this).siblings("span").removeClass("hide");
    // desocultamos el boton eliminar
    $(this).siblings(".borrar").removeClass("hide");
    // desocultamos el boton editar
    $(this).siblings(".edit").removeClass("hide");
    // ocultamos el input
    $(this).siblings("input").addClass("hide");
    // ocultar el boton guardar
    $(this).addClass("hide");
});