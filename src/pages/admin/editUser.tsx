import React, { useState, useEffect } from 'react';
import { UpdateSolde, UserDocument } from '@/types/user';
import { modifUser } from '@/api/user';
import { FirebaseError } from 'firebase/app';
import { toast } from 'react-toastify';
import { Toast } from 'node_modules/react-toastify/dist/components';
import { register } from 'module';
import { Input } from "@/ui/design-system/forms/input";
import { FormsType } from '@/types/forms';
import { Button } from '@/ui/design-system/button/button';

interface EditUserProps {
  user: UserDocument;
  onClose: () => void; // Fonction pour fermer le formulaire après modification
  form: FormsType;
}
interface Props {
  }

export const EditUser: React.FC<EditUserProps> = ({ user, onClose , form }) => {
  const [formData, setFormData] = useState<UserDocument>(user);
  const {
    control,
    onSubmit,
    errors,
    isLoading,
    register,
    handleSubmit,} = form;

  // Fonction pour gérer les modifications dans le formulaire
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Fonction pour soumettre les modifications


  
  const handleEdit = async ( 
    formData:
    UpdateSolde) => {
 
    try {
        console.log('formData123',formData)

        if (typeof formData.solde_compte === 'string') {
            formData.solde_compte = parseInt(formData.solde_compte, 10).toString(); // Conversion si nécessaire
          } else if (typeof formData.solde_compte === 'number') {

            formData.solde_compte = formData.solde_compte.toString(); // Assurer un format chaîne
          } else {
          }
    const response = await modifUser(formData)
        console.log('response410', response)
    if (!response.ok){
       
      return
    }else{
        toast.success("modification effectuer");
    }
    const data = await response;
    // Si la requête a réussi, récupérez les données renvoyées par le backend

  // Retour des données renvoyées
  return {
    
    data: data
  }

} catch (error) {
      console.error("Erreur lors de la mise à jour de l’utilisateur:", error);
        
}
  };
  
  {console.log('formData type', typeof formData.solde_carte);}
  return (
    <form onSubmit={handleSubmit(handleEdit)} className="pt-8 pb-5 space-y-4 space-x-5">
      <div className="flex items-center gap-5">
      <div className="relative w-full h-auto space-y-5 m-5">
        <h2 className="text-xl font-semibold">Modifier l'utilisateur</h2>
        <label htmlFor="solde_compte"> Solde du compte</label>
        <Input
            isLoading={isLoading}
            placeholder="id"
            type="number"
            register={register}
            errors={errors}
            errorMsg="Ce champ est obligatoire"
            id="id"
            isAutocompleted
            required={false}
            defaultValue={formData?.id}
           hidden
          />
        <Input
            isLoading={isLoading}
            placeholder="solde du compte"
            type="number"
            register={register}
            errors={errors}
            errorMsg="Ce champ est obligatoire"
            id="solde_compte"
            isAutocompleted
            required={false}
            defaultValue={formData.solde_compte || ""}
           
          />
            <label htmlFor="solde_compte"> Solde de la carte</label>

          <Input
            isLoading={isLoading}
            placeholder="solde de la carte"
            type="number"
            register={register}
            errors={errors}
            errorMsg="Ce champ est obligatoire"
            id="solde_carte"
            isAutocompleted
            required = {false}
            defaultValue={ formData.solde_compte || ""}
          />



    <div className="pt-8 pb-5 space-y-4 space-x-5">
            
                    <Button type="submit" size='large' >
                        Mettre à jour
                    </Button>

         

                    <Button variant='secondary' type="button"  size='large' action={onClose}>
                    annuller
                    </Button>

       

    </div>
    </div>
    </div>
      </form>

  );
};
