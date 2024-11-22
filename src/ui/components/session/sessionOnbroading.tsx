import { useAuth } from "@/context/AuthUserContext";
import { GUEST, REGISTERED } from "@/lib/session-status";
import { SessionStatusTypes } from "@/types/session-status-types";
import { ScreenSpinner } from "@/ui/design-system/spinner/screen-spiner";
import { useRouter } from "next/router";

interface Props {
  children?: React.ReactNode;
  sessionStatus?: SessionStatusTypes;
}

export const SessionOnbroading = ({ children, sessionStatus }: Props) => {
  const router = useRouter();


  if (sessionStatus === GUEST && router.asPath =="/Connexion") {
   
            console.log('router.asPath', router.asPath)
            router.push("/Connexion");
            return
       
  }else if(sessionStatus === GUEST && router.asPath =="/Connexion/inscription"){
        router.push("/Connexion/inscription")
        return
  }

  return <ScreenSpinner />;
};
