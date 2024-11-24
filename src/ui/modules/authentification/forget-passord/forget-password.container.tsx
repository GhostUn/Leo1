import { ForgetPasswordFormFielsType } from "@/types/forms";

import { useForm, SubmitHandler } from "react-hook-form";
import { ForgetPasswordView } from "./forget-password.view"
import { useToggle } from "@/hooks/use-toggle";
import { sendEmailToResetPassword } from "@/api/authentication";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

export const ForgetPasswordContainer = ()=>{
    const {value:isLoading , setValue:setIsLoading, toggle } = useToggle();
    const router = useRouter()
    const {
    handleSubmit,
    control,
    formState: {errors},
    reset,
    setError,
    register,
   } = useForm<ForgetPasswordFormFielsType>();
    
   const handleResetPassword = async({email}:ForgetPasswordFormFielsType)=>{
   // console.log("mail send ")
    const {error} = await sendEmailToResetPassword (email);
    if (error) {
        setIsLoading(false)
        toast.error(error.message)
        return
    }
    toast.success(`Un e-mail a ete envoyer a l'addresse ${email}`)
    reset()
    router.push("/connexion");
   }
   const onSubmit: SubmitHandler<ForgetPasswordFormFielsType> = async (formData) => {
    setIsLoading(true);
    
    handleResetPassword(formData)
   }
    
    return(
 
        <ForgetPasswordView
            form = {{
            errors,
            control,
            register,
            handleSubmit,
            onSubmit,
            isLoading,
            setValue(name, value) {
                
            },
         }}
        />
)}