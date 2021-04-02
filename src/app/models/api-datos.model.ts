
import { ObjetoCategoria } from './objeto-categoria.model';

export class ApiDatos{

    categroiasSelectedVector:ObjetoCategoria[];
    categoriaObjeto:ObjetoCategoria;
    // categoriaObserver:Subject <ObjetoCategoria> =new BehaviorSubject<ObjetoCategoria>(null);

    constructor(){
        this.categroiasSelectedVector=[];
    }

    add(x:ObjetoCategoria){
           this.categroiasSelectedVector.push(x);
            console.log("se agrego exitosamente a api");
    }

    getAll(){
        // return this.listaCategorias;
        return this.categroiasSelectedVector[0];

    }

    

}