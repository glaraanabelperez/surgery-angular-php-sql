<?php
    header('Access-Control-Allow-Origin: *');
    header("Access-Control_Allow-Headers: origin, X-Requested-With,Content-Type, Accept");//le pide acceso al header
    header('Access-Control-Allow-Methods: GET, POST');
    
    $json=file_get_contents('php://input');//recibe el jason de afuera
    $params=json_decode($json);//decodifica el json y guarda en params

    function connect()
    {
        $connect = mysqli_connect();

      if (mysqli_connect_errno($connect)) {
        die("Failed to connect:" . mysqli_connect_error());
      }
      mysqli_set_charset($connect, "utf8");
      return $connect;
    }

    $co = connect();
    $id=$params->id;
     $respuesta=mysqli_query($co, "DELETE FROM `publicaciones` WHERE ID='$id'");
      class Result{}
      $response=new Result();
     if($respuesta==true){
        $response->resultado='OK';
        $response->mensaje='SE ELIMINO CORRECTAMENTE LA PUBLICACION';
     }else{
      echo mysqli_error($co);
     // $response->resultado='Error';
    }
    //genera los datos de respuesta
    header('Content-Type: application/json');
    echo json_encode($response);//muestra el json , el mensaje
?>
