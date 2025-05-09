import Button from "@/components/ui/Button"
import Input from "@/components/ui/Input"
import Select from "@/components/ui/Select"
import { CursoModel } from "@/types/CursoModel"
import { CheckIcon } from "@heroicons/react/16/solid"
import { FormEventHandler, useEffect, useState } from "react"

interface Props{
    handleGuardar:(model:CursoModel)=> {}
    model : CursoModel
}

const CursoForm:React.FC<Props> = ({handleGuardar, model}) => {
    const [form, setForm] = useState<CursoModel>(model);
    useEffect(()=>{
        setForm(model)
    },[model])

    const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        handleGuardar(form)
    }
    
    
    return <form onSubmit={onSubmit} className="w-1/2">
    <Input label="Nombre" type="text" placeholder="nombre" value={form.nombre} onChange={(e)=>setForm({ ...form, nombre: e.target.value })} />
    <Select label="Estado" onChange={(e)=>setForm({ ...form, estado: +e.target.value })} value={form.estado.toString()}>
      <option value="">SELECCIONAR</option>
      <option value="1">ACTIVO</option>
      <option value="0">INACTIVO</option>
    </Select>
    <Button type="submit" color="green"> <CheckIcon className="w-4 h-4" /> Enviar</Button>
  </form>
}

export default CursoForm