import { useAuth } from "@/context/AuthUserContext";
import { useToggle } from "@/hooks/use-toggle";
import { BaseComponentProps } from "@/types/onboarding-steps-list";
import { Container } from "@/ui/components/container/container";
import { Typography } from "@/ui/design-system/typography/typography";
//import { OnboardingFooter } from "../../footer/onboarding-footer";
import { Logo } from "@/ui/design-system/logo/logo";
import { useCallback, useRef } from "react";
import ReactCanvasConfetti from "react-canvas-confetti";

export const FrequenceInves = ({ isFinalStep }: BaseComponentProps) => {
  const { authUser } = useAuth();
  const { value: isLoading, toggle } = useToggle();



  // Setting confetti animation
  const refAnimationInstance = useRef<((opts: any) => void) | null>(null);

  
  

  return (
    <>
     
      <div className="relative h-screen pb-[91px]">
        <div className="h-full overflow-auto">
          <Container className=" h-full grid-cols-12">
            <div className="relative z-10 flex items-center h-full py-10">
              <div className="w-full max-w-xl mx-auto space-y-5 pb-4.5">
                <div className="flex justify-center">
                  <Logo size="large" />
                </div>
                <Typography variant="h1" component="h1" className="text-center">
                  Félicitations!
                </Typography>
                <Typography
                  theme="gray"
                  variant="body-base"
                  component="p"
                  className="text-center"
                >
                  Tu fais maintenant partie de la tribu des  ! Nous
                  sommes ravis de t&lsquo;accueillir parmi nous. Tu vas pouvoir te
                  lancer dans l&lsquo;aventure, partager tes projets les plus fous et
                  rencontrer des partenaires aussi passionnés que toi. Alors
                  prépare-toi, car notre communauté est prête à secouer les
                  branches et à te faire grimper au sommet de l&lsquo;arbre du
                  développement ! 
                </Typography>
              </div>
            </div>
          </Container>
        </div>

      
      </div>
    </>
  );
};
