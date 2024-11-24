import { LoginFormFielsType } from "@/types/forms";

import { useForm, SubmitHandler } from "react-hook-form";
import { LoginView } from "./login.view"

import { onAuthStateChanged } from "firebase/auth";
import {auth} from "@/config/firebase-config"
import { useToggle } from "@/hooks/use-toggle";
import { firebaseSignInUser,ConnextionUser } from "@/api/authentication";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { SessionStatusTypes } from "@/types/session-status-types";
import { useState } from "react";



export const LoginContainer = ()=>{

    const router = useRouter()
    const {value:isLoading , setValue:setIsLoading, toggle } = useToggle();

    const [userStatus, setUserStatus] = useState<SessionStatusTypes>("guest");

    const {
    handleSubmit,
    control,
    formState: {errors},
    reset,
    setError,
    register,
   } = useForm<LoginFormFielsType>();


const handleSignInUser = async ({ email, password }: LoginFormFielsType) => {
  setIsLoading(true); // Commencez le chargement

  // Effectuez la connexion via l'API
  const { error, data } = await ConnextionUser(email, password);

  // Gestion des erreurs
  if (error) {
    setIsLoading(false);
    toast.error(error.message);
    return;
  }

  // Vérifiez si un token a été stocké
  const storedToken = localStorage.getItem("authToken");
  if (storedToken) {
    console.log("Token récupéré depuis le localStorage :", storedToken);
  } else {
    console.warn("Aucun token trouvé dans le localStorage après connexion.");
  }

  // Succès
  console.log("Données utilisateurss :", data);
  toast.success("Bienvenue");
        setIsLoading(false)
        reset()
        setUserStatus("registered");

        router.push("/mon-espace")
  
};


   const onSubmit: SubmitHandler<LoginFormFielsType> = async (formData) => {
    setIsLoading(true);
    const {password} = formData

    if(password.length <= 5){
        setError("password",{
            type:"manuel",
            message:"ton mot de passe doit comporter au minimun 6 carracteres"
        })
        setIsLoading(false)
        return;
    }
    handleSignInUser(formData)
   }


   onAuthStateChanged(auth, (user)=>{
    if(user){
        const uid = user.uid
    }else{

    }
   })

    return(
    <>
        <LoginView
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