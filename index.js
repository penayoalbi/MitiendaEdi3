addEventListener("load",load)
var miServidor = "https://apipenayo.herokuapp.com"
//var miServidor ="http://localhost:666";

function load(){
   //mensajeAlServido(miServidor,funcionArealizar);
 document.getElementById("btnIngresar").addEventListener("click",login);
 //document.getElementById("btnRegistrar").addEventListener("click",EnviarMensajeServidor);
 
}
function funcionArealizar(){
   console.log(xmlhttp);
}
/*
function login(miServidor, funcionArealizar)
{
   EnviarMensajeServidor(miServidor,funcionArealizar);
}
*/
function login (miServidor, funcionArealizar)
{
    var xmlhttp = new XMLHttpRequest();
    var datos = new FormData();
    datos.append('nombre',$('nombre').value);
    datos.append('clave',$('clave').value);

    xmlhttp.open('get',miServidor+'/usuario/login', true);
     //seteo el evento
     xmlhttp.onreadystatechange = function () {
        //Veo si llego la respuesta del servidor
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            //Reviso si la respuesta es correcta
            if (xmlhttp.status == 200) {
                //funcionArealizar(xmlhttp.responseText);
                 console.log( xmlhttp.responseText);   
            }
            else {
                alert("ocurrio un error");
            }
        }
    }
   xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
   xmlhttp.setRequestHeader("enctype", "multipart/form-data");
 
    //envio el mensaje  
    xmlhttp.send(datos);
}
/*
function BuscarProducto(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('post','http://localhost:666/Producto',true);

    xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == XMLHttpRequest.DONE) {
         //Reviso si la respuesta es correcta
         if (xmlhttp.status == 200) {
            funcionArealizar(xmlhttp.responseText);
        }
        else {
            alert("ocurrio un error en el peticion");
        }
    }

    xmlhttp.send();
}
}
*/

function EnviarMensajeServidor (miServidor, funcionArealizar)
{
    var xmlhttp = new XMLHttpRequest();
    var datos = new FormData();
    datos.append('nombre',$('nombre').value);
    datos.append('nombre',$('correo').value);
    datos.append('clave',$('clave').value);

    xmlhttp.open('post',miServidor+'/usuario/new', true);
     //seteo el evento
     xmlhttp.onreadystatechange = function () {
        //Veo si llego la respuesta del servidor
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            //Reviso si la respuesta es correcta
            if (xmlhttp.status == 200) {
                //funcionArealizar(xmlhttp.responseText);
                 console.log( xmlhttp.responseText);   
            }
            else {
                alert("ocurrio un error");
            }
        }
    }
   xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
   xmlhttp.setRequestHeader("enctype", "multipart/form-data");
 
    //envio el mensaje  
    xmlhttp.send(datos);
}

/*
function enviarLogin(){
    $("#form-login").on("submit", function(e){

        //cancelar comportamiento 
        e.preventDefaul();
        //tomar datos del form
        var form= $(this);
        var formData = new FormData(document.getElementById("form-login"));
        formData.append("datos","valor");
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == XMLHttpRequest.DONE) {
                 //Reviso si la respuesta es correcta
                 if (xmlhttp.status == 200) {
                    funcionArealizar(xmlhttp.responseText);
                }
                else {
                    alert("ocurrio un error");
                }
            }
    });

}

});
*/

