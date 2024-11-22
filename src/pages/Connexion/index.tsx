
import { Seo } from "@/ui/components/seo/seo";
import { Layout } from "@/ui/components/layout/layout";
import { LoginContainer } from "@/ui/modules/authentification/login/login.container";
import { GUEST } from "@/lib/session-status";
import { Navigation } from "@/ui/components/navigation/navigations";
import { LayoutUser } from "@/ui/components/layout/layourt-user";
export default function Connexion() {
  return (
    <>
      {/* */}
      <Seo title="Connexion sur Tigexr Monkeys" description="page de connexion" />
            <LayoutUser>
              <LoginContainer/>

            </LayoutUser>
    </>
  );
}
