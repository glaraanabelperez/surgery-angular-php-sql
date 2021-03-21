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
    $id=$params->id;
    $co = connect();
    $sql="UPDATE publicaciones SET 
    fecha='$params->fecha', categoria='$params->categoria', titulo='$params->titulo', 
    subtitulo='$params->subtitulo', descripcion='$params->descripcion', avatar='$params->avatar',
    nombreImagen='$params->nombreImagen', estado='$params->estado'WHERE ID=$id";
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
