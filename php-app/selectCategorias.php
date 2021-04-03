<?php
    header('Access-Control-Allow-Origin: *');
    header("Access-Control_Allow-Headers: origin, X-Requested-With,Content-Type, Accept");//le pide acceso al header
    header('Access-Control-Allow-Methods: GET, POST');

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

    $sql="SELECT * FROM categorias;";
    $respuesta=mysqli_query($co, $sql);
    //  $publi = $respuesta->fetchAll(PDO::FETCH_OBJ);
    // echo json_encode($publi);//muestra el json , el mensaje

     class Result{}
     $response=new Result();
     $vec=[]; 

     $fila = mysqli_fetch_array($respuesta);

     

      if($respuesta==true){

          $response->resultado='OK';
          $response->mensaje='MUY BIEN';
          while($fila = mysqli_fetch_array($respuesta)) {
        $array[] = array(
          "codigo_categoria" => $fila['codigo_categoria'],
          "descripcion" => $fila['descripcion'],
         ); 
        } 

      }else{
        echo mysqli_error($co);
        $response->resultado='Error ESTA MAL ALGOOOO POR EL MOMENTO';
      }

      header('Content-Type: application/json');
      echo json_encode($array);//muestra el json , el mensaje
?>
