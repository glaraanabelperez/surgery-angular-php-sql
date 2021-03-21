import { Component, OnInit} from '@angular/core';
import { Publicaciones } from '../models/publicaciones';
import { ServiceGeneral } from '../servicios-generales/service-general.service';



@Component({
    selector: 'cardProd-component',
    templateUrl: './card-prod.component.html',
    styleUrls: ['./card-prod.component.scss']
  })
  export class CardProdComponent implements OnInit {
    p:Publicaciones;

    constructor(private serviceG:ServiceGeneral) {
      this.p=this.serviceG.getVisualizarCard();
      console.log("acacaca card", this.serviceG.getVisualizarCard())
     }
     
    ngOnInit(): void {
    }
  
}
  
  