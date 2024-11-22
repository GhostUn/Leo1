import { useState } from "react"
import { OnboardingView } from "./onboarding.view"
import { WelcomeStep } from "./components/steps/welcome-step/welcome-step";
import { onboardingStepsListInterface } from "@/types/onboarding-steps-list";
import { ProfileStep } from "./components/steps/profile-step/profile-step";
import { AvatarStep } from "./components/steps/avatar-step/avatar-step";
import { FinalStep } from "./components/steps/final-step/final-step";
import { WelcomeStepContainer } from "./components/steps/welcome-step/welcom.container";
import { Steps3 } from "./components/steps/steps-3/Steps3";
import { Steps4 } from "./components/steps/steps-4/Steps4";
import { Steps5 } from "./components/steps/steps-5/Steps5";
import ProfileP from "./components/steps/page/ProfileP";

export const OnboardingContainer = ()=>{

    const [currrentStep, setCurrentStep]= useState<number>(1)
    const stepsList : onboardingStepsListInterface[]= [
        {
            id:1, 
            label: "Une vision " , 
            component:{
                    step: WelcomeStep 
                 }
        },
        {
            id:2, label: "Profile" , component:{
                step: ProfileStep
            }
        },
        {
            id:3, label: "localisateur de succursales" , component:{
                step: Steps3
            }
        },
        {
            id:4, label: "Assistance permanente" , component:{
                step: Steps4
            }
        },
        {
            id:5, label: "Paiements en déplacement" , component:{
                step: Steps5
            }
        },
        {

            id:6, label: "Last Step" , component:{
                step: FinalStep
            }
        }
         
    ];

    const getCurrentStep = ()=>{
        return stepsList.find((el) => el.id === currrentStep);
    }


    const next = ()=>{
        if (currrentStep < stepsList.length) {
            setCurrentStep(currrentStep +1)
        }
    }
    const prev = ()=>{
        if (currrentStep > 1) {
            setCurrentStep(currrentStep -1)
        }
    }

    const isFirstStep = ()=>{
        if (currrentStep === 1) {
            return true
        }
        return false
    }

    const isFinalStep = ()=>{
        if (currrentStep === stepsList.length) {
            return true
        }
        return false
    }

    return(

        <OnboardingView 
        getCurrentStep = {getCurrentStep}
        next={next}
        prev={prev}
        isFirstStep= {isFirstStep}
        isFinalStep = {isFinalStep}
        stepsList = {stepsList}
        />
    )
}