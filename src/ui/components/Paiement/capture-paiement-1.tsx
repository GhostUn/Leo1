import { firebaseLogoutUser } from "@/api/authentication";
import { Box } from "@/ui/design-system/box/box"
import { Button } from "@/ui/design-system/button/button";
import { Typography } from "@/ui/design-system/typography/typography";
import { toast } from "react-toastify";
import { ActiveLink } from "../navigation/active-link";
import { RiUser3Line, RiMenu2Fill, RiWallet3Line } from "react-icons/ri"

export const PaiementAcountCapture = () =>{
   
    const handleLoOutUser =async ()=>{
        const { error} = await firebaseLogoutUser();
        if (error) {
            toast.error(error.message)
            return;
        }
        toast.success("Deconnexion ")
        
    }

    const handleDepot = ()=>{

    }
    return(
        <Box className="flex flex-col gap-7">
            <div className="flex flex-col gap-3">
                
                <div className="flex items-center gap-3">
                    <Typography component="h1" variant="body-lg" weight="medium" className="flex items-center justify-center">
                        Crediter votre compte pour commencer
                    </Typography>
                </div>
             

                <Typography variant="caption2" weight="medium">
                <ActiveLink href="/mon-espace/wallet" >
                    <Button variant="success" icon={{icon:RiWallet3Line}} action={handleDepot}>
                        Deposer de l'argent
                     </Button>
                </ActiveLink>
                </Typography>
            </div>

        </Box>
    )
}