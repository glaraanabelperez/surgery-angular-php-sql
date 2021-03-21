import { Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import { ApiDatos } from '../models/api-datos.model';
import { ObjetoCategoria } from '../models/objeto-categoria.model';


@Component({
    selector: 'nav-secundario',
    templateUrl: './nav-secundario.html',
    styleUrls: ['./nav-secundario.scss'],
    providers: [ApiDatos]
  })

  export class NavSecundario implements OnInit {
    @Input()categoria:ObjetoCategoria;
    @Input()categoriaIndex:ObjetoCategoria;
    
    @Output() onClicked:EventEmitter<ObjetoCategoria>;

    constructor(public _apiDatos: ApiDatos){
        this.onClicked=new EventEmitter();
         // this.updates=[];
    }
    ngOnInit():void {
    }

    ir(){
        this.onClicked.emit(this.categoria);
        return false;
      }

}
  
  