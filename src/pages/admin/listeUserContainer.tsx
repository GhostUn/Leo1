import React, { useEffect, useState } from 'react';
import { ListeUser } from './listeUser';
import { UserDocument } from '@/types/user';
import { fetchUsers, fetchUserById } from "@/api/user";
import { EditUser } from './editUser'; // Composant de modification
import { RegisterFormFielsType } from '@/types/forms';
import { useForm } from 'react-hook-form';

export const ListeUserContainer = () => {
  const [users, setUsers] = useState<UserDocument[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [selectedUser, setSelectedUser] = useState<UserDocument | null>(null); // Utilisateur sélectionné pour l'édition
  console.log('selectedUser', selectedUser)



  const {
    handleSubmit,
    control,
    formState: {errors},
    reset,
    setError,
    register,
   } = useForm<RegisterFormFielsType>();
   
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchUsers();
        console.log('dataselect', data)
        setUsers(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des utilisateurs tr:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // Fonction pour gérer la modification
  const onSubmit = async (userId: number) => {
    try {
      const data = await fetchUserById(userId); // Appel à l'API pour récupérer l'utilisateur par ID
      console.log('Données de l’utilisateur:', data);
      setSelectedUser(data); // Stocke l'utilisateur sélectionné
    } catch (error) {
      console.error('Erreur lors de la récupération des données de l’utilisateur:', error);
    }
  };
  

  return (  // Ajout du return pour retourner le JSX
    <div>
      {selectedUser ? (
        <EditUser user={selectedUser} onClose={() => setSelectedUser(null)} 
        form = {{
          errors,
          control,
          register,
          handleSubmit,
          onSubmit ,
          isLoading,
          setValue(name, value) {
            
          },
         }}
        
        /> // Affiche le composant de modification si un utilisateur est sélectionné
      ) : (
        <ListeUser users={users} isLoading={isLoading} onEdit={onSubmit} /> // Affiche la liste d’utilisateurs
      )}
    </div>
  );
};
export default ListeUserContainer;