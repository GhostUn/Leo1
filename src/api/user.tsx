import { UserDocument } from "@/types/user";
import { FirebaseError } from "firebase/app";

// src/api/user/fetchUsers.ts
export const fetchUsers = async () => {
    const response = await fetch("http://localhost:3333/Admin/getUser"); // Remplacez par l'URL de votre API
    if (!response.ok) {
      throw new Error("Erreur lors de la récupération des utilisateurs GU");
    }
    return response.json();
  };
  

  // src/api/user/fetchUsers.ts
  export const fetchUserById = async (id: number) => {
    const response = await fetch(`http://localhost:3333/Admin/getUserID/${id}`); // URL avec ID de l'utilisateur
    if (!response.ok) {
      throw new Error("Erreur lors de la récupération de l'utilisateur par ID");
    }
    const data = await response.json()
   // console.log('data789', data)
    return data.user
    //return response.json(); // Retourne directement les données JSON
  };


  export const modifUser = async(formData: UserDocument)=>{
    try {
       console.log('formData.id', formData)
   
     const response = await fetch(`http://localhost:3333/Admin/updateUser/${formData.id}`, {
        method: "PATCH", // Utilisez "PATCH" si l'API attend un PATCH
        headers: {
          "Content-Type": "application/json",
          //use token
        },
        body: JSON.stringify(formData), // Envoi des données mises à jour
      });
     
      return response.json(); 
    }catch{
       
            throw new Error("Erreur lors de la récupération de l'utilisateur par ID");
         
    }
}