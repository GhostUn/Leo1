import { useAuth } from "@/context/AuthUserContext";
import { useToggle } from "@/hooks/use-toggle";
import { BaseComponentProps } from "@/types/onboarding-steps-list";
import { Container } from "@/ui/components/container/container";
import { Typography } from "@/ui/design-system/typography/typography";
import { OnboardingFooter } from "../../footer/onboarding-footer";
import { Logo } from "@/ui/design-system/logo/logo";
import { useCallback, useRef } from "react";
import { Button } from "@/ui/design-system/button/button";
import { Avatar } from "@/ui/design-system/avatar/avatar";
import Link from "next/link";
import { ActiveLink } from "@/ui/components/navigation/active-link";
import router from "next/router";

export const FinalStep = ({ isFinalStep }: BaseComponentProps) => {
  const {authUserIsLoading, authUser} = useAuth()
  
  const { value: isLoading, toggle } = useToggle();
  return (
    <>
      
      <div className="relative h-screen pb-[91px]">
        <div className="h-full overflow-auto">
          <Container className=" h-full grid-cols-12">
            <div className="relative z-10 flex items-center h-full py-10">
              <div className="w-full max-w-xl mx-auto space-y-5 pb-4.5">
                <div className="flex justify-center">
                  <Avatar size="extra-large" src="/assets/images/logo/logo-icon.svg" alt="logo"/>
                </div>
                <Typography variant="h1" component="h1" className="text-center">

                
                  <Button fullWith baseUrl="/Connexion"> Connexion</Button>
                

                </Typography>
                <Typography
                  theme="gray"
                  variant="body-base"
                  component="p"
                  className="text-center"
                >
                  <Button fullWith baseUrl="/Connexion/inscription" > Cree un compte</Button>

                </Typography>
              </div>
            </div>
          </Container>
        </div>

        <OnboardingFooter
          
          isFinalStep={isFinalStep}
          isLoading={isLoading}
        />
      </div>
    </>
  );
};
