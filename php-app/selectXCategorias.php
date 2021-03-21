<?php
    header('Access-Control-Allow-Origin: *');
    header("Access-Control_Allow-Headers: origin, X-Requested-With,Content-Type, Accept");//le pide acceso al header
    header('Access-Control-Allow-Methods: GET, POST');
  
    
    $dato=file_get_contents('php://input');//recibe el jason de afuera
    $params=json_decode($json);//decodifica el json y guarda en params

    function connect()
    {
            // $connect = mysqli_connect('localhost','id16388186_matizprograming', '!Lara30306[jose]', 'id16388186_tienda');
      $connect = mysqli_connect('localhost','root', '', 'tienda');

      if (mysqli_connect_errno($connect)) {
        die("Failed to connect:" . mysqli_connect_error());
      }
      mysqli_set_charset($connect, "utf8");
      return $connect;
    }
    $co = connect();
    $sql="SELECT * FROM `productos` WHERE (`categorias` = '2');";
    $respuesta=mysqli_query($co, $sql);

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
              "fechaBaja" => $fila['fechaBaja'],
              "precio" => $fila['precio'],
             ); 
        } 

      }else{
        echo mysqli_error($co);
        $response->resultado='Error ESTA MAL ALGOOOO POR EL MOMENTO';
      }

      header('Content-Type: application/json');
      echo json_encode($array);//muestra el json , el mensaje
?>;
