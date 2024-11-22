import { Button } from "@/ui/design-system/button/button"
import { register } from "module"
import { Input } from "@/ui/design-system/forms/input"
import { FormsType } from "@/types/forms";
interface Props{
    form: FormsType;
}
export const ForgetPasswordForm = ({form}:Props) => {
    const {
        control,
        onSubmit,
        errors,
        isLoading,
        register,
        handleSubmit,} = form;
   
    return(
        <form onSubmit={handleSubmit(onSubmit)} className="pt-8 pb-5 space-y-4">
        <Input 
            isLoading={isLoading}
            placeholder = "TigerMonkeys@gmail.com"
            type = "email"
            register={register}
            errors={errors}
            errorMsg = "ce champs est obligatoire"
            id="email"
            isAutocompleted

         />
        <Button isloading={isLoading} type="submit" fullWith>Envoyer</Button>

    </form> 
    )
}