
import { Container } from "@/ui/components/container/container";
import { Seo } from "@/ui/components/seo/seo";
import { Button } from "@/ui/design-system/button/button";
import { Typography } from "@/ui/design-system/typography/typography";
import {RiAncientGateFill, RiUser3Fill, RiUser3Line} from "react-icons/ri";
import {Spinner} from "@/ui/design-system/spinner/spinner"
import {Logo} from "@/ui/design-system/logo/logo"
import {Avatar} from "@/ui/design-system/avatar/avatar"
import { Navigation } from "@/ui/components/navigation/navigations";
import { Footer } from "@/ui/components/navigation/footer";
import { Layout } from "@/ui/components/layout/layout";
import { LandingPageContainer } from "@/ui/modules/landing-page/component/landing-page.comtainer";
import { OnboardingContainer } from "@/ui/modules/onboarding/onboarding.container";
export default function Home() {
  return (
    <>
      {/* */}
      <Seo title="Tigers Monkeys" description="Design System" />
      <Navigation/>
      <OnboardingContainer/>
        {/*<LandingPageContainer/>*/}
      
    </>
  );
}
