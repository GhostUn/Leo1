import { Logo } from "@/ui/design-system/logo/logo"
import { Container } from "../container/container"
import { Typography  } from "@/ui/design-system/typography/typography"
import { Button } from "@/ui/design-system/button/button"
import Link from "next/link"
import { ActiveLink } from "./active-link"
import { useAuth } from "@/context/AuthUserContext"
import { AccountAvatarNavigationLink } from "./account-avatar-link"

interface Props{}


export const Navigation = ({}:Props)=>{
    const {authUser } = useAuth();
    console.log("authuser", authUser)

    const authentificationSystem = (
        
        <div className="flex items-center gap-2">
        <Button size="small" baseUrl="/Connexion">Connexion</Button>
        <Button size="small" variant="secondary" baseUrl="/Connexion/inscription">Rejoindre</Button>

    </div>
    );

    return(
        <div className="border-b-2 border-gray-400">
            <Container className="flex items-center justify-between py-1.5">
            <Link href="/">
                <div className="flex items-center gap-2.5">
                    
                    <Logo size="small"/>
                    <div className="flex flex-col">
                        <div className="text-gray font-extrabold text-[24px]">
                            CITI Bank
                        </div>
                        <Typography
                            variant="caption4"
                            theme="gray"
                            component="span"
                        >
                            La banque qui inspire !
                        </Typography>
                    </div>
                </div>
                </Link>
            
                <div className="flex items-center gap-7">
                    <Typography 
                            variant="caption3" 
                            component="div" 
                            className="flex items-center gap-7">
                       <ActiveLink href="/home">Accuiel</ActiveLink>
                       <ActiveLink href="contacts">Apropos</ActiveLink>
                       <ActiveLink href="/design-system">Design system</ActiveLink>
                       <ActiveLink href="projects">Projects</ActiveLink>
                       <ActiveLink href="formations">Formations</ActiveLink>

                    </Typography>

                    {!authUser ? authentificationSystem: <AccountAvatarNavigationLink />}
                   
                </div>
                
            </Container>

        </div>
    )
}