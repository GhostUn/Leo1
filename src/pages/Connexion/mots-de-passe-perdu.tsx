
import { Seo } from "@/ui/components/seo/seo";
import { Layout } from "@/ui/components/layout/layout";
import { ForgetPasswordContainer } from "@/ui/modules/authentification/forget-passord/forget-password.container";
import { GUEST } from "@/lib/session-status";
import { LayoutUser } from "@/ui/components/layout/layourt-user";
export default function Register() {
  return (
    <>
      {/* */}
      <Seo title="Connexion sur Tiger Monkeys" description="page de connexion" />
      <LayoutUser sessionStatus={GUEST}>
            <ForgetPasswordContainer/>
      </LayoutUser>
    </>
  );
}
