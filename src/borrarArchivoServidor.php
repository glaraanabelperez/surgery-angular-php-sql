<?php
    header('Access-Control-Allow-Origin: *');
    header("Access-Control_Allow-Headers: origin, X-Requested-With,Content-Type, Accept");//le pide acceso al header
    header('Access-Control-Allow-Methods: GET, POST');
    header("Accept:application/json, text/plain, */*");
    $json = file_get_contents('php://input');
    $obj = json_decode($json);
    $nombre_fichero=dirname(__FILE__)."\\assets\\".$obj;
    $rtsa=unlink($nombre_fichero);

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