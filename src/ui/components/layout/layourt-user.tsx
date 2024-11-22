import { UserAccountContainer } from "@/ui/modules/user-profile/user-account/user-account.container"
import { Container } from "../container/container"
import { Footer } from "../navigation/footer"
import { Navigation } from "../navigation/navigations"
import { UserAccountNavigation } from "../navigation/user-account-navigation"
import { Session } from "@/ui/components/session/session"
import { SessionStatusTypes } from "@/types/Session-status-types"
import { PaiementAcountCapture } from "../Paiement/capture-paiement-1"
import Sidebar from "@/ui/components/Sidebar";
import { useState } from "react"


interface Props {
    children?:React.ReactNode
    isDisplayBreadccrumbs?: boolean
    withSidebar?: boolean
    sessionStatus?: SessionStatusTypes
}
export const LayoutUser = ({children, 
    isDisplayBreadccrumbs = true,
     withSidebar, 
     sessionStatus
    }: Props)=>{
    
  const [sidebarOpen, setSidebarOpen] = useState(false);

    let view : React.ReactElement = <></>;

if(withSidebar){
        view = (
                <div className="grid grid-cols-12 gap-5">
                    <div className="col-span-2 mt-5 ">
                        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
                    </div>
                    <div className="col-span-10">{children}</div>

                </div>
        )
}
    else {
view = <>{children}</>
    }


    
    return(
     <>
        <Navigation/>
        {isDisplayBreadccrumbs} 
        {view}
    
        <Footer/>
     </>
   
    )
}