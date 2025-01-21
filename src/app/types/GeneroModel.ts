export class GeneroModel {
    id:number=0;
    descripcion:string="";
    estado:number=1;
    createdAt:Date=new Date();
    updatedAt:Date=new Date();
    
    static createModel (model:GeneroModel):GeneroCreateModel{
        return new GeneroCreateModel(model);
    }

    static updateModel (model:GeneroModel):GeneroUpdateModel{
        return new GeneroUpdateModel(model);
    }

}

export class GeneroCreateModel {
    descripcion:string;
    constructor(genero:GeneroModel=new GeneroModel()){
        this.descripcion = genero.descripcion;
    }
}

export class GeneroUpdateModel {
    id:number;
    descripcion:string;
    estado:number;
    constructor(genero:GeneroModel=new GeneroModel()){
        this.id = genero.id;
        this.descripcion = genero.descripcion;
        this.estado = genero.estado;
    }
}