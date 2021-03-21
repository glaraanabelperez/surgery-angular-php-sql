import { HttpClient } from '@angular/common/http';
import { Component, OnInit , EventEmitter, Output, Input} from '@angular/core';
import { Publicaciones } from '../models/publicaciones';
import { ServiceGeneral } from '../servicios-generales/service-general.service';
import { ServicePedidos } from '../servicios-pedidos/service-pedidos.service';
import { ActivatedRoute, Params } from '@angular/router';
import { ApiDatos } from '../models/api-datos.model';



@Component({
    selector: 'list-card-component',
    templateUrl: './list-card.component.html',
    styleUrls: ['./list-card.component.scss']
  })
  export class ListCardComponent implements OnInit {
    publicaciones :Publicaciones[] = [];
    publicacionesXcategoria :Publicaciones[] = [];
    @Output() onClicked:EventEmitter<Publicaciones>;

    imgDefecto:string;
    categoriaEstablecida: any;
    categoriaEstablecida2;
    colorEstado; color1; color2;
    ver: string;
    
    constructor(private _servicio:ServiceGeneral,  private http: HttpClient, 
      private _servicioPedidos:ServicePedidos, public apiDatos: ApiDatos) {
        
        this.onClicked=new EventEmitter();
        this.color1='rgb(122, 226, 3)';
        this.color2='rgb(3, 226, 170)';
        this.colorEstado= this.color1;
        this.ver='none';
      }
     
     ngOnInit(): void {
    }

    traerCategoria(){
      this.categoriaEstablecida2=this.apiDatos.categoriaObjeto.codigo_categoria;
      console.log(this.categoriaEstablecida2)
      return this.categoriaEstablecida2;
    }

    establecerCategoria(value) {
      this.categoriaEstablecida = value.codigo_categoria;
      console.log("acacacaccacaca", this.categoriaEstablecida)
      this.traerDatosPublicaciones();
//METODOACCIONADO DESDE COMPONENTEPADRE
      }

    traerDatosPublicaciones(){
        this._servicio.traerDatos().subscribe(res => { 
          this.mostrarDatosPublicaciones(res);
       })
    }
  
    mostrarDatosPublicaciones(res:[]){
      let i; 
       for(i=0;i<res.length;i++){
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
        codigo_producto: p.codigo_producto,
        cantidad:1,
        titulo:p.titulo,
      }
        this._servicioPedidos.agregarPedido(pedido);
        console.log("pedidos guardados", this._servicioPedidos.obtenerPedido());
        this._servicioPedidos.incrementarContador();
        this.ver='block';
        
        if(this.colorEstado==this.color1){
          this.colorEstado=this.color2;
        }else{
          this.colorEstado=this.color1;
        }
    }

    verCard(p){
      this.onClicked.emit(p);
    }
    
    

}
  
  