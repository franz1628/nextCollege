export class TipoDocumentoModel {
    id:number=0;
    descripcion:string="";
    estado:number=1;
    created_at:Date=new Date();
    updated_at?:Date;
}

export class TipoDocumentoCreateModel {
    descripcion:string;
    constructor(model:TipoDocumentoModel=new TipoDocumentoModel()){
        this.descripcion = model.descripcion;
    }
}

export class TipoDocumentoUpdateModel {
    id:number;
    descripcion:string;
    estado:number;
    constructor(model:TipoDocumentoModel=new TipoDocumentoModel()){
        this.id = model.id;
        this.descripcion = model.descripcion;
        this.estado = model.estado;
    }
}