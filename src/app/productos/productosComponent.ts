import { Component, OnInit } from "@angular/core";
import { Publicaciones } from '../models/publicaciones';
import { ServiceGeneral } from '../servicios-generales/service-general.service';

@Component({
    selector: 'productos_component',
    templateUrl: './productosComponent.html',
    styleUrls: ['./productosComponent.scss'],

  })

  export class ProductosComponent implements OnInit {
    
    constructor( public _servicioGeneral:ServiceGeneral){
    }

    ngOnInit():void {
    }

}
  