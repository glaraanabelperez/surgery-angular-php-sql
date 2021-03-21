<?php
    header('Access-Control-Allow-Origin: *');
    header("Access-Control_Allow-Headers: origin, X-Requested-With,Content-Type, Accept");//le pide acceso al header
    header('Access-Control-Allow-Methods: GET, POST');
    
    $json=file_get_contents('php://input');//recibe el jason de afuera
    $params=json_decode($json);//decodifica el json y guarda en params

    function connect()
    {
<<<<<<< HEAD
      $connect = mysqli_connect('localhost','root', '', 'tienda');
      // $connect = mysqli_connect('localhost','id16388186_matizprograming', '!Lara30306[jose]', 'id16388186_tienda');
=======
          $connect = mysqli_connect();
>>>>>>> 2954d2251d0487614ffc1d710c11d1c45e1c7acd

      if (mysqli_connect_errno($connect)) {
        die("Failed to connect:" . mysqli_connect_error());
      }
      mysqli_set_charset($connect, "utf8");
      return $connect;
    }
    
    $co = connect();
     $respuesta=mysqli_query($co, "INSERT INTO productos( categorias, estado, titulo, subtitulo, 
     descripcion,  nombreImagen, fechaAlta, precio) VALUES('$params->categorias', '$params->estado', 
     '$params->titulo','$params->subtitulo', '$params->descripcion', 
     '$params->nombreImagen','$params->fechaAlta', '$params->precio') ");

      class Result{}
      $response=new Result();
     if($respuesta==true){
        $response->resultado='OK';
        $response->mensaje='SE AGRAGO EXITOSAMENTE LA PROPIEDAD';
     }else{
      echo mysqli_error($co);
     // $response->resultado='Error';
    }
    //genera los datos de respuesta
    header('Content-Type: application/json');
    echo json_encode($response);//muestra el json , el mensaje
?>
