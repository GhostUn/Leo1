
import { Seo } from "@/ui/components/seo/seo";
import { Layout } from "@/ui/components/layout/layout";
import { UserAccountContainer } from "@/ui/modules/user-profile/user-account/user-account.container";
import { GUEST, REGISTERED } from "@/lib/session-status";
import { Session } from "@/ui/components/session/session";
import { OnboardingContainer } from "@/ui/modules/onboarding/onboarding.container";
//import { LoginContainer } from "@/ui/modules/authentification/login/login.container";
export default function Onboarding() {
  return (
    <>
      {/* */}
      <Seo title="Onboarding" description="Onboarding" />
      
         <Session sessionStatus={GUEST}>
            <OnboardingContainer/>
         </Session>
   
    </>
  );
}
