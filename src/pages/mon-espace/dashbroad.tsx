
import { Seo } from "@/ui/components/seo/seo";
import { Layout } from "@/ui/components/layout/layout";
import { UserAccountContainer } from "@/ui/modules/user-profile/user-account/user-account.container";
import { REGISTERED } from "@/lib/session-status";
import ProfileP from "@/ui/modules/user-profile/user-account/ProfileP";
import { LayoutUser } from "@/ui/components/layout/layourt-user";
import { Dashboard } from "@/ui/modules/user-profile/user-account/dashbroad";
//import { LoginContainer } from "@/ui/modules/authentification/login/login.container";
export default function DashboardUser() {
  return (
    <>
      {/* */}
      <Seo title="Mon espace" description="Description de la page" />
      <LayoutUser withSidebar sessionStatus={REGISTERED}>
        <Dashboard/>
      </LayoutUser>
    </>
  );
}
