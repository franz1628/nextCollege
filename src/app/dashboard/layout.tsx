'use client'
import { ArrowLeftCircleIcon } from "@heroicons/react/16/solid"
import { redirect } from "next/navigation"

export default function DashboarLayout({
    children,
  }: {
    children: React.ReactNode
  }) {

    const handleCerrarSesion = () => {
        localStorage.setItem("user","");
        redirect("/login")
    }
    return <>
    <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
    
        <a href="/" className="text-xl font-bold text-gray-800">College</a>

        <nav className="">
            <a href="/dashboard/matricula" className="text-gray-600 hover:text-blue-600">Matrícula</a>
        </nav>

        <nav className="">
            <a href="/dashboard/genero" className="text-gray-600 hover:text-blue-600">Genero</a>
        </nav>
        <nav className="">
            <a href="/dashboard/tipoDocumento" className="text-gray-600 hover:text-blue-600">Tipo Documento</a>
        </nav>

        <nav className="">
            <a href="/dashboard/alumno" className="text-gray-600 hover:text-blue-600">Alumno</a>
        </nav>

        <nav className="">
            <a href="/dashboard/curso" className="text-gray-600 hover:text-blue-600">Curso</a>
        </nav>
        
        <div className="">
          
            <a href="#" onClick={handleCerrarSesion} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 flex">   <ArrowLeftCircleIcon className="w-5 me-2" />Cerrar Sesion</a>
        </div>
        </div>


    </header>
    
    {children}
    
    
    </>
  }