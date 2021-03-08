import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import { ServiceGeneral } from 'src/app/servicios-generales/service-general.service';
import {ServiceCategorias} from '../servicios-categorias/service-categroias.service';

declare var $:any;


@Component({
  selector: 'app-protected',
  templateUrl: './protected.component.html',
  styleUrls: ['./protected.component.scss']
})

export class ProtectedComponent implements OnInit {

  uploadForm: FormGroup;
  categoria: String[]=[];
  estado: String[]=[];
  accion:string="nuevo";
  fechaHoy: string;
  imgEditarForm:any;
  imgBorrarServidor:any;
  imagenPrevisualizar: File;
  imgURL: any;
  message: string;
  temp;

  constructor(private _servicio:ServiceCategorias, private router: Router, private _servicio2:ServiceGeneral, private formBuilder:FormBuilder, @Inject(DOCUMENT) private document: Document) {
    this.categoria= _servicio.obtener_categoria();
    this.estado= _servicio.obtener_estado();
    clearTimeout(this.temp);
     this.temp = setTimeout(this.nota, 500);
   }

  ngOnInit(): void {
    this.getFecha();
    this.uploadForm=this.formBuilder.group({
      id:[null],
      fecha:[this.fechaHoy],
      categorias:['',[Validators.required]],
      titulo:['',[Validators.required]],
      subtitulo:['',[Validators.required]],
      descripcion:['', [Validators.required]],
      avatar: [null],
      nombreImagen: [null],
      estado:['',[Validators.required]],
    });
  }

  nota(){
    alert("EL TEXTO ES EL PILAR MAESTRO, USA TÍTULOS CORTOS Y CLAROS PARA LOGRAR UN TAMAÑO"
    + "VISIBLE Y ACORDE AL DISEÑO.")
  }
  getFecha(){
    var d = new Date();
    this.fechaHoy = d.getFullYear() + "/" + (d.getMonth()+1) + "/" + d.getDate();
    console.log("fecha", this.fechaHoy)   
  }

  guardarImagenEnFormGroup(files){
    this.imagenPrevisualizar=files;
    let imagen = files[0];
    this.uploadForm.controls['nombreImagen'].setValue(imagen ? imagen.name : ''); // <-- Set Value for Validation
    this.uploadForm.controls['avatar'].setValue(imagen ? imagen.name : ''); 
  }
  
  guardarArchivoServidor(files){
      let fileImg=new FormData();
      fileImg.append('file', files[0]);
      this._servicio2.guardarArchivoServidor(fileImg).subscribe(
        datos=>{
          if(datos['resultado']=='OK'){
            console.log(datos['mensaje']);
          }else{ console.log("NO SE PUDO CONECTAR CON EL SERVIDOR");
        }
        }
      );
  }

  previsualizarImg(files){
    var img = files[0].type;
    this.visualizarNuevaImagenSeleccionada();

    if (files.length === 0){
      return;
    }else if (img.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return; 
    }else{
      this.guardarImagenEnFormGroup(files);
      var reader = new FileReader();
      reader.readAsDataURL(files[0]); 
      reader.onload = (_event) => { 
        this.imgURL = reader.result; // <-- Previsualizar
      }
    }
  }

  visualizarNuevaImagenSeleccionada(){
    if(this.imgEditarForm){
      this.imgBorrarServidor=this.imgEditarForm;
      this. imgEditarForm=null;
    }
  }

  get f(){ return this.uploadForm.controls;}

  insertarDatos(){
    this._servicio2.insertarDatos(this.uploadForm.value).subscribe(
      datos=>{
        if(datos['resultado']=='OK'){
          console.log(datos['mensaje']);
        }else{ console.log("NO SE PUDO CONECTAR");}
      }
    );
  }

  editarDatos() {
    console.log(this.uploadForm.value);
    this._servicio2.editarDatos(this.uploadForm.value).subscribe(
      datos=>{
        if(datos['resultado']=='OK'){
          console.log(datos['mensaje']);
        }else{ console.log("NO SE PUDO CONECTAR");}
      }
    );  }

  borrarArchivoServidor() {
    this._servicio2.borrarArchivoServidor(this.imgBorrarServidor).subscribe(
      datos=>{
        if(datos['resultado']=='OK'){
          console.log(datos['mensaje']);
        }else{ console.log("NO SE PUDO CONECTAR CON EL SERVIDOR");
      }}
  ); }

      
    submitted=false;
    onSubmit(){
      this.submitted=true;
      if(this.uploadForm.invalid){
        return;
      }else{
        if(this.accion=="editar"){
          if(this.imgURL!=null){
            this.guardarArchivoServidor(this.imagenPrevisualizar);
            console.log("imagen a guardar", this.imagenPrevisualizar)
            this.borrarArchivoServidor();
          }
          this.editarDatos();
          alert('Publicacion Editada');
        }
        if(this.accion=="nuevo"){
          this.guardarArchivoServidor(this.imagenPrevisualizar);
          alert('Publicacion Cargada');
          this.insertarDatos();
        }
        this.accion="nuevo";
         this.limpiar();
      }
    }
    
    limpiar(){
      // location.reload();
      this.document.location.reload(); 
      // this.router.navigate(['/protected']);
    }

    editarPubliId(e){
      this.uploadForm.controls['id'].setValue(e.id ? e.id : ''); // <-- Set Value for Validation
      this.uploadForm.controls['fecha'].setValue(e.fecha ? e.fecha : ''); // <-- Set Value for Validation
      this.uploadForm.controls['categorias'].setValue(e.categoria ? e.categoria : ''); // <-- Set Value for Validation
      this.uploadForm.controls['titulo'].setValue(e.titulo ? e.titulo : ''); // <-- Set Value for Validation
      this.uploadForm.controls['subtitulo'].setValue(e.subtitulo ? e.subtitulo : ''); // <-- Set Value for Validation
      this.uploadForm.controls['descripcion'].setValue(e.descripcion ? e.descripcion : ''); // <-- Set Value for Validation
      this.uploadForm.controls['nombreImagen'].setValue(e.nombreImagen ? e.nombreImagen : ''); // <-- Set Value for Validation
      this.uploadForm.controls['estado'].setValue(e.estado ? e.estado:''); // <-- Set Value for Validation
      window.scrollTo(0,0)
      if(e.nombreImagen!=null){
        this. imgEditarForm=e['nombreImagen'];
      }
      this.accion="editar";
      console.log("accion", this.accion);
      console.log("e",e );


    }

}


