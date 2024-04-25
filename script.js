$(document).ready(function(){
    $("#formulario").submit(function(e){
        e.preventDefault();
        let texto = $("#textoTarefa").val().trim();
        if (texto !== '') {
            $('#lista').append(`<li>${texto}</li>`);
            $('#textoTarefa').val('');
        }
    });

    $('#lista').on('click', 'li', function(){
        $(this).toggleClass('completed');
    });
});