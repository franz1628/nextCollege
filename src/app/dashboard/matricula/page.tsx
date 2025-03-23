'use client';
import apiClient from "@/lib/axios/apiClient";
import { CursoService } from "@/services/CursoService";
import { CursoModel } from "@/types/CursoModel";
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
      console.log(response);
    }

    return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Matrícula</h1>
      <div>
        
      </div>
      <br />
    
    </div>
    )
}

export default Matricula;