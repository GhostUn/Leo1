import {auth} from "@/config/firebase-config"
import { GUEST, REGISTERED } from "@/lib/session-status";
import { SessionStatusTypes } from "@/types/session-status-types";
import { error } from "console"
import { FirebaseError } from "firebase/app"
import {createUserWithEmailAndPassword, signInWithEmailAndPassword ,
     signOut, 
    sendPasswordResetEmail,
    sendEmailVerification
    } from "firebase/auth"
import { useState } from "react";
    interface AuthResponse {
        data?: {
            accessToken: {
              token: string;
              expiresAt: string; // Supposons une date d'expiration
            };
            user: {
              email: string;
              nom: string;
            password:string,
            prenom:string,
            date_naiss:Date,
            lieu_naiss:string,
            pays:string,
            ville:string,
            addresse:string,
            telephone:number,
            pieceID:string,
            profession:string,
            revenue:number,
            type_compte:string,
            pin:number,
            solde_carte:number,
            solde_compte:number,
            accountnumber:number,
            cvv:number,
            cartenumber:number
               // Autres propriétés utilisateur possibles
            };
          };
          error?: {
            code: string;
            message: string;
          };
        }
    
      
      interface Props{
        children?: React.ReactNode;
        sessionStatus?: SessionStatusTypes
    
    }

export const firebaseCreateUser = async(email: string, password: string)=>{
    try{
        const userCredential = await createUserWithEmailAndPassword(auth,email, password)
        return { data: userCredential.user}
    }catch(error){

        const firebaeError = error as FirebaseError;
        return {error: {
            code: firebaeError.code,
            message: firebaeError.message
        }}
    }
}


export const firebaseSignInUser = async(email: string, password: string)=>{
    try{
        const userCredential = await signInWithEmailAndPassword(auth,email, password)
        return { data: userCredential.user}
    }catch(error){

        const firebaeError = error as FirebaseError;
        return {error: {
            code: firebaeError.code,
            message: firebaeError.message
        }}
    }
}
////

export const ConnextionUser = async (email: string, password: string): Promise<AuthResponse> => {
    try {
      const result = await fetch("http://localhost:3333/users/connexion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      console.log('result mn', result)
      // Vérification de la réponse du backend
      if (!result.ok) {
        const errorResponse = await result.json();
        return {
          error: {
            code: errorResponse.code || "AUTH_ERROR",
            message: errorResponse.message || "Erreur de connexion. Veuillez réessayer.",
          },
        };
      }
  
      // Si la connexion réussit
      const data = await result.json();
      console.log('data 1759', data)
      // Vérification de la présence du token
      if (data.accessToken?.token) {
        // Nettoyer et enregistrer le token dans le localStorage
        localStorage.removeItem("authToken");
        localStorage.setItem(
          "authToken",
          JSON.stringify({
            token: data.accessToken.token,
            expiresAt: data.accessToken.expiresAt,
          })
        );
        console.log("Token enregistré avec succès :", data.accessToken.token);
      } else {
        console.warn("Aucun token valide reçu du serveur.");
        return {
          error: {
            code: "TOKEN_MISSING",
            message: "Aucun token reçu du serveur.",
          },
        };
      }
  
      // Retourner les données utilisateur
      console.log('data rets', data)
      return { data };
    } catch (error) {
      console.error("Erreur réseau ou serveur :", error);
      return {
        error: {
          code: "NETWORK_ERROR",
          message: "Impossible de se connecter au serveur. Vérifiez votre connexion réseau.",
        },
      };
    }
  };


export const sendEmailToResetPassword = async( email : string)=>{
    try{
        await sendPasswordResetEmail(
         auth, email
        );
         return { data: true}
     }catch(error){
 
         const firebaeError = error as FirebaseError;
         return {error: {
             code: firebaeError.code,
             message: firebaeError.message
         }}
     }
}


export const sendEmailVerificationProcedure = async()=>{
   if (auth.currentUser){
        try{
            await sendEmailVerification(
            auth.currentUser,
            );
            return { data: true}
        }catch(error){
    
            const firebaeError = error as FirebaseError;
            return {error: {
                code: firebaeError.code,
                message: firebaeError.message
            }}
        }
    }else{
        return{
            error:{
                code : "unkwon",
                message: "impossible d'etablir la connection pour verifier email"
            }
        }


    }



}


export const updateUserIdentification = async (uid:string, data:any)=>{
    //to do add url off back-end and fonction to updateUser

    const result = await fetch("http://localhost:3333/users/k",{
        method:"POST",
        headers:{
            "Content-Type": "application/json",
        },
        body:JSON.stringify({
            uid:uid,
            data:data
        })
    })


    if (!result.ok){
        const errorResponse = await result.json();
        const firebaseError = errorResponse as FirebaseError;
        //...@todo format error

        

        return({
            error:{
                code:firebaseError.code,
                message:firebaseError.message

            }
        })
    }
    return {data : true}
}

//creation de l'utilisateur

export const createUser = async(
          email:string,
          password:string,
          nom:string,
          prenom:string,
          date_naiss:Date,
          lieu_naiss:string,
          pays:string,
          ville:string,
          addresse:string,
          telephone:number,
          pieceID:string,
          profession:string,
          revenue:number,
          type_compte:string,
          pin:number,
    )=>{
    //to do add url off back-end and fonction to updateUser

    const result = await fetch("http://localhost:3333/users/create",{
        method:"POST",
        headers:{
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin': '*',
        },
        body:JSON.stringify({
            email:email,
            password:password,
            nom,
            prenom,
            date_naiss,
            lieu_naiss,
            pays,
            ville,
            addresse,
            telephone,
            pieceID,
            profession,
            revenue,
            type_compte,
            pin,
            
        })
    })


    if (!result.ok){
        const errorResponse = await result.json();
        const firebaseError = errorResponse as FirebaseError;
        //...@todo format error
        return({
            error:{
                code:firebaseError.code,
                message:firebaseError.message

            }
        })
    }
    // Si la requête a réussi, récupérez les données renvoyées par le backend
  const data = await result.json();

  // Retour des données renvoyées
  return {
    data: data
  }
}



///upload image


export const AvatarCreate = async (uid:string, data:any)=>{
    //to do add url off back-end and fonction to updateUser

    const result = await fetch("http://localhost:3333/users/avatar",{
        method:"POST",
        headers:{
            "Content-Type": "application/json",
        },
        body:JSON.stringify({
            uid:uid,
            data:data
        })
    })


    if (!result.ok){
        const errorResponse = await result.json();
        const firebaseError = errorResponse as FirebaseError;
        //...@todo format error

        

        return({
            error:{
                code:firebaseError.code,
                message:firebaseError.message

            }
        })
    }
    return {data : true}
}


//creation de l'utilisateur

export const getUser = async(email: string, password: string)=>{
    //to do add url off back-end and fonction to updateUser
    console.log('email, password', email, password)
    const result = await fetch("http://localhost:3333/users/getUser",{
        method:"GET",
        headers:{
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin': '*',
        },
        body:JSON.stringify({
            email:email,
            password:password
        })
    })


    if (!result.ok){
        const errorResponse = await result.json();
        const firebaseError = errorResponse as FirebaseError;
        //...@todo format error
        return({
            error:{
                code:firebaseError.code,
                message:firebaseError.message

            }
        })
    }
    // Si la requête a réussi, récupérez les données renvoyées par le backend
  const data = await result.json();

  // Retour des données renvoyées
  return {
    data: data
  }
}
export const firebaseLogoutUser= ()=>{

  try{
      return 
  }catch(error){
    return error
  }
}