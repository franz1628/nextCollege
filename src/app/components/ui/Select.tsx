import { ChangeEvent, ReactNode } from "react";

interface Props{
    value? : string
    className?:string
    onChange: (e:ChangeEvent<HTMLSelectElement>) => void
    children : ReactNode
}


const Select:React.FC<Props> = ({value, onChange,children}) => {

    
    const clase = `w-full px-4 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 my-2`

    return <select value={value} className={clase} onChange={onChange} > 
        {children}
    </select>
}

export default Select;