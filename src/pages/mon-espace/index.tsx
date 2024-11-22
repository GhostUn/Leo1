
import { Seo } from "@/ui/components/seo/seo";
import { Layout } from "@/ui/components/layout/layout";
import { UserAccountContainer } from "@/ui/modules/user-profile/user-account/user-account.container";
import { REGISTERED } from "@/lib/session-status";
import ProfileP from "@/ui/modules/user-profile/user-account/ProfileP";
import { LayoutUser } from "@/ui/components/layout/layourt-user";
//import { LoginContainer } from "@/ui/modules/authentification/login/login.container";
export default function UserAccount() {
  return (
    <>
      {/* */}
      <Seo title="Mon espace" description="Description de la page" />
      <Layout withSidebar sessionStatus={REGISTERED}>
           <ProfileP /> 
      </Layout>
    </>
  );
}
