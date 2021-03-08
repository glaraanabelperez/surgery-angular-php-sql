<?php
  header('Access-Control-Allow-Origin: *');
  header("Access-Control_Allow-Headers: origin, X-Requested-With,Content-Type, Accept");//le pide acceso al header
  header('Access-Control-Allow-Methods: GET, POST');
  
  // $json=file_get_contents('php://input');//recibe el jason de afuera
  // echo $json;
  // $params=json_decode($json);//decodifica el json y guarda en params
  $json = file_get_contents('php://input');
  $obj = json_decode($json);
  $nombre_fichero=dirname(__FILE__)."\\assets\\".$obj;
      unlink($nombre_fichero);

    class Result{}
    $response=new Result();

      $response->resultado='OK';

        header('Content-Type: application/json');
        echo json_encode($response);//muestra el json , el mensaje
        
?>