import { Categorias } from "./categorias";

export class ObjetoCategoria implements Categorias {

    codigo_categoria: number;
    descripcion: string;

    constructor (codigo_categoria: number, descripcion: string){
      
      this.codigo_categoria=codigo_categoria;
      this.descripcion=descripcion;
    }

    getdescripcion(){
        return this.descripcion;
    }
    getCodigo_categorias(){
        return this.codigo_categoria;
    }
    
}

