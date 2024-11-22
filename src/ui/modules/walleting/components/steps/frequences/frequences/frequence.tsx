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

  const handleCloseOnboarding = async () => {
    fire();
  };

  // Setting confetti animation
  const refAnimationInstance = useRef<((opts: any) => void) | null>(null);

  const getInstance = useCallback((instance: any) => {
    if (instance) {
      refAnimationInstance.current = instance;
    } else {
      console.error('Failed to initialize confetti instance');
    }
  }, []);

  const makeShot = useCallback((particleRatio: number, opts: any) => {
    if (refAnimationInstance.current && typeof refAnimationInstance.current === 'function') {
      refAnimationInstance.current({
        ...opts,
        origin: { y: 0.7 },
        particleCount: Math.floor(200 * particleRatio),
      });
    } else {
      console.error("Confetti instance is not a function or is not initialized properly");
    }
  }, []);

  const fire = useCallback(() => {
    if (refAnimationInstance.current) {
      makeShot(0.25, {
        spread: 26,
        startVelocity: 55,
      });

      makeShot(0.2, {
        spread: 60,
      });

      makeShot(0.35, {
        spread: 100,
        decay: 0.91,
      });

      makeShot(0.1, {
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
      });

      makeShot(0.1, {
        spread: 120,
        startVelocity: 45,
      });
    } else {
      console.error("Confetti instance is not available");
    }
  }, [makeShot]);

  return (
    <>
      <ReactCanvasConfetti
        onInit={getInstance} // Initialize confetti instance
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          top: -80,
          left: 0,
        }}
      />
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
                  Tu fais maintenant partie de la tribu des singes codeurs ! Nous
                  sommes ravis de t'accueillir parmi nous. Tu vas pouvoir te
                  lancer dans l'aventure, partager tes projets les plus fous et
                  rencontrer des développeurs aussi passionnés que toi. Alors
                  prépare-toi, car notre communauté est prête à secouer les
                  branches et à te faire grimper au sommet de l'arbre du
                  développement web ! 
                </Typography>
              </div>
            </div>
          </Container>
        </div>

      
      </div>
    </>
  );
};
