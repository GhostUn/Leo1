import { BaseComponentProps } from "@/types/wallet-step-list"
//import { OnboardingFooter } from "../../footer/onboarding-footer"
import { Container } from "@/ui/components/container/container"

//import { OnboardingTabs } from "../../tabs/onboardingTable"
//import { ProfileStepForm } from "./profile-step-form"
import { OnboardingFooter } from "@/ui/modules/onboarding/components/footer/onboarding-footer"
import { WalletTabs } from "@/ui/modules/walleting/components/tabs/walletTabs"
import { Button } from "@/ui/design-system/button/button"
import { RiMessage2Line } from "react-icons/ri"
import { PlanCard } from "./plan-card"

export const PlanStep =({ 
    prev,
    next,
    isFirstStep,
    isFinalStep,
    stepsList,
    getCurrentStep
}:BaseComponentProps)=>{
        
    const handleMessageDepot = ()=>{
        //send email to admin
    }

    return( 
    <div className="relative h-screen pb-[91px]">
        
        <div className="h-full overflow-auto">
            <Container className="grid h-full grid-cols-12">
                
            <div className="relative z-10 flex items-center h-full col-span-6 py-10">
                   
            <div className="col-span-7">
                        <div className="w-full space-y-5 pb-4.5">
                            <WalletTabs 
                                tabs={stepsList}
                                getCurrentStep={getCurrentStep}
                            />

                             <div className="flex justify-center w-full gap-7">
                                        <PlanCard />
                            </div>
                              
                        </div>
                    

                    </div>
                </div>
                    <div className="col-span-4">
                    <div className="flex items-center h-full col-span-5 ml-20">
                        <Button icon={{icon: RiMessage2Line}} variant="ico" size="large" action={handleMessageDepot}>

                        </Button>

                </div>
                   
                </div>
            
            </Container>
        </div>

        <OnboardingFooter 
            prev={prev}
            next={next}
            isFirstStep={isFirstStep}
            isFinalStep={isFinalStep}
           // isLoading={isLoading}
        />
    </div>)
}