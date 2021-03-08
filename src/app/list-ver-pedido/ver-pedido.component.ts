import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth-services/auth.service';
import {Router} from '@angular/router';
import { ServicePedidos } from '../servicios-pedidos/service-pedidos.service';
import { Pedidos } from '../models/publicaciones-admin';

@Component({
  selector: 'ver-pedido',
  templateUrl: './ver-pedido.component.html',
  styleUrls: ['./ver-pedido.component.scss']
})
export class VerPedido implements OnInit {

  pedidosTodos:Pedidos[];
  mensaje="";
  constructor( private _service:ServicePedidos, private router:Router) { 
    this.pedidosTodos=this._service.obtenerPedido();
    console.log(this.pedidosTodos)
    if(this.pedidosTodos.length==0){
      this.mensaje="SU PEDIDO SE ENCUENTRA VACIO"
    }
  }

  ngOnInit(): void {
  }

  redireccion(){
    this.router.navigateByUrl('/list-card');
  }

  eliminar(i){
    console.log("index", i);
    this._service.eliminarPedido(i);
  }

}
