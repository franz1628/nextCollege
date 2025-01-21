import Button from "@/components/ui/Button"
import Input from "@/components/ui/Input"
import Select from "@/components/ui/Select"
import { GeneroModel } from "@/types/GeneroModel"
import { CheckIcon } from "@heroicons/react/16/solid"
import { FormEventHandler, useEffect, useState } from "react"

interface Props{
    handleGuardar:(model:GeneroModel)=> {}
    model : GeneroModel
}


const GeneroForm:React.FC<Props> = ({handleGuardar, model}) => {
    const [form, setForm] = useState<GeneroModel>(model);

    useEffect(()=>{
        setForm(model)
    },[model])

    const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        handleGuardar(form)
    }
    
    
    return <form onSubmit={onSubmit}>
    <Input type="text" placeholder="descripcion" value={form.descripcion} onChange={(e)=>setForm({ ...form, descripcion: (e.target as HTMLInputElement).value })} />
    <Select onChange={(e)=>setForm({ ...form, estado: +(e.target as HTMLSelectElement).value })} value={form.estado.toString()}>
      <option value="">SELECCIONAR</option>
      <option value="1">ACTIVO</option>
      <option value="0">INACTIVO</option>
    </Select>
    <Button type="submit" color="green"> <CheckIcon className="w-4 h-4" /> Enviar</Button>
  </form>
}

export default GeneroForm