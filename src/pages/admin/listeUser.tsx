// ListeUser.tsx
import React from 'react';
import { UserDocument } from '@/types/user';
import { Spinner } from '@/ui/design-system/spinner/spinner';
import { Button } from '@/ui/design-system/button/button';
import { modifUser } from '@/api/user';

interface ListeUserProps {
  users: UserDocument[];
  isLoading: boolean;
  onEdit: (userId: number) => void; // Fonction passée en prop pour l'édition
}

export const ListeUser = ({ users, isLoading, onEdit }: ListeUserProps) => {

    
  if (isLoading) {
    return <Spinner/>
  }
// Fonction pour gérer la modification
 /*const handleEdit = (userId: number) => {
  // Rediriger ou ouvrir un modal pour éditer l'utilisateur
  console.log(`Modifier l'utilisateur avec l'ID: ${userId}`);
};*/
const handleEdit = async (formData: UserDocument) => {
  try {
    const payload = { ...formData };
    const response = await modifUser(payload);

    if (!response.ok) {
      throw new Error("Erreur lors de la mise à jour.");
    }

    console.log("Succès :", await response.json());
  } catch (error) {
    console.error("Erreur :", error);
  }
};

  return (
    <table className="w-full text-left table-auto border-collapse">
      <thead>
        <tr>
          <th className="px-4 py-2 border">Nom</th>
          <th className="px-4 py-2 border">Prénom</th>
          <th className="px-4 py-2 border">Email</th>
          <th className="px-4 py-2 border">Ville</th>
          <th className="px-4 py-2 border">Action</th>
        </tr>
      </thead>
      <tbody>
      {
      users && Array.isArray(users) ? (
        users.map((user) =>
          <tr key={user.id}>
            <td className="px-4 py-2 border">{user.nom}</td>
            <td className="px-4 py-2 border">{user.prenom}</td>
            <td className="px-4 py-2 border">{user.email}</td>
            <td className="px-4 py-2 border">{user.ville}</td>
            <td className="px-4 py-2 border">
                <Button action={() => onEdit(user.id)}>
                Modifier
                </Button>
              
            </td>
          </tr>

)) : (
  <p>Aucun utilisateur enregistre</p>
)
}
        
      </tbody>
    </table>
  );
};

export default ListeUser;