import {Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ServiceCategorias {
 
  categoria: String[]=['Grasper', 'Otro'];
  estado: String[]=['Activada', 'Desactivada'];


  constructor() {
    console.log("funcionando servicio")
   }

  obtener_categoria(){
     return this.categoria;
   }

   obtener_estado(){
    return this.estado;
  }

 }
