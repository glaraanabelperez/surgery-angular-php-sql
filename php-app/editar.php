<?php
    header('Access-Control-Allow-Origin: *');
    header("Access-Control_Allow-Headers: origin, X-Requested-With,Content-Type, Accept");//le pide acceso al header
    header('Access-Control-Allow-Methods: GET, POST');
    $json=file_get_contents('php://input');//recibe el jason de afuera
    $params=json_decode($json);//decodifica el json y guarda en params
    function connect()
    {

      if (mysqli_connect_errno($connect)) {
        die("Failed to connect:" . mysqli_connect_error());
      }
      mysqli_set_charset($connect, "utf8");
      return $connect;
    }
    $id=$params->codigo_producto;
    $co = connect();
    $sql= "UPDATE `productos` SET `categorias`='$params->categorias',
    `estado`='$params->estado',`titulo`='$params->titulo',
    `subtitulo`='$params->subtitulo',
    `descripcion`='$params->descripcion',`nombreImagen`='$params->nombreImagen',
    `fechaAlta`='$params->fechaAlta',`fechaBaja`='$params->fechaBaja',
    `precio`='$params->precio' WHERE `codigo_producto`=$id";
    $respuesta=mysqli_query($co, $sql); 

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
