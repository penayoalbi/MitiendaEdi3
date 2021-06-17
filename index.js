addEventListener("load",load);
var miServidor = "/../ApiProyecto";

function load(){
    mensajeAlServido(miServidor,cargarRegistro);
}

function cargarRegistro(){
}

function mensajeAlServido(servidor, funcionArealizar)
{
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", servidor, true);
     //seteo el evento
     xmlhttp.onreadystatechange = function () {
        //Veo si llego la respuesta del servidor
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            //Reviso si la respuesta es correcta
            if (xmlhttp.status == 200) {
                funcionArealizar(xmlhttp.responseText);
            }
            else {
                alert("ocurrio un error");
            }
        }
    }

    //envio el mensaje    
    xmlhttp.send();
}

/*
function load(){
    $("ingresar").click(function(){
        $.post("index.php",function(datos){
            $("resultado").html(datos);
        })
    })
    alert("esto es login");
}*/