$(document).ready(function(){
    isDocumentReady = true;
});

    var campo1 = document.getElementsByClassName("campo")[0];
    var campo2 = document.getElementsByClassName("campo")[1];
    var campo3 = document.getElementsByClassName("campo")[2];

    $("#enviar").click(() => {

        console.log(campo1.value);
        $(".result").prepend(`${campo3.value}`);
        $(".result").prepend(`${campo2.value}`);
        $(".result").prepend(`${campo1.value}`);
        $(".result").fadeIn();
    });