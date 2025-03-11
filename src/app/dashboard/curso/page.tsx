'use client'

import CursoForm from "@/components/dashboard/curso/CursoForm";
import CursoList from "@/components/dashboard/curso/CursoList";
import { CursoService } from "@/services/CursoService";

import { CursoCreateModel, CursoModel, CursoUpdateModel } from "@/types/CursoModel";
import {  useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";


const Curso:React.FC  = () =>  {
    const [models,setModels] = useState<CursoModel[]>([])
    const [model,setModel] = useState<CursoModel>(new CursoModel())
    const router = useRouter();
    
    useEffect( () => {
        if(!localStorage.user){
          router.push("/login");
        }

        modelsApi();
    },[]);

    const modelsApi = async ()  => {
      const res = await CursoService.get()
      setModels(res.data)
  }

    const handleEditar = async (model:CursoModel) => {

      setModel(model);
    }

    const handleEliminar = async (model:CursoModel) => {

      Swal.fire({
        text : "Desea eliminar?",
        cancelButtonText:"Cancelar",
        confirmButtonText:"Aceptar",
        showCancelButton: true,
      }).then(async res => {
        if(res.isConfirmed){
          const res = await CursoService.delete(model.id);

          if(res.state==1){
            Swal.fire({text:res.message,icon:"success"});
            modelsApi();
          }else{
            Swal.fire({text:res.message,icon:"warning"});
          }
        }
      })
    }

    const handleGuardar = async (form:CursoModel) => {
      if(form.id==0){
        const res = await CursoService.save(new CursoCreateModel(form));
        if(res.state==1){
          Swal.fire({text:res.message,icon:"success"});
          setModel(new CursoModel())
        }else{
          Swal.fire({text:res.message,icon:"warning"});
        }
      }else{
        const res = await CursoService.update(form.id,new CursoUpdateModel(form));
        if(res.state==1){
          Swal.fire({text:res.message,icon:"success"});
          setModel(new CursoModel())
        }else{
          Swal.fire({text:res.message,icon:"warning"});
        }

      }

      await modelsApi();
    }

  

    return  <div className="container mx-auto px-4 py-8">
    <h1 className="text-2xl font-bold text-gray-800 mb-6">Curso</h1>
    <CursoForm handleGuardar={(model)=>handleGuardar(model)} model={model} />
      <br />
    <CursoList models={models} handleEditar={handleEditar} handleEliminar={handleEliminar} />
  </div>
}

export default Curso;

