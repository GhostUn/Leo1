import { useAuth } from "@/context/AuthUserContext";
import { Avatar } from "@/ui/design-system/avatar/avatar"
import { Typography } from "@/ui/design-system/typography/typography"
import Link from "next/link"

export const AccountAvatarNavigationLink = () =>{

    const {authUser} = useAuth()

     // Vérifiez si authUser existe
     if (!authUser) {
        return (
            <Link href="/Connexion" className="flex items-center gap-2">
                <Avatar src="" alt="avatar utilisateur" size="large" />
                <div className="max-w-[160px]">
                    <Typography variant="caption2" weight="medium">
                        
                    </Typography>
                </div>
            </Link>
        );
    }

    const { photoURL, prenom, telephone, nom } = authUser;

    return (
        <Link href="/mon-espace" className="flex items-center gap-2">
            <Avatar src={photoURL} alt={`avatar de ${prenom}`} size="large" />
            <div className="max-w-[160px]">
                <Typography variant="caption2" weight="medium" className="truncate">
                    {prenom || "Bienvenue !"}
                </Typography>
                <Typography variant="caption4" weight="medium" theme="gray">
                    {nom}
                </Typography>
            </div>
        </Link>
    );
};

