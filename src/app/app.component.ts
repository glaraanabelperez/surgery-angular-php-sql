import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ObjetoCategoria } from './models/objeto-categoria.model';
import { ApiDatos } from './models/api-datos.model';
import { ServiceCategoriasEstado } from './protected/servicios-categorias-estados/service-categroias-estado.service';
import { Console } from 'console';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {

  title = 'mi-tienda';
  updates: any[];


  constructor(){ 
  }

  ngOnInit(): void {}



}
