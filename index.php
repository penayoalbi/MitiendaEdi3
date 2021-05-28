<?php
include_once("index.html");
 $nombre = $_GET["txtnombre"];
 $apellido = $_GET["apellido"];
 $correo = $_GET["txtcorreo"];
 $pass = $_GET["txtpass"];
 $repass = $_GET["txtrepass"];



if(isset ( $_GET["log_usuario"])|| isset($_GET["log_clave"])){
    $usuario=$_GET["log_usuario"];
    $clave=$_GET["log_clave"];
}

echo"hola mundo";

?> 
