
document.getElementById("ingresar").addEventListener("click",validar);
//document.getElementById("registrar").addEventListener("click",validarCampos);
//addEventListener("load",validar);

//validar login
function validar() {
    var exp = /(?=.*\d)(?=.*[A-Z])/g;

    var nombre = document.getElementById("nombre").value;
    var clave = document.getElementById("clave").value;
    if( nombre===""){
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
      
}
function validarVacio(valor){
    var valor = valor;
    if(valor==""){
        return true;
    }else{
        return false;
    }
}

function validarCampos(){
    var expCorreo = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var nombre=document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;
    var clave= document.getElementById("clave").value;

    if(validarVacio(nombre)|| validarVacio(apellido)|| validarVacio(correo)|| validarVacio(clave)){
        alert("Los Campos no deben quedar vacios");
        return false;
    }else if(!correo.match(expCorreo)){
        alert("Error: La dirección de correo "+correo+" es incorrecta.");
        return false;
    }else{
        return true;
    }
}


