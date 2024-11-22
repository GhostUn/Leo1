import { BaseComponentProps } from "@/types/wallet-step-list"
//import { OnboardingFooter } from "../../footer/onboarding-footer"
import { Container } from "@/ui/components/container/container"
import { Typography } from "@/ui/design-system/typography/typography"

import Image from "next/image"
//import { OnboardingTabs } from "../../tabs/onboardingTable"
//import { ProfileStepForm } from "./profile-step-form"
import { FormSubmitHandler, SubmitHandler, useForm } from "react-hook-form"
import { OnboardingProfileFormFieldsType } from "@/types/forms"
import { useToggle } from "@/hooks/use-toggle"
import { firestoreUpdateDocument } from "@/api/firestore"
import { useAuth } from "@/context/AuthUserContext"
import { toast } from "react-toastify"
import { useEffect } from "react"
import { updateUserIdentification } from "@/api/authentication"
import { OnboardingFooter } from "@/ui/modules/onboarding/components/footer/onboarding-footer"
import { WalletTabs } from "@/ui/modules/walleting/components/tabs/walletTabs"
import {FrequenceInves} from "./frequence"
import { Button } from "@/ui/design-system/button/button"
import { RiUser3Line, RiMenu2Fill, RiWallet3Line, RiCheckboxIndeterminateFill, RiMoneyCnyBoxFill, RiMobileDownloadFill } from "react-icons/ri"
import clsx from "clsx"
import { UploadAvatar } from "@/ui/components/upload-avatar/upload-avatar"
import { Box } from "@/ui/design-system/box/box"

export const FrequenceWallet =({ 
    prev,
    next,
    isFirstStep,
    isFinalStep,
    stepsList,
    getCurrentStep
}:BaseComponentProps)=>{
        //
        

        const Paiements = [
            {
                id:1, 
                label: "Airtel Money" , 
                frequence:["01 Month", "03 Month", "06 Month"]
            },
            {
                id:2, label: "M-pessa (vodacom)" , 
                frequence:["01 Month", "03 Month", "06 Month"]
            },
            {
                id:3, label:"MTN Money" , 
                frequence:["01 Month", "03 Month", "06 Month"],
                component:{
                    step: FrequenceWallet
                }
            },
            {
                id:4, label:"Orange Money" ,
                frequence:["01 Month", "03 Month", "06 Month"],
                component:{
                    step: FrequenceWallet
                }
            },
            {
                id:5, label:  "Crypto Monnaie" ,
                frequence:["01 Month", "03 Month", "06 Month"],
                component:{
                    step: FrequenceWallet
                }
            }
        ]
    const handleSelectFre = ()=>{
        console.log('Freq.freq')
    }

    return( 
        <div className="relative h-screen pb-[91px]">
        
        <div className="h-full overflow-auto">
            <Container className="grid h-full grid-cols-12">
                <div className="relative z-10 flex items-center h-full  col-span-6 py-10">

                    <div className="w-full space-y-5 pb-4.5">
                      
                        <Typography variant="h1" component="h2" >
                            Faire un retrait
                        </Typography>
                        <Typography theme="gray" variant="body-base" component="p" >
                         
                        </Typography>
                    </div>
                </div>
                <div className="flex items-right h-full col-span-6  px-[100px] pt-[140px]">
               <div className="flex justify-left w-full">
                <div className="flex w-full justify-center items-center">
                    <Typography>
                        payement Methode
                    </Typography>
                </div>

                    <Container className="relative w-full h-auto space-y-5 m-5 pb-5">
                        
                            <Button variant="warning" icon={{icon:RiMobileDownloadFill}} fullWith iconTheme="secondary" action={next}>
                                Mobile Money
                            </Button>
                            
                            <Button variant="warning" icon={{icon:RiMobileDownloadFill}} fullWith iconTheme="secondary" action={next}>
                                Orange Money
                            </Button>
                            
                            <Button variant="warning" icon={{icon:RiMobileDownloadFill}} fullWith iconTheme="secondary" action={next}>
                               Virement Bancaire
                            </Button>
                            
                            <Button variant="warning" icon={{icon:RiMobileDownloadFill}} fullWith iconTheme="secondary" action={next}>
                                Crypto
                            </Button>


                            <Typography>

                            </Typography>
                  
                    </Container>
               </div>
                </div>
            </Container>
        </div>


    </div>)
}