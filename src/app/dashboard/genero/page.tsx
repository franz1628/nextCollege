'use client'

import GeneroForm from "@/components/dashboard/genero/GeneroForm";
import GeneroList from "@/components/dashboard/genero/GeneroList";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Table from "@/components/ui/Table";
import Tbody from "@/components/ui/Tbody";
import Td from "@/components/ui/Td";
import Th from "@/components/ui/Th";
import Thead from "@/components/ui/Thead";
import Tr from "@/components/ui/Tr";
import { generoService } from "@/services/generoService";
import { GeneroModel, GeneroUpdateModel } from "@/types/GeneroModel";
import formatDate from "@/utils/formatDate";
import { CheckIcon, PencilIcon, TrashIcon } from "@heroicons/react/16/solid";
import { ChangeEvent, FormEventHandler, useEffect, useState } from "react";
import Swal from "sweetalert2";


const Genero:React.FC  = () =>  {
    const [generos,setGeneros] = useState<GeneroModel[]>([])
    const [model,setModel] = useState<GeneroModel>(new GeneroModel())
    
    useEffect( () => {
        generosApi();
    },[]);

    const generosApi = async ()  => {
      const res = await generoService.get()
      setGeneros(res.data)
  }

    const handleEditar = async (model:GeneroModel) => {

      setModel(model);
    }

    const handleEliminar = async (model:GeneroModel) => {

      Swal.fire({
        text : "Desea eliminar?",
        cancelButtonText:"Cancelar",
        confirmButtonText:"Aceptar",
        showCancelButton: true,
      }).then(async res => {
        if(res.isConfirmed){
          const res = await generoService.delete(model.id);

          if(res.status==1){
            Swal.fire({text:res.message,icon:"success"});
            generosApi();
          }else{
            Swal.fire({text:res.message,icon:"warning"});
          }
        }
      })

      
    }

    const handleGuardar = async (form:GeneroModel) => {

      if(form.id==0){
        const res = await generoService.post(GeneroModel.createModel(form));
        if(res.status==1){
          Swal.fire({text:res.message,icon:"success"});
          setModel(new GeneroModel())
        }else{
          Swal.fire({text:res.message,icon:"warning"});
        }
      }else{
        const res = await generoService.update(GeneroModel.updateModel(form));
        if(res.status==1){
          Swal.fire({text:res.message,icon:"success"});
          setModel(new GeneroModel())
        }else{
          Swal.fire({text:res.message,icon:"warning"});
        }

      }

      await generosApi();
    }

    return  <div className="container mx-auto px-4 py-8">
    <h1 className="text-2xl font-bold text-gray-800 mb-6">Tabla Dinámica</h1>
    <GeneroForm handleGuardar={(model)=>handleGuardar(model)} model={model}   />
    <GeneroList models={generos} handleEditar={handleEditar} handleEliminar={handleEliminar} />
  </div>
}

export default Genero;

