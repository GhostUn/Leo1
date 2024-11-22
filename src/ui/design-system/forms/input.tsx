import clsx from "clsx";
import { Typography } from "../typography/typography";

interface Props {
    isLoading: boolean;
    placeholder: string;
    type?: "text" | "email" | "password" | "number" | "date";
    register: any;
    errors: any;
    errorMsg?: string;
    id: string;
    required?: boolean;
    isAutocompleted?: boolean;
    label?: string;
    defaultValue?: string | number; // Ajout de defaultValue ici
    hidden?:boolean;
    action?:Function;
}
export const Input = ({
    isLoading = false,
    placeholder,
    type = "text",
    register,
    errors,
    errorMsg = "ce champ est obligatoire",
    id,
    required = true,
    isAutocompleted = false,
    label,
    defaultValue, // Ajout de defaultValue
    hidden,
    action = ()=>{}
}: Props) => {

    return (
        <div className="space-y-2">
            {label && (
                <Typography variant="caption4"
                    component="div"
                    theme={errors[id] ? "danger" : "gray-600"}>
                    {label}
                </Typography>
            )}
        
            <input type={type}
                placeholder={placeholder}
                className={clsx(
                    errors[id] ? "placeholder-alert-danger text-alert-danger" : "placeholder-gray-600",
                    "w-full p-4 font-light border border-gray-400 rounded focus:outline-none focus:ring-1 focus:ring-primary"
                )}
                disabled={isLoading} 
                defaultValue={defaultValue} // Ajout de defaultValue ici
                {...register(id, {
                    required: {
                        value: required,
                        message: errorMsg
                    }
                })}  
                autoComplete={isAutocompleted ? "on" : "off"}
                hidden={hidden}
                
            />

            {errors[id] && (
                <Typography variant="caption4" component="div" theme="danger">
                    {errors[id]?.message}
                </Typography>
            )}
        </div>
    );
}
