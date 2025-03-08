export class GeneroModel {
    id:number=0;
    descripcion:string="";
    estado:number=1;
    created_at:Date=new Date();
    updated_at?:Date;
}

export class GeneroCreateModel {
    descripcion:string;
    constructor(model:GeneroModel=new GeneroModel()){
        this.descripcion = model.descripcion;
    }
}

export class GeneroUpdateModel {
    descripcion:string;
    estado:number;
    constructor(model:GeneroModel=new GeneroModel()){
        this.descripcion = model.descripcion;
        this.estado = model.estado;
    }
}