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

  
  
  const handleEdit = async (formData: UserDocument) => {
    try {
      console.log("formData123", formData);
  
      // Convertir temporairement `solde_compte` en chaîne pour l'envoi
      const payload: UserDocument = {
        ...formData,
        solde_compte: formData.solde_compte, // Assurer un format chaîne
      };
  
      console.log("Payload envoyé :", payload);
  
      const response = await modifUser(payload);
      console.log("response410", response);
  
      if (!response.ok) {
        toast.error("Erreur lors de la mise à jour.");
        return;
      } else {
        toast.success("Modification effectuée !");
      }
  
      const data = await response.json();
      console.log("Données renvoyées :", data);
  
      // Si besoin, mettez à jour le formulaire ou l'état ici
  
      return { data };
    } catch (error) {
      console.error("Erreur lors de la mise à jour de l’utilisateur :", error);
      toast.error("Une erreur est survenue !");
    }
  };
  
  
  {console.log('formData type', typeof formData.solde_carte);}
  return (
    <form onSubmit={handleSubmit(handleEdit)} className="pt-8 pb-5 space-y-4 space-x-5">
      <div className="flex items-center gap-5">
      <div className="relative w-full h-auto space-y-5 m-5">
        <h2 className="text-xl font-semibold">Modifier lutilisateur</h2>
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
          defaultValue={formData.solde_compte || ""} // Toujours fournir un nombre ou une chaîne
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
            defaultValue={ formData.solde_carte || ""}
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
