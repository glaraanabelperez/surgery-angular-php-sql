<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control_Allow-Headers: origin, X-Requested-With,Content-Type, Accept");//le pide acceso al header
    header("Accept:application/json, text/plain, */*");

    var_dump($_FILES);
    $nombre_img=$_FILES['file']['name'];
    $ruta_temp_actual=$_FILES['file']['tmp_name'];
    
    $ruta_destino=dirname(__FILE__)."\\assets\\".$nombre_img;
    // $ruta_destino=dirname(__FILE__)."\\assets\\".$nombre_img;

    $rsta=move_uploaded_file($ruta_temp_actual, $ruta_destino);
    
    class Result{}
    $response=new Result();
    
      if ($rsta) {
        $response->resultado='OK';

       }else{
           $response->resultado='Error';
          }
        header('Content-Type: application/json');
        echo json_encode($response);//muestra el json , el mensaje
?>