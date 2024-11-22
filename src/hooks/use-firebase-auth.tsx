import { useEffect, useState } from "react";
import { UserDocument, UserInterface } from "@/types/user";

export default function useAdonisAuth() {
  const [authUser, setAuthUser] = useState<UserInterface | null>(null);
  const [authUserIsLoading, setAuthUserIsLoading] = useState<boolean>(true);

  // Formater les données utilisateur
  const formatAuthUser = (user: UserInterface) => ({
    uid: user.uid,
    email: user.email,
    displayName: user.displayName,
    emailVerified: user.emailVerified,
    phoneNumber: user.phoneNumber,
    photoURL: user.photoURL,
  });

  // Récupérer le document utilisateur via AdonisJS
  const getUserDocument = async (user: UserInterface) => {
    const token = localStorage.getItem("authToken"); // Récupérer le JWT

    if (!token) {
      setAuthUserIsLoading(false);
      return;
    }

    try {
      const response = await fetch(`/api/users/${user.uid}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Passer le token JWT
        },
      });

      if (!response.ok) {
        throw new Error("Erreur lors de la récupération du document utilisateur");
      }

      const userDocument = (await response.json()) as UserDocument;

      setAuthUser((prevAuthUser) => ({
        ...prevAuthUser,
        ...user,
        userDocument,
      }));
    } catch (error) {
      console.error("Erreur:", error);
      setAuthUser(null);
    } finally {
      setAuthUserIsLoading(false);
    }
  };

  // Changement d'état de l'utilisateur
  const authStateChanger = async () => {
    const token = localStorage.getItem("authToken");

    if (!token) {
      setAuthUser(null);
      setAuthUserIsLoading(false);
      return;
    }

    setAuthUserIsLoading(true);

    try {
      const response = await fetch("/api/auth/me", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Envoyer le token pour obtenir les infos de l'utilisateur
        },
      });

      if (!response.ok) {
        throw new Error("Utilisateur non authentifié");
      }

      const user = (await response.json()) as UserInterface;
      const formattedUser = formatAuthUser(user);
      await getUserDocument(formattedUser);
    } catch (error) {
      console.error("Erreur:", error);
      setAuthUser(null);
    } finally {
      setAuthUserIsLoading(false);
    }
  };

  // Utiliser useEffect pour surveiller l'état d'authentification
  useEffect(() => {
    authStateChanger(); // Appel pour vérifier l'état d'authentification au chargement
  }, []);

  return {
    authUser,
    authUserIsLoading,
  };
}
