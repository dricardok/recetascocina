$( document ).ready(function() {
                
    $("#sopas").click(function(event) {
        $("#content").load("sopas.html");
    });

    $("#pay").click(function(event) {
        $("#content").load("pay.html");
    });

    $("#helado").click(function(event) {
        $("#content").load("helado.html");
    });

    $("#contacto,#contacto2").click(function(event) {
        $("#content").load("contacto.html");
    });

    $("#creditos,#creditos2").click(function(event) {
        $("#content").load("creditos.html");
    });
});