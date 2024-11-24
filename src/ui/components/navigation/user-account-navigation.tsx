import { firebaseLogoutUser } from "@/api/authentication";
import { Box } from "@/ui/design-system/box/box"
import { Button } from "@/ui/design-system/button/button";
import { Typography } from "@/ui/design-system/typography/typography";
import { toast } from "react-toastify";
import { ActiveLink } from "./active-link";
import { RiUser3Line, RiMenu2Fill, RiWallet3Fill, RiCashFill } from "react-icons/ri"

export const UserAccountNavigation = () =>{
   
    const handleLoOutUser =async ()=>{
      /*  const { error} = await firebaseLogoutUser();
        if (error) {
            toast.error(error.message)
            return;
        }
        toast.success("Deconnexion ")
        */
    }
    return(
        <Box className="flex flex-col gap-7">
            <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between gap-3">
                        <Button  variant="ico" icon={{icon:RiMenu2Fill}} size="small" iconPosition="right"/>
                    <Typography variant="caption2" weight="medium" className="flex items-center">
                        <ActiveLink href="/mon-espace" >Mon Compte</ActiveLink>

                        <hr />
                    </Typography>
                </div>
             

                <Typography variant="caption2" weight="medium" className="flex flex-col gap-3">
                     <ActiveLink href="/mon-compte/mes-projets" >Mes Projects <Button variant="ico" size="small" icon={{icon:RiWallet3Fill}}></Button></ActiveLink>
                     <ActiveLink href="/mon-compte/mes-projets" >Mes Depots</ActiveLink>
                     <ActiveLink href="/mon-compte/mes-projets" >Mes Retraits</ActiveLink>
                     
                </Typography>
            </div>
            <Button action={handleLoOutUser} variant="danger">Deconnexion</Button>

        </Box>
    )
}