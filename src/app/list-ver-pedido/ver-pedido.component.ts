import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {Router} from '@angular/router';
import { ServicePedidos } from '../servicios-pedidos/service-pedidos.service';
import { Pedidos } from '../models/Pedidos';

@Component({
  selector: 'ver-pedido',
  templateUrl: './ver-pedido.component.html',
  styleUrls: ['./ver-pedido.component.scss']
})
export class VerPedido implements OnInit {
  pedidosTodos:Pedidos[];
  pedido:string;
  okPedido;mensaje;

  constructor( private _service:ServicePedidos, private router:Router) { 
    this.pedidosTodos=this._service.obtenerPedido();
    console.log("pedidos", this.pedidosTodos);
    this.okPedido=false;
    if(this.pedidosTodos.length==0){
      this.mensaje="SU PEDIDO SE ENCUENTRA VACIO"
    }
  }

  ngOnInit(): void {
  }

  eliminar(i){
    console.log("index", i);
    this._service.eliminarPedido(i);
    this._service.contador=this._service.decrementarContador();
  }

  finalizarPedido(){
    this.okPedido=true;
    this.pedido=JSON.stringify(this.pedidosTodos);
    console.log(this.pedido);
  }

}
