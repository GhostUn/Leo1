import { useState } from "react"
import { onboardingStepsListInterface } from "@/types/onboarding-steps-list";

import { Step2 } from "./steps2/steps2";
import { Step3 } from "./steps3/steps3";
import { WelcomeStep } from "./welcome-step";

export const WelcomeStepContainer = ()=>{

    const [currrentStep, setCurrentStep]= useState<number>(1)
    const stepsList : onboardingStepsListInterface[]= [
        {
            id:1, 
            label: "Bienvenue" , 
            component:{
                    step: Step2 
                 }
        },
        {
            id:2, label: "Profile" , component:{
                step: Step3
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

        <WelcomeStep 
        getCurrentStep = {getCurrentStep}
        next={next}
        prev={prev}
        isFirstStep= {isFirstStep}
        isFinalStep = {isFinalStep}
        stepsList = {stepsList}
        />
    )
}