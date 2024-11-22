import { FormsType } from "@/types/forms";
import { Button } from "@/ui/design-system/button/button";
import { Input } from "@/ui/design-system/forms/input";

interface Props{
    form: FormsType;
}
export const LoginForm = ({ form }: Props) =>{
    
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

            <Input 
                isLoading={isLoading}
                placeholder = "password"
                type = "password"
                register={register}
                errors={errors}
                errorMsg = "ce champs est obligatoire"
                id="password"
                isAutocompleted

             />



            <Button isloading={isLoading} type="submit" fullWith>Connexion</Button>

        </form> 

        
    )
 };
   