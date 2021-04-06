import { Component, OnInit} from '@angular/core';
import { Publicaciones } from '../../core/models/publicaciones';
import { ServiceGeneral } from '../../core/servicios-generales/service-general.service';



@Component({
    selector: 'cardProd-component',
    templateUrl: './card-prod.component.html',
    styleUrls: ['./card-prod.component.scss']
  })
  export class CardProdComponent implements OnInit {
    p:Publicaciones;

    constructor(private serviceG:ServiceGeneral) {
      this.p=this.serviceG.getObjetoParaCardProd();
      console.log("Card", this.serviceG.getObjetoParaCardProd())
     }
     
    ngOnInit(): void {
    }
  
}
  
  