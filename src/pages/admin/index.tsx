
import { Seo } from "@/ui/components/seo/seo";
import { Layout } from "@/ui/components/layout/layout";
import { LoginContainer } from "@/ui/modules/authentification/login/login.container";
import { GUEST } from "@/lib/session-status";
import { Navigation } from "@/ui/components/navigation/navigations";
import { LayoutUser } from "@/ui/components/layout/layourt-user";
import { LayoutAdmin } from "@/ui/components/layout/LayoutAdmin";
import { ListeUser } from "./listeUser";
import { ListeUserContainer } from "./listeUserContainer";
export default function ConnexionAdmin() {

  
  return (
    <>
      {/* */}
      <Seo title="Connexion citibank" description="page de administration" />
           <LayoutAdmin>
              <ListeUserContainer/>

           </LayoutAdmin>
    </>
  );
}
