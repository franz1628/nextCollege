'use client'

import GeneroForm from "@/components/dashboard/genero/GeneroForm";
import GeneroList from "@/components/dashboard/genero/GeneroList";
import { GeneroService } from "@/services/GeneroService";
import { GeneroCreateModel, GeneroModel, GeneroUpdateModel } from "@/types/GeneroModel";
import {  useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";


const Genero:React.FC  = () =>  {
    const [models,setModels] = useState<GeneroModel[]>([])
    const [model,setModel] = useState<GeneroModel>(new GeneroModel())
    const router = useRouter();
    
    useEffect( () => {
        if(!localStorage.user){
          router.push("/login");
        }

        modelsApi();
    },[]);

    const modelsApi = async ()  => {
      const res = await GeneroService.get()
      setModels(res.data)
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
          const res = await GeneroService.delete(model.id);

          if(res.status==1){
            Swal.fire({text:res.message,icon:"success"});
            modelsApi();
          }else{
            Swal.fire({text:res.message,icon:"warning"});
          }
        }
      })
    }

    const handleGuardar = async (form:GeneroModel) => {
      if(form.id==0){
        const res = await GeneroService.save(new GeneroCreateModel(form));
        if(res.status==1){
          Swal.fire({text:res.message,icon:"success"});
          setModel(new GeneroModel())
        }else{
          Swal.fire({text:res.message,icon:"warning"});
        }
      }else{
        const res = await GeneroService.update(form.id,new GeneroUpdateModel(form));
        if(res.status==1){
          Swal.fire({text:res.message,icon:"success"});
          setModel(new GeneroModel())
        }else{
          Swal.fire({text:res.message,icon:"warning"});
        }

      }

      await modelsApi();
    }

  

    return  <div className="container mx-auto px-4 py-8">
    <h1 className="text-2xl font-bold text-gray-800 mb-6">Género</h1>
    <GeneroForm handleGuardar={(model)=>handleGuardar(model)} model={model} />
      <br />
    <GeneroList models={models} handleEditar={handleEditar} handleEliminar={handleEliminar} />
  </div>
}

export default Genero;

