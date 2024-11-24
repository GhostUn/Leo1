import { UserAccountContainer } from "@/ui/modules/user-profile/user-account/user-account.container"
import { Container } from "../container/container"
import { Footer } from "../navigation/footer"
import { Navigation } from "../navigation/navigations"
import { UserAccountNavigation } from "../navigation/user-account-navigation"
import { Session } from "@/ui/components/session/session"
import { SessionStatusTypes } from "@/types/session-status-types"
import { PaiementAcountCapture } from "../Paiement/capture-paiement-1"
import Sidebar from "@/ui/components/Sidebar";
import { useState } from "react"


interface Props {
    children?:React.ReactNode
    isDisplayBreadccrumbs?: boolean
    withSidebar?: boolean
    sessionStatus?: SessionStatusTypes
    isfrist?:boolean
}
export const Layout = ({children, 
    isDisplayBreadccrumbs = true,
     withSidebar, 
     sessionStatus,
    isfrist,
    }: Props)=>{
    
  const [sidebarOpen, setSidebarOpen] = useState(false);
console.log('sessionStatus45', sessionStatus)
    let view : React.ReactElement = <></>;

if(withSidebar){
        view = (
            <Container className="mb-14">
                <div className="grid grid-cols-12 gap-5">
                    <div className="col-span-2 mt-5 ">
                        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
                    </div>
                    <div className="col-span-10">{children}</div>

                </div>
            </Container>
        )
}
    else {
view = <>{children}</>
    }


    
    return(
        <Session sessionStatus={sessionStatus} isfrist={isfrist}>
            <Navigation/>
            {isDisplayBreadccrumbs} 
            {view}
        
            <Footer/>
        </Session>
    )
}