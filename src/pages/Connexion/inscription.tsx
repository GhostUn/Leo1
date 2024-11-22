
import { Seo } from "@/ui/components/seo/seo";
import { Layout } from "@/ui/components/layout/layout";
import { RegisterContainer } from "@/ui/modules/authentification/register/register.container";
import { GUEST } from "@/lib/session-status";
import { LayoutUser } from "@/ui/components/layout/layourt-user";
export default function Inscription() {
  return (
    <>
      {/* */}
      <Seo title="Inscription sur Tiger Monkeys" description="page d'inscription'" />
      <LayoutUser sessionStatus={GUEST}>
            <RegisterContainer/>
      </LayoutUser>
    </>
  );
}
