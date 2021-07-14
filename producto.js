$(function(){
   // var miServidor = 'http://localhost:666/producto';
    var miServidor = "https://apipenayo.herokuapp.com"
    console.log('producto');

    //recibe lo que el usuario esta tipeando
   $('#buscar').keyup(function()
   {
        let buscar = $('#buscar').val();
       //console.log(buscar);
       $.ajax({
           //'http://localhost:666/producto
        url: miServidor,
        type:'get',
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

    $('#btnAgregar').click(function (e){
        
       e.preventDefault();//que no se recargue la página
        var xmlhttp = new XMLHttpRequest();
        var nombre = document.getElementById('nombre').value;
        var descripcion = document.getElementById('descripcion').value;
        var datos = new FormData();
        
        datos.append('nombre',$('nombre').value);
        datos.append('descripcion',$('descripcion').value);
       
        console.log(nombre);
        console.log(descripcion);
        //'http://localhost:666/producto'
        xmlhttp.open('post',miServidor, true);
         //seteo el evento
        xmlhttp.onreadystatechange = function () {
        //Veo si llego la respuesta del servidor
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
           //Reviso si la respuesta es correcta
           if (xmlhttp.status == 200) {
               console.log('200');
             //  console.log( xmlhttp.responseText);   
           }
           else {
               alert("ocurrio un error");
           }
        }
   }
    //xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.setRequestHeader("enctype", "multipart/form-data");
   //envio el mensaje  
    xmlhttp.send(datos);

    })

});
