import { Box } from "@/ui/design-system/box/box"
import { Typography } from "@/ui/design-system/typography/typography"
import Link from "next/link"
import { Container } from "@/ui/components/container/container"
import { RegisterForm } from "../register/register.form"
import Image from "next/image"
import { LoginForm } from "./login-form"
import { FormsType } from "@/types/forms"

interface Props{
    form: FormsType;
}

export const LoginView = ({form}: Props)=>{
    return(
        <Container className="grid grid-cols-2 gap-20 mb-32">

        <div className="flex items-center">
            <div className="relative w-full h-[531px]">
                <Image fill src="/assets/images/Group 59.png" 
                       alt="description de l'illustration"
                       className="object-scale-down"
                />
               
            </div>
        </div>
        <div className=" flex items-center">
           <Box padding_y="py-5"  >
                <div className="flex items-center justify-between">
                    <Typography variant="h5" component="h1">
                        Connexion
                    </Typography>
                    <div className="flex items-center gap-2">
                        <Typography variant="caption4" component="span" theme="gray">
                            tu n&apos;sas deja de compte?
                            </Typography>
                            <Typography variant="caption4" component="span" theme="primary">
                            <Link href="/Connexion/inscription">S&apos;sincrire</Link>
                        </Typography> 
                     </div>
                </div>

                <div>
                    <LoginForm form={form}/>

                    <Typography variant="caption4"  
                                theme="gray" className="max-w-md mx-auto space-y-1 text-center">
                                        
                                            <Link href="/Connexion/mots-de-passe-perdu"
                                             className="flex justify-center">
                                            Mot de passe perdu ?
                                            </Link>
                    </Typography>
                </div>
           </Box>
        </div>
    </Container>
)}