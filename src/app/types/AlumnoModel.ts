import { GeneroModel } from "./GeneroModel";
import { TipoDocumentoModel } from "./TipoDocumentoModel";

export class AlumnoModel {
    id : number = 0;
    nombres : string = '';
    apellido_paterno : string = '';
    apellido_materno : string = '';
    email : string = '';
    fecha_nacimiento : Date = new Date();
    numero_documento : string = '';
    id_genero : number = 0;
    id_tipo_documento : number = 0;
    estado : number = 1;
    created_at : Date = new Date();
    updated_at? : Date;
    genero : GeneroModel = new GeneroModel();
    tipo_documento : TipoDocumentoModel = new TipoDocumentoModel();

} 

export class AlumnoCreateModel {
    nombres : string = '';
    apellido_paterno : string = '';
    apellido_materno : string = '';
    email : string = '';
    fecha_nacimiento : Date = new Date();
    numero_documento : string = '';
    id_genero : number = 0;
    id_tipo_documento : number = 0;

    constructor(model:AlumnoModel=new AlumnoModel()){
        this.nombres = model.nombres
        this.apellido_paterno = model.apellido_paterno
        this.apellido_materno = model.apellido_materno
        this.email = model.email
        this.fecha_nacimiento = model.fecha_nacimiento
        this.numero_documento = model.numero_documento
        this.id_genero = model.id_genero
        this.id_tipo_documento = model.id_tipo_documento
    }
}

export class AlumnoUpdateModel {
    nombres : string = '';
    apellido_paterno : string = '';
    apellido_materno : string = '';
    email : string = '';
    fecha_nacimiento : Date = new Date();
    numero_documento : string = '';
    id_genero : number = 0;
    id_tipo_documento : number = 0;
    estado : number;

    constructor(model:AlumnoModel=new AlumnoModel()){
        this.nombres = model.nombres
        this.apellido_paterno = model.apellido_paterno
        this.apellido_materno = model.apellido_materno
        this.email = model.email
        this.fecha_nacimiento = model.fecha_nacimiento
        this.numero_documento = model.numero_documento
        this.id_genero = model.id_genero
        this.id_tipo_documento = model.id_tipo_documento
        this.estado = model.estado
    }
}