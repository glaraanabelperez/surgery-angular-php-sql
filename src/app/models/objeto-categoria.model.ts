import { Categorias } from "./categorias";

export class ObjetoCategoria {
    codigo_categoria: number;
    descripcion: string;
    selected: boolean;
    prueba:string;
    private static nextPosicion:number=1;
    private posicionElgida:number;

    constructor (codigo_categoria: number, descripcion: string, selcted:boolean, prueba:string){
      this.codigo_categoria=codigo_categoria;
      this.descripcion=descripcion;
      this.selected=selcted;
      this.prueba=prueba;
      this.posicionElgida=ObjetoCategoria.nextPosicion;
      ObjetoCategoria.nextPosicion++;
    }

    getdescripcion(){
        return this.descripcion;
    }
    getCodigo_categorias(){
        return this.codigo_categoria;
    }

    setSelected(z:boolean){
        this.selected=z;
    }
    getSelected(): boolean{
        return this.selected;
    }

    getPosicionElegido(){
        return this.posicionElgida;
    }

    
   
}

