import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Publicaciones } from '../models/publicaciones';


@Injectable({
  providedIn: 'root'
})
export class ServiceGeneral {

  publicacionParaScreenShot:Publicaciones;

  
  url='http://localhost/angular/inmo - copia/php-app/';
  url2='http://localhost/angular/inmo - copia/src/';
  // url='/php-app/';
  // url2='/';
  vertical:boolean;
  cuadrada: boolean;
  horizontal:boolean;

  constructor(private http: HttpClient) { 
    console.log("funcionando servicio general");
    this.traerDatos();
  }

    traerDatos(){    
    return this.http.get<[]>(`${this.url}select.php`);
    }

    eliminar(p){
      return  this.http.post(`${this.url}eliminar.php`, JSON.stringify(p) );
    }

    guardarPublicacionParaScreenShot(p){
      this.publicacionParaScreenShot=p;
    }

    obtenerDatosPubliScreenShot(){
      return this.publicacionParaScreenShot;
    }

  ///////////////
    insertarDatos(p){
      return  this.http.post(`${this.url}insertar.php`, JSON.stringify(p));
  }

    editarDatos(p){
      console.log("p", )
      return  this.http.post(`${this.url}editar.php`, JSON.stringify(p));
    }

    guardarArchivoServidor(datos){
      return  this.http.post(`${this.url2}insertarArchivoServidor.php`, datos);
    }

    borrarArchivoServidor(datos){
      return  this.http.post(`${this.url2}borrarArchivoServidor.php`, JSON.stringify(datos));
    }

    setOrientacionVertical(result:boolean){
      this.vertical=result;
    }

    setOrientacionHorizontal(result:boolean){
      this.horizontal=result;
    }

    setOrientacionCuadrada(result:boolean){
      this.cuadrada=result;
    }

}