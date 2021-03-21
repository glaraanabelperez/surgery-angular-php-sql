import { Component, EventEmitter, Injector, Input, OnInit, Output, ViewChild} from '@angular/core';
import { Observable } from 'rxjs';
import { ListCardComponent } from '../lista-card/list-card.component';
import { ApiDatos } from '../models/api-datos.model';
import { ObjetoCategoria } from '../models/objeto-categoria.model';
import { Publicaciones } from '../models/publicaciones';
import { ServiceCategoriasEstado } from '../protected/servicios-categorias-estados/service-categroias-estado.service';
import { ServiceGeneral } from '../servicios-generales/service-general.service';
import { ServicePedidos } from '../servicios-pedidos/service-pedidos.service';


@Component({
    selector: 'nav-component',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss'],
    providers: [ApiDatos]
  })

  export class NavComponent implements OnInit {
    @ViewChild(ListCardComponent) listaProductos: ListCardComponent;

    toggler;
    menuPaginaI;
    mostrar=false;
    verPedido=false;
    productoCard=false;

    constructor(private _servicioC:ServiceCategoriasEstado, 
      public apiDatos:ApiDatos, public _serviciosPedidos: ServicePedidos, public serviceG:ServiceGeneral){
        this.obtenerCategorias();
        this.toggler = document.querySelector('.menu__toggler');
        this.menuPaginaI= document.querySelector('.menuPaginaI');
    }
    ngOnInit():void {
    }

    mostrarSubmenuPaginaI(){
        if(this.mostrar==true){
            this.mostrar=false;
        }else{
            this.mostrar=true;
        }
    }

    mostrarPedido(){
      if(this.verPedido==true){
        this.verPedido=false;
      }else{
          this.verPedido=true;
      }
    }

    mostrarProductoCard(){
      if(this.productoCard==true){
        this.productoCard=false;
      }else{
          this.productoCard=true;
      }
    }

    obtenerCategorias(){
        this._servicioC.obtener_categoria().subscribe(res => { 
          this.mostrarCategorias(res);
          console.log("res", res)
       })
      }   
    mostrarCategorias(res){
      for(let i=0;i<res.length;i++){
          let objetoNew= new ObjetoCategoria(res[i].codigo_categoria, res[i].descripcion, false, "proeba");
          this.apiDatos.add(objetoNew);
          }
    }
      
    elegido(d :ObjetoCategoria){
      this.apiDatos.setCategoriaElegiga(d.codigo_categoria);
      this.listaProductos.establecerCategoria(d);
    }

    verPublicacion(d :Publicaciones){
      this.serviceG.setVisualizarCard(d);
      console.log(this.serviceG.getVisualizarCard());
      this.productoCard=true;
      console.log(this.productoCard)
    }
}
  