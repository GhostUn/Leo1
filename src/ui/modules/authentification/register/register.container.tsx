import { SubmitHandler, useForm } from "react-hook-form";
import { RegisterView } from "./register.view"
import { RegisterFormFielsType } from "@/types/forms";
import { useState } from "react";
import {auth} from "@/config/firebase-config";
import {  createUserWithEmailAndPassword } from "firebase/auth";
import { firebaseCreateUser, sendEmailVerificationProcedure,createUser } from "@/api/authentication";
import { useRouter } from "next/router";

import { toast } from "react-toastify";
import { Button } from "@/ui/design-system/button/button";
import { useToggle } from "@/hooks/use-toggle";
import { firestoreCreateDocument, firestoreUpdateDocument } from "@/api/firestore";
 

export interface Props{
  formData: RegisterFormFielsType,

}
export const RegisterContainer = ()=>{
  const router = useRouter()

const {value:isLoading , setValue:setIsLoading, toggle } = useToggle();

console.log(isLoading)

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
   const handleCreateUserAuthentification = async ( 
        formData:  RegisterFormFielsType)=>{
          console.log('donnees', formData)
          console.log('ville', formData.ville)
        const {error, data} = await createUser(
          formData.email,
          formData.password,
          formData.nom,
          formData.prenom,
          formData.date_naiss,
          formData.lieu_naiss,
          formData.pays,
          formData.ville,
          formData.Addresse,
          formData.telephone,
          formData.pieceID,
          formData.profession,
          formData.revenue,
          formData.type_compte,
          formData.pin,)
      
        if(error){
        setIsLoading(false)
        toast.error(error.message)
        return
      }
     if(data){
      setIsLoading(false)
      toast.success(data.message)
     }
     reset()
        // Rediriger vers l'espace utilisateur après une inscription réussie
       // navigate('/dashboard');
       router.push("/mon-espace")

     
   }

   //pour faire une insertion en bd recuperer un element pour poursuivre  la creation 
   //utilise 02 et a la fin tu utilise 01 a la fin

   const onSubmit: SubmitHandler<RegisterFormFielsType> = async (formData) => {

    console.log('formData', formData)
    setIsLoading(true);
    

    const {password} = formData
    if(password.length <=5){
      setError("password", {
        type:"manual",
        message:"Ton mots de passe dois avoir 6 caractere min"
      })
    setIsLoading(false);
      return
    }
    handleCreateUserAuthentification(formData)
    console.log('formata', formData)

    setIsLoading(false);

   }
    return(
  <>
  
  <RegisterView
      form = {{
         errors,
         control,
         register,
         handleSubmit,
         onSubmit,
         isLoading,
         setValue(name, value) {},
      }}
      />
  </>
       

)}