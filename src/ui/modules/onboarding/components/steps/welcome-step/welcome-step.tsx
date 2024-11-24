import { BaseComponentProps } from "@/types/onboarding-steps-list"
import { OnboardingFooter } from "../../footer/onboarding-footer"
import { Container } from "@/ui/components/container/container"
import { Typography } from "@/ui/design-system/typography/typography"

import Image from "next/image"
import { OnboardingTabs } from "../../tabs/onboardingTable"

export const WelcomeStep =({ 
    prev,
    next,
    isFirstStep,
    isFinalStep,
    stepsList,
    getCurrentStep
}:BaseComponentProps)=>{
    return( 
    <div className="relative h-screen pb-[91px]">
        
        <div className="h-full overflow-auto">
            <Container className="grid h-full grid-cols-12">
                <div className="relative z-10 flex items-center h-full col-span-6 py-10">

                    <div className="w-full space-y-5 pb-4.5">
                        <OnboardingTabs 
                        tabs={stepsList}
                        getCurrentStep={getCurrentStep}
                        />
                        <Typography variant="h4" component="h1" >
                        créez votre compte, fini les tracasseries
                        </Typography>
                        <Typography theme="gray" variant="body-base" component="p" >
                        Une vision sur le futur vous permet d&apos;épargner votre argent en toute sécurité
                        
                        </Typography>
                    </div>
                </div>
                <div className="flex items-center h-full col-span-6">
                    <div className="w-full">
                        <Image 
                        src="/assets/svg/rocket.svg"
                        alt="illustration de la rocket"
                        width={811}
                        height={596}
                       />

                    </div>

                </div>
            </Container>
        </div>

        <OnboardingFooter 
            prev={prev}
            next={next}
            isFirstStep={isFirstStep}
            isFinalStep={isFinalStep}
        />
    </div>)
}