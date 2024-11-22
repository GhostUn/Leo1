import { FormsType, RegisterFormFielsType } from "@/types/forms";
import { Input } from "@/ui/design-system/forms/input";
import { Textarea } from "@/ui/design-system/forms/textarea";
import { Typography } from "@/ui/design-system/typography/typography";
import { Container } from "@/ui/components/container/container"
import { useState } from "react";
import { useForm } from "react-hook-form";


/*interface Props{
   Freq:any;
   getCurrentStep:any;
   Frequence:any
}
*/
interface Props{
    form:FormsType;
 }

export const PlanCard = ()=>{
    //const {register, errors, isLoading} = form;

    const {
        handleSubmit,
        control,
        formState: {errors},
        reset,
        setError,
        register,
       } = useForm<RegisterFormFielsType>();

    const [selectiontheme, setSelectiontheme] = useState(false)
   const handleplan =()=>{

    //console.log(montantTotal)
    setSelectiontheme(!selectiontheme)
    console.log('selectionthemeb', selectiontheme)
   }

   return(
        <>
        <Container className="">

            <Typography component="div" variant="h4">
                Mobile money ou autre moyens choisie
            </Typography>
            <Typography component="div" variant="body-lg" theme="primary" className="items-center mt-5 pb-10">
                Attention Lisez Attentivement
            </Typography>

            <Typography component="div" variant="body-lg" className="items-center mt-5 pb-10">
                Madame, Monsieur,
                Nous vous informons que, en raison d'un incident technique affectant notre service API,
                le service de retrait automatique est temporairement deactiver. 
                Nous tenons a vous assurer que notre equipe travaille activement a la resolution de ce probleme.
            </Typography>

            <Typography component="div" variant="body-lg" className="items-center mt-5 pb-10">
                En attendant, seuls les paiement manuels sont disponibles. 
                Nous vous remercions de votre comprehension et vous prions de bien vouloir nous excuser pour la gene occassionnees
            </Typography>


            <Typography component="div" variant="body-lg" className="items-center mt-5 pb-10">
                Pour finaliser l'ajout des fonds dans votre compte, nous vous invitions a conctater votre support client
                qui pourra vous guider dans la procedure, en cliquant sur la petite icone a droite    
            </Typography>
        </Container>
        </>

   )
}