$(function(){
    console.log('producto');

//recibe lo que el usuario esta tipeando
    $('#buscar').keyup(function(){
        let buscar = $('#buscar').val();
       //console.log(buscar);
       $.ajax({
        url:'http://localhost:666/producto',
        type:'POST',
        data:{buscar: buscar},//enviar el valor del input
        success: function(response){
          //  console.log(response);
          let productos = JSON.parse(response);
          let temp='';
          productos.forEach(producto => {
              //del prod solo quiero el nombre
              temp+=`<li>
                ${producto.nombre}
              </li>`
          });
          $('#contenedor').html(temp);
          console.log(productos);
        }

       })
       });

    });



/*
    $('#registro').click(function(e){
    console.log('click en registro');
    var xmlhttp = new XMLHttpRequest();
    var registro = new FormData();
    registro.append('nombre',$('nombre').value);
    registro.append('descripcion',$('descripcion').value);
    
    //'http://localhost:666/usuario/new'
    xmlhttp.open('post','http://localhost:666/producto', true);
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
  xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xmlhttp.setRequestHeader("enctype", "multipart/form-data");

   //envio el mensaje  
   xmlhttp.send(registro);

});*/


/*
function BuscarProducto(){
    $('#btnBuscar').preventDafaul();
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