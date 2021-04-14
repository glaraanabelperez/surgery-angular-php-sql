<?php
    header('Access-Control-Allow-Origin: *');
    header("Access-Control_Allow-Headers: origin, X-Requested-With,Content-Type, Accept");//le pide acceso al header
    // header('Access-Control-Allow-Methods: GET, POST');
    // header("Accept:application/json, text/plain, */*");

    $json = file_get_contents('php://input');
    $obj = json_decode($json);
    $nombre_fichero=dirname(__FILE__)."\\assets\\".$obj;
  
      if(isset($nombre_fichero)){
        $rtsa=unlink($nombre_fichero);

			if(isset($rsta)){
				$data = array(
					'status' => 'success',
					'msj' => 'Imagen borrada.'
				);
				$format = (object) $data;
				$json = json_encode($format); 
				echo $json; 
			}else{
				$data = array(
					'status' => 'error',
					'msj' => 'Error al borrar imagen.'
				);
				$format = (object) $data;
				$json = json_encode($format); 
				echo $json; 
			}
	}else{
		$data = array(
			'status' => 'error',
			'msj' => 'No se recibio ninguna imagen'
		);
		$format = (object) $data;
		$json = json_encode($format); 
		echo $json; 
	}
?>
