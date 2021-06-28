addEventListener("load",load);
//var servidor = "https://ApiProyecto.herokuapp.com/Mitienda"
var miServidor ="http://localhost:666/";

function load(){
  //  mensajeAlServido(miServidor,cargarRegistro);
   // mensajeAlServido(miServidor,Login);
   // $("registrar").addEventListener("click",cargarRegistro);
   document.getElementById("btnIngresar").addEventListener("click",Login);
   document.getElementById("btnNuevoUsuario").addEventListener("onload",CrearUsuario);
    
}


function funcionArealizar(){
  //  console.log(xmlhttp);
}

function Login (miServidor, funcionArealizar)
{
    console.log("login usuario");
    var xmlhttp = new XMLHttpRequest();
    var datos = new FormData();
    datos.append("usuario",$("txtnombre").value);
    datos.append("pass",$("txtPass").value);
//donde se envia el msj
    xmlhttp.open("post",'http://localhost:666/', true);
     //seteo el evento
     xmlhttp.onreadystatechange = function () {
        //Veo si llego la respuesta del servidor
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            //Reviso si la respuesta es correcta
            if (xmlhttp.status == 200) {
                window.location("principal.html");
               funcionArealizar(xmlhttp.responseText);

            }
            else {
                alert("ocurrio un error");
            }
        }
    }
//definimos que enviamos
   //xmlhttp.setRequestHeader("enctype", "multipart/form-data");
    //envio el mensaje    
  //  var objeto= new FormData();
   // objeto.append(responseText);
    xmlhttp.send(datos);
}


function EnviarMensajeServidor (miServidor, funcionArealizar)
{
    var xmlhttp = new XMLHttpRequest();
    var datos = new FormData();
    datos.append("usuario",$("txtnombre").value);
    datos.append("pass",$("txtPass").value);

    xmlhttp.open('post','http://localhost:666/', true);
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
   // xmlhttp.setRequestHeader("enctype", "multipart/form-data");

    var objeto= new FormData();
    objeto.append(responseText);

    //envio el mensaje    
    xmlhttp.send();
}

function BuscarProducto(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('post',miServidor,true);

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
function CrearUsuario(miServidor,funcionArealizar){
    var reg = new FormData();
    reg.append("nombre",$("txtNombre").value);
    reg.append("correo",$("txtCorreo").value);
    reg.append("pass",$("txtPass").value);
    
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open("POST","http://localhost:666/Usuario",true);

    xmlhttp.onreadystatechange = function(){
        if(xmlhttp.readyState ==XMLHttpRequest.DONE){
            if(xmlhttp.status==200){
                //funcionArealizar(xmlhttp.responseText);
                alert(xmlhttp.responseText);
            }else{
                alert("Error ");
            }
        }
    }
   // xmlhttp.setRequestHeader("enctype", "multipart/form-data");
    xmlhttp.send(reg);
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
/*
$(function(){
    $("#formulario_contacto").on("submit", function(e){
            processData: false,
            beforeSend: function() {
              $('.msg').html("<img src='img/ajax-loader.gif' />");
            },
        })
 
        // Cuando el formulario es enviado, mostramos un mensaje en la vista HTML 
        // En el archivo enviarcorreo.php devuelvo el valor '1' el cual es procesado con jQuery Ajax 
        // y significa que el mensaje se envio satisfactoriamente. 
        .done(function (res) {                  
 
          if(res.a == "1"){
                    
            // Mostramos el mensaje 'Tu Mensaje ha sido enviado Correctamente !' 
            $(".msg").html(res.b);                   
            $("#formulario_contacto").trigger("reset");    
 
          }  else {                                       
            $(".msg").html(res.b); 
          }
                                                      
        })
 
        // Mensaje de error al enviar el formulario 
        .fail(function (res) {                    
            $(".msg").html(res.b);
        });
 
    });
});
*/

