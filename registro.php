<?php
 /*
 $nombre = $_GET['txtnombre'];
 $apellido = $_GET['apellido'];
 $correo = $_GET['txtcorreo'];
 $pass = $_GET['txtpass'];
 $repass = $_GET['txtrepass'];
*/
echo "Hola mundo";
 function crearRegistro(){
    $nombre = $_POST['txtnombre'];
    $apellido = $_POST['txtapellido'];
    $correo = $_POST['txtcorreo'];
    $pass = $_POST['txtpass'];
    $repass = $_POST['txtrepass'];

    $arch = fopen('registro.txt','w');

    fwrite($arch,$nombre);
    fwrite($arch,$apellido);
    fclose($arch);

}
 
 crearRegistro();

 /*<?php //Ejemplo aprenderaprogramar.com, archivo escribir.php

$file = fopen("archivo.txt", "w");

fwrite($file, "Esto es una nueva linea de texto" . PHP_EOL);

fwrite($file, "Otra más" . PHP_EOL);

fclose($file);

?>
 */

?> 
