import { useAuth } from "@/context/AuthUserContext";
import { GUEST, REGISTERED, WELCOM } from "@/lib/session-status";
import { SessionStatusTypes } from "@/types/session-status-types";
import { ScreenSpinner } from "@/ui/design-system/spinner/screen-spiner";
import { useRouter } from "next/router";

interface Props {
  children?: React.ReactNode;
  sessionStatus?: SessionStatusTypes;
  isfrist?: boolean;
}

export const Session = ({ children, sessionStatus, isfrist }: Props) => {
  const { authUserIsLoading, authUser } = useAuth(); // Déplacer ici
  const router = useRouter();

  if (sessionStatus === GUEST && isfrist) {
    if (router.asPath === "/Connexion") {
      console.log("isfirst", router.asPath);
    }
    return;
  }

  const onboardingIsCompleted = authUser?.userDocument?.onboardingIsCompleted;

  const shouldRedirectToOnboarding = () => {
    return (
      !authUserIsLoading &&
      authUser &&
      !onboardingIsCompleted &&
      router.asPath !== "/onboarding"
    );
  };

  const shoulNotdRedirectToOnboarding = () => {
    return (
      !authUserIsLoading &&
      authUser &&
      onboardingIsCompleted &&
      router.asPath === "/onboarding"
    );
  };

  const shoulNotdRedirectToOnboardingConnexion = () => {
    if (router.asPath === "/onboarding") {
      return !authUserIsLoading && authUser && onboardingIsCompleted;
    }
  };

  if (shouldRedirectToOnboarding()) {
    router.push("/onboarding");
    return <ScreenSpinner />;
  }

  if (shoulNotdRedirectToOnboarding()) {
    router.push("/Connexion");
    return <ScreenSpinner />;
  }

  if (sessionStatus === GUEST && !authUserIsLoading) {
    if (!authUser) {
      return <>{children}</>;
    } else {
      console.log("sessionStatus", sessionStatus + !authUserIsLoading);
      router.push("/Connexion/inscription");
    }
  }

  if (sessionStatus === REGISTERED && !authUserIsLoading) {
    if (authUser) {
      return <>{children}</>;
    } else {
      router.push("/Connexion");
    }
  }

  if (!sessionStatus && !authUserIsLoading) {
    return <>{children}</>;
  }

  return <ScreenSpinner />;
};
