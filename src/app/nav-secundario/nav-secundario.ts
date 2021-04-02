import { Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import { ApiDatos } from '../models/api-datos.model';
import { Categorias } from '../models/categorias';


@Component({
    selector: 'nav-secundario',
    templateUrl: './nav-secundario.html',
    styleUrls: ['./nav-secundario.scss'],
    providers: [ApiDatos]
  })

  export class NavSecundario implements OnInit {
    @Input()categoria:Categorias;
    @Output() onClicked:EventEmitter<Categorias>;

    constructor(){
        this.onClicked=new EventEmitter();
    }

    ngOnInit():void {
    }

    ir(){
        this.onClicked.emit(this.categoria);
        return false;
      }

}
  
  