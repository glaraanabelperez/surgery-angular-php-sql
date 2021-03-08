import { HttpClient } from '@angular/common/http';
import { Component, OnInit , EventEmitter, Output} from '@angular/core';
import { ESTALE } from 'constants';
import { Publicaciones } from '../models/publicaciones';
import { Pedidos } from '../models/publicaciones-admin';
import { ServiceGeneral } from '../servicios-generales/service-general.service';
import { ServicePedidos } from '../servicios-pedidos/service-pedidos.service';


@Component({
    selector: 'list-card-component',
    templateUrl: './list-card.component.html',
    styleUrls: ['./list-card.component.scss']
  })
  export class ListCardComponent implements OnInit {
    @Output() PasameId = new EventEmitter();

    
    publicaciones :Publicaciones[] = [];
    imgDefecto:string;
    cant;

    
    constructor(private _servicio:ServiceGeneral,  private http: HttpClient, private _servicioPedidos:ServicePedidos) {
      this.traerDatosPublicaciones();
      this.cant=this._servicioPedidos.obtenerPedido().length;
     }
     
    ngOnInit(): void {}
  
    traerDatosPublicaciones(){
        this._servicio.traerDatos().subscribe(res => { 
          console.log(res);
          this.mostrarDatosPublicaciones(res);
       })
    }
  
    mostrarDatosPublicaciones(res:[]){
       for(let i=0;i<res.length;i++){
                 this.publicaciones.push(res[i]);
                 this.publicaciones.values.toString;
                 if(this.publicaciones[i].nombreImagen==null){
                  this.publicaciones[i].nombreImagen='default.jpg'
                  console.log("IMAGEN", this.publicaciones[i].nombreImagen);
                }
           }
    }

    agregarPedido(p){
      let pedido={
        id: p.id,
        cantidad:1,
        titulo:p.titulo,
      }
      this._servicioPedidos.agregarPedido(pedido);
      this.cant=this.cant+1;
      window.scrollTo(0,0);
      console.log("pedidos guardados", this._servicioPedidos.obtenerPedido());
      // return false;
    }
    
}
  
  