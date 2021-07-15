addEventListener("load",load);
var miServidor = "https://apipenayo.herokuapp.com"
//var miServidor ="http://localhost:666/usuario";

function load(){
    //mensajeAlServido(miServidor,funcionArealizar);
    //document.getElementById('btnIngresar').addEventListener("click",login);
    //document.getElementById("registro").addEventListener("click",EnviarMensajeServidor);
   // document.getElementById('registro').addEventListener("click",crearUsuario);
    crearUsuario();
    login();
}

function funcionArealizar(){
   console.log(xmlhttp);
}

function login(miServidor, funcionArealizar)
{ 
    $('#btnIngresar').click(e=>{
    e.preventDefault();
    var xmlhttp = new XMLHttpRequest();
    var datos = new FormData();
    datos.append('nombre',document.getElementById('nombre').value);
    datos.append('clave',document.getElementById('clave').value);
    //'http://localhost:666/usuario/login'
    xmlhttp.open('post','/login',true);
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

    });

}
//registrar usuario
function crearUsuario(){
    $('#registro').click(e=>{
        e.preventDefault();
        console.log('click en registro');
        var xmlhttp = new XMLHttpRequest();
        var datos = new FormData();
        datos.append('nombre',document.getElementById('nombre').value);
        datos.append('correo',document.getElementById('correo').value);
        datos.append('clave',document.getElementById('clave').value);
        //'http://localhost:666/usuario/new'
        xmlhttp.open('post','/new', true);
        //seteo el evento
        xmlhttp.onreadystatechange = function () {
           //Veo si llego la respuesta del servidor
           if (xmlhttp.readyState == XMLHttpRequest.DONE) {
               //Reviso si la respuesta es correcta
               if (xmlhttp.status == 200) {
                   //funcionArealizar(xmlhttp.responseText);
                    console.log( xmlhttp.responseText);  
                    document.getElementById('respuesta').innerHTML=xmlhttp.responseText; 
               }
               else {
                   //alert("ocurrio un error");
                   document.getElementById('respuesta').innerHTML=xmlhttp.responseText;
               }
           }
       }
      //xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      xmlhttp.setRequestHeader("enctype", "multipart/form-data");
       //envio el mensaje  
       xmlhttp.send(datos);
    });
}



