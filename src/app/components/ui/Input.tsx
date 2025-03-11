import { ChangeEvent, FocusEvent, forwardRef } from "react";

interface Props {
    type: "text" | "email" | "password" | "date";
    value?: string;
    className?: string;
    placeholder?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
    label?: string;
    maxLength?: number;
    min?: string | number; // Ahora acepta number
    max?: string | number; // Ahora acepta number 
    error?: string; // Mensaje de error opcional
}

const Input = forwardRef<HTMLInputElement, Props>(
  ({ type, value, onChange, placeholder, label, max, min, maxLength, error, onBlur }, ref) => {
    
    const clase = `w-full px-4 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 my-2 
    ${error ? "border-red-500 focus:ring-red-500" : ""}`; // Resaltar en rojo si hay error

    return (
      <div className="grid grid-cols-12">
        <div className="col-span-5 p-3">
          <label>{label}</label>
        </div>
        <div className="col-span-7">
          <input
            placeholder={placeholder}
            type={type}
            value={value}
            className={clase}
            onChange={onChange}
            onBlur={onBlur}
            maxLength={maxLength}
            max={max}
            min={min}
            ref={ref} // Para que React Hook Form lo maneje bien
          />
          {error && <p className="text-red-500 text-xs">{error}</p>}
        </div>
      </div>
    );
  }
);

export default Input;
