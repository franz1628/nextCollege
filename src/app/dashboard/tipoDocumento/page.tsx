'use client'

import TipoDocumentoForm from "@/components/dashboard/tipoDocumento/TipoDocumentoForm";
import TipoDocumentoList from "@/components/dashboard/tipoDocumento/TipoDocumentoList";
import { TipoDocumentoService } from "@/services/TipoDocumentoService";
import { TipoDocumentoCreateModel, TipoDocumentoModel, TipoDocumentoUpdateModel } from "@/types/TipoDocumentoModel";
import {  useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";


const TipoDocumento:React.FC  = () =>  {
    const [models,setModels] = useState<TipoDocumentoModel[]>([])
    const [model,setModel] = useState<TipoDocumentoModel>(new TipoDocumentoModel())
    const router = useRouter();
    
    useEffect( () => {
        if(!localStorage.user){
          router.push("/login");
        }

        modelsApi();
    },[]);

    const modelsApi = async ()  => {
      const res = await TipoDocumentoService.get()
      setModels(res.data)
  }

    const handleEditar = async (model:TipoDocumentoModel) => {

      setModel(model);
    }

    const handleEliminar = async (model:TipoDocumentoModel) => {

      Swal.fire({
        text : "Desea eliminar?",
        cancelButtonText:"Cancelar",
        confirmButtonText:"Aceptar",
        showCancelButton: true,
      }).then(async res => {
        if(res.isConfirmed){
          const res = await TipoDocumentoService.delete(model.id);

          if(res.status==1){
            Swal.fire({text:res.message,icon:"success"});
            modelsApi();
          }else{
            Swal.fire({text:res.message,icon:"warning"});
          }
        }
      })
    }

    const handleGuardar = async (form:TipoDocumentoModel) => {
      if(form.id==0){
        const res = await TipoDocumentoService.save(new TipoDocumentoCreateModel(form));
        if(res.status==1){
          Swal.fire({text:res.message,icon:"success"});
          setModel(new TipoDocumentoModel())
        }else{
          Swal.fire({text:res.message,icon:"warning"});
        }
      }else{
        const res = await TipoDocumentoService.update(form.id,new TipoDocumentoUpdateModel(form));
        if(res.status==1){
          Swal.fire({text:res.message,icon:"success"});
          setModel(new TipoDocumentoModel())
        }else{
          Swal.fire({text:res.message,icon:"warning"});
        }

      }

      await modelsApi();
    }

  

    return  <div className="container mx-auto px-4 py-8">
    <h1 className="text-2xl font-bold text-gray-800 mb-6">Tipo Documento</h1>
    <TipoDocumentoForm handleGuardar={(model)=>handleGuardar(model)} model={model} />
      <br />
    <TipoDocumentoList models={models} handleEditar={handleEditar} handleEliminar={handleEliminar} />
  </div>
}

export default TipoDocumento;

