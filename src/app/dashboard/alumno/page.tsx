"use client";

import AlumnoForm from "@/components/dashboard/alumno/AlumnoForm";
import AlumnoList from "@/components/dashboard/alumno/AlumnoList";
import { AlumnoService } from "@/services/AlumnoService";
import {
  AlumnoCreateModel,
  AlumnoModel,
  AlumnoUpdateModel,
} from "@/types/AlumnoModel";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";


const Alumno: React.FC = () => {
  const [models, setModels] = useState<AlumnoModel[]>([]);
  const [model, setModel] = useState<AlumnoModel>(new AlumnoModel());
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.user) {
      router.push("/login");
    }

    modelsApi();
  }, []);

  const modelsApi = async () => {
    const res = await AlumnoService.get();
    setModels(res.data);
  };

  const handleEditar = async (model: AlumnoModel) => {
    setModel(model);
  };

  const handleEliminar = async (model: AlumnoModel) => {
    Swal.fire({
      text: "Desea eliminar?",
      cancelButtonText: "Cancelar",
      confirmButtonText: "Aceptar",
      showCancelButton: true,
    }).then(async (res) => {
      if (res.isConfirmed) {
        const res = await AlumnoService.delete(model.id);

        if (res.state == 1) {
          Swal.fire({ text: res.message, icon: "success" });
          modelsApi();
        } else {
          Swal.fire({ text: res.error[0], icon: "warning" });
        }
      }
    });
  };

  const handleGuardar = async (form: AlumnoModel) => {
    console.log(form);
    
    if (form.id == 0) {
      const res = await AlumnoService.save(new AlumnoCreateModel(form));
      if (res.state == 1) {
        modelsApi();
        setModel(new AlumnoModel());
        Swal.fire({ text: res.message, icon: "success" });
      } else {
        console.log('ff');
        
        Swal.fire({ text: res.error[0], icon: "warning" });
      }
    } else {
      const res = await AlumnoService.update(
        form.id,
        new AlumnoUpdateModel(form)
      );
      if (res.state == 1) {
        modelsApi();
        setModel(new AlumnoModel());
        Swal.fire({ text: res.message, icon: "success" });
      } else {
        Swal.fire({ text: res.error[0], icon: "warning" });
      }
    }

    await modelsApi();
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Alumno</h1>
      <div className="w-1/2">
        <AlumnoForm
          handleGuardar={(model) => handleGuardar(model)}
          model={model}
        />
      </div>
      <br />
      <AlumnoList
        models={models}
        handleEditar={handleEditar}
        handleEliminar={handleEliminar}
      />
    </div>
  );
};

export default Alumno;
