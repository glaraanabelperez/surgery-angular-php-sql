import { Component, OnInit , Input} from '@angular/core';
import { Publicaciones } from 'src/app/core/models/publicaciones';
import { ElementRef, ViewChild } from '@angular/core';
import { ServiceGeneral } from 'src/app/core/servicios-generales/service-general.service';
import html2canvas from 'html2canvas'
// declare var html2canvas: Html2CanvasStatic;

@Component({
    selector: 'app-publicarInstagram',
    templateUrl: './publicarInstagram.component.html',
    styleUrls: ['./publicarInstagram.component.scss']
  })
  export class PublicarInstagram implements OnInit {
    @ViewChild('canvas') canvas: ElementRef;
    @ViewChild('downloadLink') downloadLink: ElementRef;

    p:Publicaciones ;
    temp;
    
    constructor(private _servicio:ServiceGeneral ) {
      this.obtenerDatosParaScreenShot(); 
    }
     
    ngOnInit(): void {
    }

    redireccion() {
      window.history.back();
    }

    foto(){    
        window.scrollTo(0,0);
        
        // html2canvas(document.body).then(canvas => {
        html2canvas(document.getElementById('screen')).then(canvas => {
        this.canvas.nativeElement.src = canvas.toDataURL();
        console.log(this.canvas)
        this.downloadLink.nativeElement.href = canvas.toDataURL('image/png');
        this.downloadLink.nativeElement.download = 'marble-diagram.png';
        this.downloadLink.nativeElement.click();
        clearTimeout(this.temp);
        this.temp = setTimeout(this.redireccion, 500);
      });
    }

  obtenerDatosParaScreenShot(){
    this.p=this._servicio.obtenerDatosPubliScreenShot(); 
    console.log("p de instagram", this.p); 
  }

}
  
  