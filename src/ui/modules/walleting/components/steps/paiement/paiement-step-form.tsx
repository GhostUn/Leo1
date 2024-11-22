import { FormsType } from "@/types/forms"
import { Input } from "@/ui/design-system/forms/input";
import { Textarea } from "@/ui/design-system/forms/textarea";

interface Props{
   form:FormsType;
}

export const PaiementForm = ({form}:Props)=>{

   const {register, errors, isLoading} = form;

   return(


   <form className="w-full max-w-md space-y-4">
      <Input 
         id="Montant"
         label= "Montant"
         isLoading ={isLoading}
         placeholder="20 000"
         type="number"
         register={register}
         errors={errors}
         errorMsg="Tu dois dois renseigner un montant"
      />


<Input 
         id="Telephone"
         label= "Telephone"
         isLoading ={isLoading}
         placeholder="678 549 612"
         type="text"
         register={register}
         errors={errors}
         errorMsg="Tu dois dois renseigner Telephone"
      />


   
   </form>
   )
}