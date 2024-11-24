import { useState, useEffect, useContext, createContext, ReactNode } from "react";

// Initialisation de l'utilisateur par défaut
const init = {
  uid: "",
  email: "",
  photoURL: "",
  password: "",
  nom: "",
  prenom: "",
  date_naiss: "",
  lieu_naiss: "",
  pays: "",
  ville: "",
  addresse: "",
  telephone: "",
  pieceID: "",
  profession: "",
  revenue: "",
  type_compte: "",
  pin: "",
  solde_compte: 0,
  solde_carte: 0,
  accountnumber: 0,
  cvv: 0,
  cartenumber: 0,
  userDocument: { onboardingIsCompleted: false },
  statut:"non"
};

// Typage du contexte
interface AuthContextType {
  authUser: typeof init | null; // authUser peut être null si l'utilisateur n'est pas connecté
  authUserIsLoading: boolean;
  logout: () => void; // Ajout de la déconnexion
}

// Création du contexte avec un utilisateur par défaut
const authUserContext = createContext<AuthContextType>({
  authUser: null,
  authUserIsLoading: true,
  logout: () => {}, // Fonction par défaut
});

interface Props {
  children: ReactNode;
}

// Fournisseur d'authentification basé sur AdonisJS avec fetch
export function AuthUserProvider({ children }: Props) {
  const [authUser, setAuthUser] = useState<typeof init | null>(null);
  const [authUserIsLoading, setAuthUserIsLoading] = useState(true);
  useEffect(() => {
    const fetchAuthUser = async () => {
      setAuthUserIsLoading(true);
  
      try {
        // Vérifier si un token existe déjà dans le localStorage
        const storedTokenString = localStorage.getItem("authToken");
        const storedToken = storedTokenString ? JSON.parse(storedTokenString) : null;
  
        if (!storedToken || !storedToken.token) {
          console.warn("Aucun token valide trouvé dans le localStorage.");
          setAuthUser(null); // Réinitialiser l'utilisateur
          setAuthUserIsLoading(false); // Fin du chargement
          return;
        }
  
        console.log("Token actuel :", storedToken.token);
  
        // Requête pour récupérer l'utilisateur et un nouveau token si nécessaire
        const response = await fetch("http://localhost:3333/users/getUser", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${storedToken.token}`,
          },
        });
  
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des données utilisateur.");
        }
  
        const data = await response.json();
  
        // Récupérer et stocker un nouveau token si fourni
        const newToken = data.accessToken; // Par exemple, si l'API retourne un nouveau token
        if (newToken) {
          localStorage.setItem("authToken", JSON.stringify({ token: newToken }));
          console.log("Nouveau token enregistré :", newToken);
        }
  
        // Mettre à jour l'utilisateur avec les données récupérées
        setAuthUser({
          ...init, // Par défaut
          ...data.user, // Fusionner les données utilisateur
          userDocument: {
            onboardingIsCompleted: data.user?.onboardingIsCompleted || false,
          },
        });
  
      } catch (error) {
        console.error("Erreur de récupération de l'utilisateur :", error);
        setAuthUser(null);
      } finally {
        setAuthUserIsLoading(false);
      }
    };
  
    fetchAuthUser();
  }, []);

  const logout = () => {
    localStorage.removeItem("authToken"); // Supprimer le token
    setAuthUser(null); // Réinitialiser l'utilisateur
  };

  return (
    <authUserContext.Provider value={{ authUser, authUserIsLoading, logout }}>
      {children}
    </authUserContext.Provider>
  );
}

// Hook pour utiliser le contexte
export const useAuth = () => useContext(authUserContext);
