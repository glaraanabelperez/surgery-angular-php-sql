import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';
import { Pedidos } from '../models/Pedidos';


@Injectable({
  providedIn: 'root'
})
//HAY UN OBSERVABLE SOLO DE EJEMPLO;
export class ServicePedidos {
  // private pedidos$ = new Subject<Pedidos[]>();
  pedidos :Pedidos[] = [];
  contador;

  constructor(private http: HttpClient) { 
    console.log("funcionando servicio pedidos");
    this.contador=0;
  }
  
    agregarPedido(p){
      this.pedidos.push(p);
      localStorage.setItem('pedido', JSON.stringify(this.pedidos));
      // this.pedidos$.next(this.pedidos);
      console.log(localStorage.getItem('pedido'))
    }

    incrementarContador(){
      this.contador=this.contador+1;
    }

    decrementarContador(){
      this.contador=this.contador-1;
    }

    getContador(){
      return this.contador;
    }

    eliminarPedido(pos){
      this.pedidos.splice(pos, 1);
      localStorage.setItem('pedido', JSON.stringify(this.pedidos));      
      console.log("eliminado:")
      console.log(localStorage.getItem('pedido'));
      this.contador=this.contador-1;
    }

    obtenerPedido(){
      return this.pedidos;
    }
    obtenerTamanioVectorPedido(){
      return this.pedidos.length;
    }
    // getPedidos$(): Observable<Pedidos[]> {
    //   return this.pedidos$.asObservable();
    // }


}