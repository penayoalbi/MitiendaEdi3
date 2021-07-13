addEventListener("load",load);
var miServidor = "https://apipenayo.herokuapp.com"
//var miServidor ="http://localhost:666/usuario";

function load(){
    //mensajeAlServido(miServidor,funcionArealizar);
    document.getElementById('btnIngresar').addEventListener("click",login);
    //document.getElementById("registro").addEventListener("click",EnviarMensajeServidor);
}

function funcionArealizar(){
   console.log(xmlhttp);
}

function login (miServidor, funcionArealizar)
{
    var xmlhttp = new XMLHttpRequest();
    var datos = new FormData();
    datos.append('nombre',$('nombre').value);
    datos.append('clave',$('clave').value);
//'http://localhost:666/usuario/login'
    xmlhttp.open('get',miServidor, true);
     //seteo el evento
     xmlhttp.onreadystatechange = function () {
        //Veo si llego la respuesta del servidor
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            //Reviso si la respuesta es correcta
            if (xmlhttp.status == 200) {
                //funcionArealizar(xmlhttp.responseText);
                 console.log( xmlhttp.responseText); 
                 $('#form-login').trigger('reset');
                 document.getElementById('respuesta').innerHTML=xmlhttp.responseText; 
                }else {
                alert("ocurrio un error");
                document.getElementById('respuesta').innerHTML=xmlhttp.responseText;
            }
        }
    }
   //xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.setRequestHeader("enctype", "multipart/form-data");
    //envio el mensaje  
    xmlhttp.send(datos);
}


//crear usuario
function EnviarMensajeServidor (miServidor, funcionArealizar)
{
    var xmlhttp = new XMLHttpRequest();
    var datos = new FormData();
    datos.append('nombre',$('nombre').value);
    datos.append('nombre',$('correo').value);
    datos.append('clave',$('clave').value);
//'http://localhost:666/usuario/new'
    xmlhttp.open('post',miServidor, true);
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
  // xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
   xmlhttp.setRequestHeader("enctype", "multipart/form-data");
 
    //envio el mensaje  
    xmlhttp.send(datos);
}

$('#registro').click(function(e){
    console.log('click en registro');
    var xmlhttp = new XMLHttpRequest();
    var registro = new FormData();
    registro.append('nombre',$('nombre').value);
    registro.append('nombre',$('correo').value);
    registro.append('clave',$('clave').value);
    //'http://localhost:666/usuario/new'
    xmlhttp.open('post',miServidor, true);
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
 // xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xmlhttp.setRequestHeader("enctype", "multipart/form-data");

   //envio el mensaje  
   xmlhttp.send(registro);

});


