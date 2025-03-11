export class CursoModel {
    id:number=0;
    nombre:string="";
    estado:number=1;
    created_at:Date=new Date();
    updated_at?:Date;
}

export class CursoCreateModel {
    nombre:string;
    constructor(model:CursoModel=new CursoModel()){
        this.nombre = model.nombre;
    }
}

export class CursoUpdateModel {
    nombre:string;
    estado:number;
    constructor(model:CursoModel=new CursoModel()){
        this.nombre = model.nombre;
        this.estado = model.estado;
    }
}