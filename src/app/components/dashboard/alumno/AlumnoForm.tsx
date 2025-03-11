import Button from "@/components/ui/Button"
import Input from "@/components/ui/Input"
import Select from "@/components/ui/Select"
import { GeneroService } from "@/services/GeneroService"
import { TipoDocumentoService } from "@/services/TipoDocumentoService"
import { AlumnoModel } from "@/types/AlumnoModel"
import { GeneroModel } from "@/types/GeneroModel"
import { TipoDocumentoModel } from "@/types/TipoDocumentoModel"
import formatDate from "@/utils/formatDate"
import { CheckIcon, XMarkIcon } from "@heroicons/react/16/solid"
import { FormEventHandler, useEffect, useState } from "react"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  nombres: yup.string().required("El nombre es obligatorio"),
  email: yup.string().email("Correo inválido").required("El correo es obligatorio"),
  apellido_paterno: yup.string().required("El apellido paterno es obligatorio"),
  apellido_materno: yup.string().required("El apellido materno es obligatorio"),
  fecha_nacimiento: yup.date().required("La fecha de nacimiento es obligatoria"),
  id_tipo_documento: yup.number().required("El tipo de documento es obligatorio"),
  numero_documento: yup.string().required("El numero de documento es obligatorio"),
  id_genero: yup.number().required("El genero es obligatorio"),
  estado: yup.number().required("El estado es obligatorio"),
});

interface Props{
  handleGuardar:(model:AlumnoModel)=> {}
  model : AlumnoModel
}

const AlumnoForm:React.FC<Props> = ({handleGuardar, model}) => {
    const [form, setForm] = useState<AlumnoModel>(model);
    const [generos, setGeneros] = useState<GeneroModel[]>([])
    const [tipoDocumentos, setTipoDocumentos] = useState<TipoDocumentoModel[]>([])

    const { register, handleSubmit, formState: { errors } } = useForm({
      resolver: yupResolver(schema),
    });

    console.log(register("nombres"));
    

    useEffect(()=>{
       (
        async () => {
          const resGeneros = await GeneroService.get();
          const restTipoDocumentos = await TipoDocumentoService.get();

          setGeneros(resGeneros.data);
          setTipoDocumentos(restTipoDocumentos.data);
        }
      )();
    }, []);

    useEffect(()=>{
        setForm(model)
    },[model])


    const onSubmit = () => {
  
        handleGuardar(form)
    }
    
    
    return <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
    <Input {...register("nombres")}  error={errors.nombres?.message}  type="text" label="Nombres" placeholder="Nombres..." value={form.nombres} onChange={(e)=>setForm({ ...form, nombres: e.target.value })} />
   
 
    <Input {...register("apellido_paterno")} error={errors.apellido_paterno?.message}  type="text" label="Apellido Paterno" placeholder="Apellido Paterno..." value={form.apellido_paterno} onChange={(e)=>setForm({ ...form, apellido_paterno: e.target.value })} />
    <Input type="text" label="Apellido Materno" placeholder="Apellido Materno..." value={form.apellido_materno} onChange={(e)=>setForm({ ...form, apellido_materno: e.target.value })} />
    <Input type="date" label="Nacimiento" max={formatDate(new Date())} placeholder="Fecha Nacimiento..." value={formatDate(form.fecha_nacimiento)} onChange={(e)=>setForm({ ...form, fecha_nacimiento: new Date(e.target.value) })} />

    <Select label="Tipo Documento" onChange={(e)=>setForm({ ...form, id_tipo_documento: +e.target.value })} value={form.id_tipo_documento.toString()}>
      <option value="">SELECCIONAR</option>
      {
        tipoDocumentos.map(x=>(
          <option key={x.id} value={x.id}>{x.descripcion}</option>
        ))
      }
    </Select>

    <Input label="Numero Documento" type="text" placeholder="Numero documento..." value={form.numero_documento} onChange={(e)=>setForm({ ...form, numero_documento: e.target.value })} />
    
    <Input {...register("email")} label="Email" type="email" placeholder="Email..." value={form.email} onChange={(e)=>setForm({ ...form, email: e.target.value })} />

    <Select label="Genero" onChange={(e)=>setForm({ ...form, id_genero: +e.target.value })} value={form.id_genero.toString()}>
      <option value="">SELECCIONAR</option>
      {
        generos.map(x=>(
          <option key={x.id} value={x.id}>{x.descripcion}</option>
        ))
      }
    </Select>

    <Select label="Estado" onChange={(e)=>setForm({ ...form, estado: +e.target.value })} value={form.estado.toString()}>
      <option value="">SELECCIONAR</option>
      <option value="1">ACTIVO</option>
      <option value="0">INACTIVO</option>
    </Select>

    <div className="flex">
      <Button type="submit" color="green"> <CheckIcon className="w-4 h-4" /> Enviar</Button>
      <Button type="button" color="red" onClick={() => {setForm(new AlumnoModel())}}> <XMarkIcon className="w-4 h-4" /> Limpiar</Button>
    </div>
  </form>
}

export default AlumnoForm