import { HttpClient } from '@angular/common/http';
import {Injectable } from '@angular/core';
import { Categorias } from 'src/app/models/categorias';

@Injectable({
  providedIn: 'root'
})

export class ServiceCategoriasEstado {

  // url='http://localhost/angular/mi-tienda/php-app/';
  // url2='http://localhost/angular/mi-tienda/src/';

  url='/php-app/';
  url2='/';

  estado: String[]=['Activada', 'Desactivada'];
  categorias:Categorias []=[];

  constructor(private http: HttpClient) {
    console.log("funcionando servicio Categorias");
   }

  obtener_categoria(){
    return this.http.get<[]>(`${this.url}selectCategorias.php`);
   }

   obtener_estado(){
    return this.estado;
  }

 }
