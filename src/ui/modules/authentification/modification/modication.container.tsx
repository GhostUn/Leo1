import { SubmitHandler, useForm } from "react-hook-form";

import { RegisterFormFielsType } from "@/types/forms";
import { sendEmailVerificationProcedure } from "@/api/authentication";
import { useRouter } from "next/router";

import { toast } from "react-toastify";
import { useToggle } from "@/hooks/use-toggle";
import { firestoreCreateDocument } from "@/api/firestore";
import { ModificationView } from "./modification.view";
import { useAuth } from "@/context/AuthUserContext";
import { UserDocument } from "@/types/user";
import { modifUser } from "@/api/user";
import { FirebaseError } from "firebase/app";
 

//const { authUserIsLoading, authUser } = useAuth();
interface Props {
  data : UserDocument,
  fromDatas : RegisterFormFielsType
}
export const ModificationContainer = ()=>{
  const router = useRouter()

const {value:isLoading , setValue:setIsLoading, toggle } = useToggle();

  //1
  const handleCreateUserDocument =  async(collectionName: string, documentID: string, document: object) =>{

    const {error}  = await firestoreCreateDocument(collectionName, documentID, document)
    if(error){
      toast.error(error.message)
      setIsLoading(false)
      return
    }
    toast.success("Bienvenue")
    setIsLoading(false)
    reset()
    // @todo send email confirmation
    sendEmailVerificationProcedure()
  }
    const {
    handleSubmit,
    control,
    formState: {errors},
    reset,
    setError,
    register,
   } = useForm<RegisterFormFielsType>();
   //02 
   const handleModifUserAuthentification = async ( 
        formData:
        UserDocument)=>{
         
          try {
            const response = await modifUser(formData)
    
            if (!response.ok){
                const errorResponse = await response;
                const firebaseError = errorResponse as FirebaseError;
                //...@todo format error
                return({
                    error:{
                        code:firebaseError.code,
                        message:firebaseError.message
        
                    }
                })
            }
            const data = await response.json();
            // Si la requête a réussi, récupérez les données renvoyées par le backend
        
          // Retour des données renvoyées
          return {
            data: data
          }
        
        } catch (error) {
              console.error("Erreur lors de la mise à jour de l’utilisateur:", error);
                
        }
   }

   //pour faire une insertion en bd recuperer un element pour poursuivre  la creation 
   //utilise 02 et a la fin tu utilise 01 a la fin

   const onSubmit: SubmitHandler<UserDocument> = async (formData) => {
    setIsLoading(true);
    
    console.log('formata', formData)

    const {password} = formData
    if(password.length <=5){
      setError("password", {
        type:"manual",
        message:"Ton mots de passe dois avoir 6 caractere min"
      })
    setIsLoading(false);
      return
    }
    handleModifUserAuthentification(formData)
    //suite apres la modification
   }
    return(
  <>
  
  <ModificationView
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
  </>
       

)}