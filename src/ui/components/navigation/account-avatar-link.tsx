import { useAuth } from "@/context/AuthUserContext"
import { Avatar } from "@/ui/design-system/avatar/avatar"
import { Typography } from "@/ui/design-system/typography/typography"
import Link from "next/link"

export const AccountAvatarNavigationLink = () =>{

    const {authUser} = useAuth()

    const {photoURL, prenom, telephone} = authUser
    return(
        <Link href="/mon-espace" className="flex items-center gap-2">
            <Avatar src={photoURL} alt={authUser ? `avatar de ${prenom}` : "avatar usr"} size="large"/>
            <div className="max-w-[160px]">
            <Typography variant="caption2" weight="medium" className="truncate">
                    {prenom ? prenom : " Welcom to citi bank"}
            </Typography>
            <Typography variant="caption4" weight="medium" theme="gray">
                    {authUser?.nom}
            </Typography>
            </div>
        </Link>

    )
}