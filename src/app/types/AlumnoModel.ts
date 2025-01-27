export class AlumnoModel {
    id : number = 0;
    nombres : string = '';
    apellidoPaterno : string = '';
    apellidoMaterno : string = '';
    fechaNacimiento : Date = new Date();
    numeroDocumento : string = '';
    idGenero : number = 0;
    idTipoDocumento : number = 0;
    estado : number = 1;
    created_at : Date = new Date();
    updated_at? : Date;

}

export class AlumnoCreateModel {
    nombres : string;
    apellidoPaterno : string;
    apellidoMaterno : string;
    fechaNacimiento : Date;
    numeroDocumento : string;
    idGenero : number;
    idTipoDocumento : number;

    constructor(model:AlumnoModel=new AlumnoModel()){
        this.nombres = model.nombres
        this.apellidoPaterno = model.apellidoPaterno
        this.apellidoMaterno = model.apellidoMaterno
        this.fechaNacimiento = model.fechaNacimiento
        this.numeroDocumento = model.numeroDocumento
        this.idGenero = model.idGenero
        this.idTipoDocumento = model.idTipoDocumento
    }
}

export class AlumnoUpdateModel {
    id: number;
    nombres : string;
    apellidoPaterno : string;
    apellidoMaterno : string;
    fechaNacimiento : Date;
    numeroDocumento : string;
    idGenero : number;
    idTipoDocumento : number;
    estado : number;

    constructor(model:AlumnoModel=new AlumnoModel()){
        this.id = model.id
        this.nombres = model.nombres
        this.apellidoPaterno = model.apellidoPaterno
        this.apellidoMaterno = model.apellidoMaterno
        this.fechaNacimiento = model.fechaNacimiento
        this.numeroDocumento = model.numeroDocumento
        this.idGenero = model.idGenero
        this.idTipoDocumento = model.idTipoDocumento
        this.estado = model.estado
    }
}