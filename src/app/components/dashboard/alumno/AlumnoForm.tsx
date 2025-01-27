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

interface Props{
    handleGuardar:(model:AlumnoModel)=> {}
    model : AlumnoModel
}

const AlumnoForm:React.FC<Props> = ({handleGuardar, model}) => {
    const [form, setForm] = useState<AlumnoModel>(model);
    const [generos, setGeneros] = useState<GeneroModel[]>([])
    const [tipoDocumentos, setTipoDocumentos] = useState<TipoDocumentoModel[]>([])

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


    const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        handleGuardar(form)
    }
    
    
    return <form onSubmit={onSubmit} className="mb-4">
    <Input type="text" label="Nombres" placeholder="Nombres..." value={form.nombres} onChange={(e)=>setForm({ ...form, nombres: e.target.value })} />

    <Input type="text" label="Apellido Paterno" placeholder="Apellido Paterno..." value={form.apellidoPaterno} onChange={(e)=>setForm({ ...form, apellidoPaterno: e.target.value })} />
    <Input type="text" label="Apellido Materno" placeholder="Apellido Materno..." value={form.apellidoMaterno} onChange={(e)=>setForm({ ...form, apellidoMaterno: e.target.value })} />
    <Input type="date" label="Nacimiento"placeholder="Fecha Nacimiento..." value={formatDate(form.fechaNacimiento)} onChange={(e)=>setForm({ ...form, fechaNacimiento: new Date(e.target.value) })} />

    <Select label="Tipo Documento" onChange={(e)=>setForm({ ...form, idTipoDocumento: +e.target.value })} value={form.idTipoDocumento.toString()}>
      <option value="">SELECCIONAR</option>
      {
        tipoDocumentos.map(x=>(
          <option key={x.id} value={x.id}>{x.descripcion}</option>
        ))
      }
    </Select>

    <Input label="Numero Documento" type="text" placeholder="Numero documento..." value={form.numeroDocumento} onChange={(e)=>setForm({ ...form, numeroDocumento: e.target.value })} />

    <Select label="Genero" onChange={(e)=>setForm({ ...form, idGenero: +e.target.value })} value={form.idGenero.toString()}>
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