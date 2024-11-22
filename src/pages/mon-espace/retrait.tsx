
import { Seo } from "@/ui/components/seo/seo";
import { Layout } from "@/ui/components/layout/layout";
import { UserAccountContainer } from "@/ui/modules/user-profile/user-account/user-account.container";
import { REGISTERED } from "@/lib/session-status";
import { Session } from "@/ui/components/session/session";
import { OnboardingContainer } from "@/ui/modules/onboarding/onboarding.container";
import {WalletContainer} from "@/ui/modules/walleting/wallet.container"
import { CashoutContainer } from "@/ui/modules/walleting copy/wallet.container";
//import { LoginContainer } from "@/ui/modules/authentification/login/login.container";
export default function Cashout() {
  return (
    <>
      {/* */}
      <Seo title="Onboarding" description="Onboarding" />
      
         <Session sessionStatus={REGISTERED}>
            <CashoutContainer/>
         </Session>
   
    </>
  );
}
