$('#btn-filtros-mobile').click(function (e) {
    $('#filtros').addClass('show');
});
$('#cerrar-filtros-mobile').click(function (e) {
    $('#filtros').removeClass('show');
});
i = 0
o = 0
$('#ver-detalles').click(() => {
    if (i == 0) {
        $('#descripcion').removeClass('collapsed')
        i++
    } else {
        $('#descripcion').addClass('collapsed')
        i--
    }
})
$('#ver-amenidades').click(() => {
    if (i == 0) {
        $('#caracteristicas-amenidades').removeClass('collapsed')
        i++
    } else {
        $('#caracteristicas-amenidades').addClass('collapsed')
        i--
    }
})