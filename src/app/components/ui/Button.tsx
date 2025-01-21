import { ReactNode } from "react";

interface Props{
    children : ReactNode
    color : string
    className?:string
    onClick?: ()=>void
    type?: "button" | "submit"
}


const Button:React.FC<Props> = ({children, color, className, onClick, type}) => {

    type = type || "button"
    const clase = `bg-${color}-500 hover:bg-${color}-600 text-white font-medium py-2 px-4 rounded flex items-center ${className}`

    return <button type={type} className={clase} onClick={onClick}>{children}</button>
}

export default Button;