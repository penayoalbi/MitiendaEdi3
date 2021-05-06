document.getElementById("btn-registro").addEventListener("click",registrar);
document.getElementById("btn-iniciarSesion").addEventListener("click",iniciarSesion);

var form_registro=document.querySelector(".form-registro");
var form_login_registro=document.querySelector(".form-login-registro");
var form_login=document.querySelector(".form-login");
var caja_login=document.querySelector(".caja-login");
var caja_registro=document.querySelector(".caja-registro");

function registrar(){ 
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

