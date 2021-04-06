import { Component, OnInit} from '@angular/core';
import { Categorias } from '../../core/models/categorias';
import { ServiceGeneral } from '../../core/servicios-generales/service-general.service';


@Component({
    selector: 'nav-component',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss'],
  })

  export class NavComponent implements OnInit {

    categorias: Categorias[]=[];
    toggler;
    menuPaginaI;
    mostrar=false;
    
    constructor( public _servicioGeneral:ServiceGeneral){
      this.toggler = document.querySelector('.menu__toggler');
      this.menuPaginaI= document.querySelector('.menuPaginaI');
      this.obtenerCategoria();
    }

    ngOnInit():void {
    }

    mostrarSubmenuPaginaI(){
      this.mostrar=true;
    }

    obtenerCategoria(){
      this._servicioGeneral.obtener_categoria().subscribe(res => { 
        this.mostrarCategorias(res);
        console.log("res", res)
     })
    }  

    mostrarCategorias(res){
      let i; 
      for(i=0;i<res.length;i++){
                this.categorias.push(res[i]);
                this.categorias.values.toString;
                console.log("categ", this.categorias[i])
          }
    }
      
    elegido(d :Categorias){
      this._servicioGeneral.setCatgeoriasElegida(d);
      this._servicioGeneral.suscribeOnChange(d);
      console.log("categoria legida", d)
    }

}
  