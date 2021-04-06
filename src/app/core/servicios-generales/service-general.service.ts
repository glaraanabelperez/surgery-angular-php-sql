import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Categorias } from '../models/categorias';
import { Publicaciones } from '../models/publicaciones';


@Injectable({
  providedIn: 'root'
})
export class ServiceGeneral {

  estado: String[]=['Activada', 'Desactivada'];
  publicacionParaScreenShot:Publicaciones;
  objetoParaElCardProd:Publicaciones;

  categoriaElegida2:Categorias;
  categoriaSubject:Subject <Categorias> = new  Subject <Categorias>();

  verPedido:boolean;
  verPedidoSubject:Subject <boolean> = new Subject <boolean>();


  url='http://localhost/angular/mi-tienda/php-app/';
  // url2='http://localhost/angular/mi-tienda/src/';
  url2='http://localhost/Github/miTienda-codigo-Crud-Angular/src/';

  // url='/php-app/';
  // url2='/';
  
  constructor(private http: HttpClient) { 
    
    console.log("funcionando servicio general");
    this.traerDatos();
    this.categoriaSubject.subscribe((value) =>{
      this.categoriaElegida2=value;
    })
    this.verPedidoSubject.subscribe((value) =>{
      this.verPedido=value;
    })
  }
    //BBDD
    traerDatos(){    
    return this.http.get<[]>(`${this.url}select.php`);
    }

    obtener_categoria(){
      console.log("llega hasta aca");
      return this.http.get<[]>(`${this.url}selectCategorias.php`);
    }

    obtener_estado(){
      return this.estado;
    }
    
    eliminar(p){
      return  this.http.post(`${this.url}eliminar.php`, JSON.stringify(p) );
    }

    insertarDatos(p){
      return  this.http.post(`${this.url}insertar.php`, JSON.stringify(p));
    }

    editarDatos(p){
      console.log("pPPPPPP",p )
      return  this.http.post(`${this.url}editar.php`, JSON.stringify(p));
    }
   
    //CONSULTAS SERVIDOR
    guardarArchivoServidor(datos){
      return  this.http.post(`${this.url2}insertarArchivoServidor.php`, datos);
    }

    borrarArchivoServidor(datos){
      return  this.http.post(`${this.url2}borrarArchivoServidor.php`, JSON.stringify(datos));
    }

    //INTERFACE CATEGROIAS
    setCatgeoriasElegida(c){
      this.categoriaElegida2=c;
    }

    suscribeOnChange(c){
        this.categoriaSubject.next(c);
    }

    getCategroiaElegida(){
      return this.categoriaElegida2;
    }
    
    //PEDIDOS
    setVerPedido(b: boolean){
      this.verPedido=b;
    }

    suscribeOnChangePedido(b : boolean){
        this.verPedidoSubject.next(b);
    }

    getVerPedido(){
      return this.verPedido;
    }


    //MODEL PUBLICACIONES
    guardarPublicacionParaScreenShot(p){
      this.publicacionParaScreenShot=p;
    }

    obtenerDatosPubliScreenShot(){
      return this.publicacionParaScreenShot;
    }

    //VISUALIZAR CARD
    setObjetoParaCardProd(p){
      this.objetoParaElCardProd=p;
    }

    getObjetoParaCardProd(){
      return this.objetoParaElCardProd;
    }

}