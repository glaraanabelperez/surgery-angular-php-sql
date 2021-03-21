
import { Subject, BehaviorSubject } from 'rxjs';
import { ObjetoCategoria } from './objeto-categoria.model';

export class ApiDatos{
    categroiasSelectedVector:ObjetoCategoria[];
    categoriaObjeto:ObjetoCategoria;
    categoriaObserver:Subject <ObjetoCategoria> =new BehaviorSubject<ObjetoCategoria>(null);

    constructor(){
        this.categroiasSelectedVector=[];
    }

    add(x:ObjetoCategoria){
           this.categroiasSelectedVector.push(x);
            console.log("se agrego exitosamente a api");
    }

    getAll(){
        // return this.listaCategorias;
        return this.categroiasSelectedVector;

    }

    setCategoriaElegiga(id:number){
       return this.categoriaObjeto=this.categroiasSelectedVector.filter(function(d) {return d.getCodigo_categorias()=== id; })[0];
    }

    getCategoriaObjeto(){
        return this.categoriaObjeto;
    }
////////////////////////////////
    getObserver(){
        return this.categoriaObserver
    }

    elegir(d :ObjetoCategoria){
        this.categroiasSelectedVector.forEach(x =>x.setSelected(false));
        d.setSelected(true);
        this.categoriaObserver.next(d);
       }

    suscribeOnChange(fn){
        this.categoriaObserver.subscribe(fn);
    }

}