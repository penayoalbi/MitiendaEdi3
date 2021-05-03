document.getElementsById("btn-iniciar-sesion").addEventListener("click",iniciarSesion);
document.getElementsById("btn-registro").addEventListener("click",registrar);

var from_login_registro=document.querySelector(".form-login-registro");
var from_login=document.querySelector(".form-login");
var from_registro=document.querySelector(".form-registro");

var caja_login=document.querySelector(".caja-login");
var caja_registro=document.querySelector(".caja-registro");

function registrar(){ 
      from_registro.style.display = "block";
      from_login_registro.style.style.left = "410px"; 
      from_login.style.display = "none";
      caja_registro.style.opacity = "0" ;//que no se muestre
      caja_login.style.opacity = "1";// que se muestre

}
function iniciarSesion(){ 
    from_registro.style.display = "none";
    from_login_registro.style.style.left = "10px"; 
    from_login.style.display = "block";
    caja_registro.style.opacity = "1" ;//que no se muestre
    caja_login.style.opacity = "0";// que se muestre

}