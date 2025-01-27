import { ChangeEvent, ReactNode } from "react";

interface Props{
    type : "text" | "email" | "password"
    value? : string
    className?:string
    placeholder?:string
    onChange: (e:ChangeEvent<HTMLInputElement>) => void
}


const Input:React.FC<Props> = ({type, value, onChange,placeholder}) => {

    
    const clase = `w-full px-4 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 my-2`

    return <input placeholder={placeholder} type={type} value={value} className={clase} onChange={onChange} />
}

export default Input;