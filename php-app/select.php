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
     $respuesta=mysqli_query($co, "SELECT * FROM productos;");

     class Result{}
     $response=new Result();
     $vec=[]; 
     $fila = mysqli_fetch_array($respuesta);

      if($respuesta==true){

          $response->resultado='OK';
          $response->mensaje='MUY BIEN';
          while($fila = mysqli_fetch_array($respuesta)) {
        $array[] = array(
          "codigo_producto" => $fila['codigo_producto'],
          "categorias" => $fila['categorias'],
          "estado" => $fila['estado'],
          "titulo" => $fila['titulo'],
          "subtitulo" => $fila['subtitulo'],
          "descripcion" => $fila['descripcion'],
          "nombreImagen" => $fila['nombreImagen'],
          "fechaAlta" => $fila['fechaAlta'],
          "precio" => $fila['precio'],
         ); 
        } 

      }else{
        echo mysqli_error($co);
        $response->resultado='Error ESTA MAL ALGOOOO POR EL MOMENTO';
      }

      header('Content-Type: application/json');
      echo json_encode($array);//muestra el json , el mensaje
?>
