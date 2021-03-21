import { Component, OnInit , Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceGeneral } from '../../../servicios-generales/service-general.service';
import { Publicaciones } from 'src/app/models/publicaciones';


@Component({
    selector: 'lista-prod-admin',
    templateUrl: './lista-prod-admin.html',
    styleUrls: ['./lista-prod-admin.scss']
  })

  export class ListaProdAdmin implements OnInit {

    @Output() PasameId = new EventEmitter();

    publicaciones :Publicaciones[] = [];
    imgDefecto:string;
    p:Publicaciones;
    temp;

    constructor(private _servicioG:ServiceGeneral, private http: HttpClient) {
      console.log("funcionando servicio");
      this.traerDatosPublicaciones();
     }
     
    ngOnInit(): void {}
  
    traerDatosPublicaciones(){
        this._servicioG.traerDatos().subscribe(res => { 
          console.log(res);
          this.mostrarDatosPublicaciones(res);
       })
    }
  
    mostrarDatosPublicaciones(res:[]){
       for(let i=0;i<res.length;i++){
                 this.publicaciones.push(res[i]);
                 console.log("a", this.publicaciones[i])
                 this.publicaciones.values.toString;
                 if(this.publicaciones[i].nombreImagen==null){
                  this.publicaciones[i].nombreImagen='default.jpg'
                }
           }
    }

    enviarId(p){
      this.PasameId.emit(p);
      return false;
    }

    publicar(p){
      this._servicioG.guardarPublicacionParaScreenShot(p);
      this.p=p; 
      console.log(p)
    }

    eliminar(p){
      this._servicioG.eliminar(p).subscribe(
        p=>{
          if(p['resultado']=='OK'){
            alert("SE ELIMINO EXITOSAMENTE")
            console.log(p['mensaje']);
          }else{ console.log("NO SE PUDO CONECTAR");}
        }
      );   
      console.log("id:", p);
      this._servicioG.borrarArchivoServidor(p.nombreImagen).subscribe(
        datos=>{
          if(datos['resultado']=='OK'){
            console.log(datos['mensaje']);
          }else{ console.log("NO SE PUDO CONECTAR CON EL SERVIDOR");
        }}
      ); 
  }

}
  
  