document.getElementById("btn-registro").addEventListener("click",registro);
document.getElementById("btn-iniciarSesion").addEventListener("click",iniciarSesion);
document.getElementById("ingresar").addEventListener("click",validar);
document.getElementById("registrar").addEventListener("click",validarCampos);
//addEventListener("load",validar);
var form_registro=document.querySelector(".form-registro");
var form_login_registro=document.querySelector(".form-login-registro");
var form_login=document.querySelector(".form-login");
var caja_login=document.querySelector(".caja-login");
var caja_registro=document.querySelector(".caja-registro");

function registro(){ 
      form_registro.style.display ="block";
      form_login_registro.style.left ="410px"; 
      form_login.style.display ="none";
      caja_registro.style.opacity ="0" ;//que no se muestre
      caja_login.style.opacity ="1";// que se muestre
    }

function iniciarSesion(){ 
    form_registro.style.display = "none";
    form_login_registro.style.left = "10px"; 
    form_login.style.display = "block";
    caja_registro.style.opacity = "1" ;//que no se muestre
    caja_login.style.opacity = "0";// que se muestre
}
//validar login
function validar() {
    var exp = /(?=.*\d)(?=.*[A-Z])/g;
    var usuario = 0, clave = 0;
    usuario = document.getElementById("log_usuario").value;
    clave = document.getElementById("log_clave").value;
    if( usuario===""){
        alert("El campo usuario esta vacio.");
        return false;
    }else if(clave ===""){
        alert("Clave esta vacio.");
    }
    else  if(!clave.match(exp)){
         alert("El password Debe tener al menos un numero y una letra mayuscula.");
    }
    else{
       return true;
    }  
    window.onload = function(){
        var contenedor = document.getElementById("contenedor");
        contenedor.style.visibility ='hidden';
        contenedor.style.opacity = '0';
    }
      
}
function validarVacio(valor){
    /*
   var  valor = valor.replace("&nbsp;", "");
    valor = valor == undefined ? "" : valor;
    if (!valor || 0 === valor.trim().length){
        return true;
        }
    else {
        return false;
    }*/
    var valor = valor;
    if(valor==""){
        return false;
    }else{
        return true;
    }
}
function validarCampos(){
    var expCorreo = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var nom=document.getElementById("txtnombre").value;
    var apellido = document.getElementById("txtapellido").value;
    var correo = document.getElementById("txtcorreo").value;
    var pass = document.getElementById("txtpass").value;
    var repass = document.getElementById("txtrepass").value;

    if(validarVacio(nom)==false || validarVacio(apellido)==false|| validarVacio(correo)==false|| validarVacio(pass)==false|| validarVacio(repass)==false){
        alert("Los Campos no deben quedar vacios");
    }else if(!correo.match(expCorreo))
    {
        alert("Error: La dirección de correo "+correo+" es incorrecta.");
    }else if(!pass=== repass){
        alert("Los campos del password no coinciden");
    }else{
        return true;
    }

   /*
    window.onload = function(){
        var conten = document.getElementById("contenedor");
        conten.style.visibility ='hidden';
        conten.style.opacity = '0';
    }*/
}

