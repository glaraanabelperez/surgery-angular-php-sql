import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ServiceGeneral } from 'src/app/core/servicios-generales/service-general.service';
import { Categorias } from 'src/app/core/models/categorias';
import { Publicaciones } from 'src/app/core/models/publicaciones';
import { Router } from '@angular/router';

declare var $:any;


@Component({
  selector: 'app-protected',
  templateUrl: './protected.component.html',
  styleUrls: ['./protected.component.scss']
})

export class ProtectedComponent implements OnInit {
  estado: String[]=[];
  fechaHoy:any;
  categoriasObtenidas :Categorias[] = [];
  publicacionEditar: Publicaciones[] = [];

  uploadForm: FormGroup;
  accionBtnFormulario:string;
  imgEditarForm:any;
  imgBorrarServidor:any;
  imagenPrevisualizar: File;
  imgURL: any;
  message: string;
  temp;

  constructor( private _servicioGeneral:ServiceGeneral, private formBuilder:FormBuilder,
     @Inject(DOCUMENT) private document: Document, private router: Router) {

    this.estado= _servicioGeneral.obtener_estado();
    this.obtenerCategorias();
    this.getFecha();
    console.log("fecha", this.fechaHoy);
    clearTimeout(this.temp);
    this.temp = setTimeout(this.nota, 500);
    this.accionBtnFormulario="nuevo";
    this.uploadForm=this.formBuilder.group({
      codigo_producto:[null],
      categorias:['',[Validators.required]],
      estado:['',[Validators.required]],
      titulo:['',[Validators.required]],
      subtitulo:['',[Validators.required]],
      descripcion:['', [Validators.required]],
      nombreImagen: [null],
      fechaAlta:[this.fechaHoy],
      precio:[null],
    });
   }

  ngOnInit(): void {
      
  }

  get f(){ return this.uploadForm.controls;}

  nota(){
    alert("EL TEXTO ES EL PILAR MAESTRO, USA TÍTULOS CORTOS Y CLAROS PARA LOGRAR UN TAMAÑO"
    + "VISIBLE Y ACORDE AL DISEÑO.")
  }
  // FECHA
  getFecha(){
    var d = new Date();
    this.fechaHoy = d.getFullYear() + "/" + (d.getMonth()+1) + "/" + d.getDate();
  }

  visualizarNuevaImagenSeleccionada(){
    //AL EDITAR LA IMAGEN
    if(this.imgEditarForm){
      this.imgBorrarServidor=this.imgEditarForm;
      this. imgEditarForm=null;
    }
  }
  // IMAGEN EN FORM && SERVIDOR
  guardarImagenEnFormGroup(files){
    this.imagenPrevisualizar=files;
    let imagen = files[0];
    this.uploadForm.controls['nombreImagen'].setValue(imagen ? imagen.name : ''); // <-- Set Value for Validation
    // this.uploadForm.controls['avatar'].setValue(imagen ? imagen.name : ''); 
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

  borrarArchivoServidor(): boolean {
    this._servicioGeneral.borrarArchivoServidor(this.imgBorrarServidor) 
    .subscribe( res=> console.log(res), err=> console.log(err));
    return false;
}

guardarArchivoServidor(files):boolean{
  let fileImg=new FormData();
  fileImg.append('file', files[0]);
  console.log("IMAGEN a guardar", files[0]);
  this._servicioGeneral.guardarArchivoServidor(fileImg)
    .subscribe( res=> console.log(res), err=> console.log(err));
    return false;
}

  obtenerCategorias(){
    this._servicioGeneral.obtener_categoria().subscribe(res => { 
      console.log("res", res);
      this.mostrarCategorias(res);
   })
}

  mostrarCategorias(res:[]){
    for(let i=0;i<res.length;i++){
      this.categoriasObtenidas.push(res[i]);
      this.categoriasObtenidas.values.toString;
     }
  }

  insertarDatos(){
    console.log(this.fechaHoy);
    this._servicioGeneral.insertarDatos(this.uploadForm.value).subscribe(
      datos=>{
        if(datos['resultado']=='OK'){
        }else{ console.log("NO SE PUDO CONECTAR");}
      }
    );
  }

  editarDatos() {
    this._servicioGeneral.editarDatos(this.uploadForm.value).subscribe(
      datos=>{
        if(datos['resultado']=='OK'){
          console.log(datos['resultado']);
        }else{ console.log("NO SE PUDO CONECTAR");}
      }
    );  
  }

  submitted=false;
    onSubmit(){
      this.submitted=true;
      if(this.uploadForm.invalid){
        return;
      }else{
        if(this.accionBtnFormulario=="editar"){
          if(this.imgURL!=null){
            this.borrarArchivoServidor();
            this.guardarArchivoServidor(this.imagenPrevisualizar);
            console.log("img previsualizar line 177", this.imagenPrevisualizar);
          }
          this.editarDatos();
          alert('Publicacion Editada');
        }
        if(this.accionBtnFormulario=="nuevo"){
          this.guardarArchivoServidor(this.imagenPrevisualizar);
          console.log("img previsualizar line 177", this.imagenPrevisualizar)
          this.insertarDatos();
          alert('Publicacion Cargada');
        }
      }
      this.accionBtnFormulario="nuevo";
         this.limpiar();
    }

    limpiar(){
      // this.document.location.reload(); 
      this.router.navigate(['/protected']);
    }

    editarPubliId(e: Publicaciones){
      this.uploadForm.controls['codigo_producto'].setValue(e.codigo_producto ? e.codigo_producto: ''); // <-- Set Value for Validation
      this.uploadForm.controls['categorias'].setValue(e.categorias ? e.categorias: ''); // <-- Set Value for Validation
      this.uploadForm.controls['estado'].setValue(e.estado ? e.estado : ''); // <-- Set Value for Validation
      this.uploadForm.controls['titulo'].setValue(e.titulo ? e.titulo : ''); // <-- Set Value for Validation
      this.uploadForm.controls['subtitulo'].setValue(e.subtitulo ? e.subtitulo : ''); // <-- Set Value for Validation
      this.uploadForm.controls['descripcion'].setValue(e.descripcion ? e.descripcion : ''); // <-- Set Value for Validation
      this.uploadForm.controls['nombreImagen'].setValue(e.nombreImagen ? e.nombreImagen : ''); // <-- Set Value for Validation
      this.uploadForm.controls['fechaAlta'].setValue(e.fechaAlta ? e.fechaAlta : ''); // <-- Set Value for Validation
      this.uploadForm.controls['precio'].setValue(e.precio ? e.precio : ''); // <-- Set Value for Validation
      window.scrollTo(0,0);
      if(e.nombreImagen!=null){
        this.imgEditarForm=e['nombreImagen'];
      }
      this.accionBtnFormulario="editar";
      console.log("categorias", e.categorias);
      console.log("uploadForm", this.uploadForm.value);

    }

}


