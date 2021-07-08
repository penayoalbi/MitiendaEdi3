addEventListener("load",load)
//var miServidor = "https://apipenayo.herokuapp.com"
var miServidor ="http://localhost:666";

function load(){
   //mensajeAlServido(miServidor,funcionArealizar);
   //$("registrar").addEventListener("click",cargarRegistro);
 document.getElementById("btnIngresar").addEventListener("click",login);
}
/*
function funcionArealizar(){
  //  console.log(xmlhttp);
}*/

function login(miServidor, funcionArealizar)
{
   EnviarMensajeServidor(miServidor,funcionArealizar);
}

function EnviarMensajeServidor (miServidor, funcionArealizar)
{
    var xmlhttp = new XMLHttpRequest();
    var datos = new FormData();
    datos.append("usuario",$("txtNombre").value);
    datos.append("pass",$("txtPass").value);

    xmlhttp.open('post',"http://localhost:666/usuario", true);
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
   xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
   xmlhttp.setRequestHeader("enctype", "multipart/form-data");
 
    //envio el mensaje  
    xmlhttp.send( );
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
/*
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
                funcionArealizar(xmlhttp.responseText);
                alert(xmlhttp.responseText);
            }else{
                alert("Error ");
            }
        }
    }
    xmlhttp.setRequestHeader("enctype", "multipart/form-data");
    xmlhttp.send(reg);
}
*/
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

