import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pedidos } from '../models/publicaciones-admin';


@Injectable({
  providedIn: 'root'
})
export class ServicePedidos {

  pedidos :Pedidos[] = [];

  constructor(private http: HttpClient) { 
    console.log("funcionando servicio pedidos");
  }
  

  // traerDatos(){    
  //   return this.http.get<[]>(`${this.url}select.php`);
  //   }

  //   eliminar(p){
  //     return  this.http.post(`${this.url}eliminar.php`, JSON.stringify(p) );
  //   }

    agregarPedido(p){
      this.pedidos.push(p);
      localStorage.setItem('pedido', JSON.stringify(this.pedidos));
      console.log(localStorage.getItem('pedido'))
    }

    // setCantidad(pos){
    //   console.log(this.pedidos[pos].cantidad+=1);
    // }

    eliminarPedido(pos){
      this.pedidos.splice(pos, 1);
      localStorage.setItem('pedido', JSON.stringify(this.pedidos));      
      console.log("eliminado:")
      console.log(localStorage.getItem('pedido'))

    }

    obtenerPedido(){
      return this.pedidos;
    }


  // ///////////////
  //   insertarDatos(p){
  //     return  this.http.post(`${this.url}insertar.php`, JSON.stringify(p));
  // }

    // editarDatos(p){
    //   console.log("p", )
    //   return  this.http.post(`${this.url}editar.php`, JSON.stringify(p));
    // }

    // guardarArchivoServidor(datos){
    //   return  this.http.post(`${this.url2}insertarArchivoServidor.php`, datos);
    // }

    // borrarArchivoServidor(datos){
    //   return  this.http.post(`${this.url2}borrarArchivoServidor.php`, JSON.stringify(datos));
    // }

    // setOrientacionVertical(result:boolean){
    //   this.vertical=result;
    // }

    // setOrientacionHorizontal(result:boolean){
    //   this.horizontal=result;
    // }

    // setOrientacionCuadrada(result:boolean){
    //   this.cuadrada=result;
    // }

}