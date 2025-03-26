'use client';
import Button from "@/components/ui/Button";
import apiClient from "@/lib/axios/apiClient";
import { CursoService } from "@/services/CursoService";
import { CursoModel } from "@/types/CursoModel";
import { PlusCircleIcon } from "@heroicons/react/16/solid";
import { get } from "https";
import { useEffect, useState } from "react";

interface Props{

}

const Matricula:React.FC<Props> = () => {
    const [cursos, setCursos] = useState<CursoModel[]>([]);

    useEffect(()=>{
        getCursos();
    },[]);

    const getCursos = async () => {
      const response = await CursoService.get();
      setCursos(response.data);
      
    }
 
    return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Matrícula</h1>
      <div className="grid grid-cols-2">
        <div>
          <label htmlFor="">Curso</label>
          <select className="w-full border border-gray-300 rounded p-2">
            {cursos.map((curso, index) => (
              <option key={index} value={curso.id}>{curso.nombre}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-4">
        <Button type="submit" color="green"> <PlusCircleIcon className="w-4 h-4" /> Enviar</Button>
      </div>
      <br />
    
    </div>
    )
}

export default Matricula;