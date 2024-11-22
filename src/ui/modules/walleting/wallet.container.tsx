import { useState } from "react"
//import { OnboardingView } from "./onboarding.view"
//import { WelcomeStep } from "./components/steps/welcome-step/welcome-step";
import { walletStepsListInterface } from "@/types/wallet-step-list";
//import { ProfileStep } from "./components/steps/profile-step/profile-step";
//import { AvatarStep } from "./components/steps/avatar-step/avatar-step";
//import { FinalStep } from "./components/steps/final-step/final-step";
import {WalletTabs} from "./components/tabs/walletTabs"
import {FrequenceWallet} from "./components/steps/frequences/frequences/frequence-step"
import {PlanStep} from "./components/steps/Plan/plan-step"
import {Paiement} from "./components/steps/paiement/paiement"


import { WalletView } from "./wallet.view";
export const WalletContainer = ()=>{

    const [currrentStep, setCurrentStep]= useState<number>(1)
    const stepsList : walletStepsListInterface[]= [
        {
            id:1, label: "Moyen de paiement" , component:{
                step: FrequenceWallet
            },
            
            frequences:[
                {
                    freq:'01 Month'
                },
            ]  
        },
        {
            id:2, label: "Coordonnees" , component:{
                step: Paiement
            },
            frequences:[]
        }
        ,
        {
            id:3, label: "Last Step" , component:{
                step: PlanStep
            },
            frequences:[]
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

        <WalletView 
        getCurrentStep = {getCurrentStep}
        next={next}
        prev={prev}
        isFirstStep= {isFirstStep}
        isFinalStep = {isFinalStep}
        stepsList = {stepsList}
        />
      
    )
}