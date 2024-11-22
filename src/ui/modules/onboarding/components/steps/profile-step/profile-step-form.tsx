import { FormsType } from "@/types/forms"
import { Input } from "@/ui/design-system/forms/input";
import { Textarea } from "@/ui/design-system/forms/textarea";

interface Props{
   form:FormsType;
}

export const ProfileStepForm = ({form}:Props)=>{

   const {register, errors, isLoading} = form;

   return(


   <form className="w-full max-w-md space-y-4">
      <Input 
         id="displayName"
         label= "Pseudo"
         isLoading ={isLoading}
         placeholder="john doe"
         type="text"
         register={register}
         errors={errors}
         errorMsg="Tu dois dois renseigner un pseudo"
      />


<Input 
         id="expertise"
         label= "Expertise"
         isLoading ={isLoading}
         placeholder="Developpeur frond-end React freelance"
         type="text"
         register={register}
         errors={errors}
         errorMsg="Tu dois dois renseigner expertise"
      />


   <Textarea 
   
      id="biography"
      label= "Biographie"
      isLoading ={isLoading}
      placeholder="Indique une courte description de toi"
      rows={5}
      register={register}
      errors={errors}
      errorMsg="Tu dois dois renseigner ce champs"
      required={false}
   />
   </form>
   )
}