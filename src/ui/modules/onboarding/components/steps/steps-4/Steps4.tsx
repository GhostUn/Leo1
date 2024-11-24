import { BaseComponentProps } from "@/types/onboarding-steps-list"
import { OnboardingFooter } from "../../footer/onboarding-footer"
import { Container } from "@/ui/components/container/container"
import { Typography } from "@/ui/design-system/typography/typography"

import Image from "next/image"
import { OnboardingTabs } from "../../tabs/onboardingTable"
import { FormSubmitHandler, SubmitHandler, useForm } from "react-hook-form"
import { OnboardingProfileFormFieldsType } from "@/types/forms"
import { useToggle } from "@/hooks/use-toggle"
import { firestoreUpdateDocument } from "@/api/firestore"
import { useAuth } from "@/context/AuthUserContext"
import { toast } from "react-toastify"
import { useEffect } from "react"
import { updateUserIdentification } from "@/api/authentication"

export const Steps4 =({ 
    prev,
    next,
    isFirstStep,
    isFinalStep,
    stepsList,
    getCurrentStep
}:BaseComponentProps)=>{
    const {authUser} = useAuth();
    console.log(authUser)
    const {value: isLoading, setValue: setLoading} = useToggle();
    const {
        handleSubmit,
        control,
        formState:{errors},
        register,
        setValue,
        reset
    } = useForm<OnboardingProfileFormFieldsType>();


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
                        Assistance permanente
                        </Typography>
                        <Typography theme="gray" variant="body-base" component="p" >
                        
                            Notre centre de distribution client ouvert 24 heures sur 24 n&apos;est qu&apos;à un clic Contactez-nous
                        </Typography>
                    </div>
                </div>
                <div className="flex items-center h-full col-span-6">
               <div className="flex justify-end w-full">
               
               </div>

                </div>
            </Container>
        </div>

        <OnboardingFooter 
            prev={prev}
            next={next}
            isFirstStep={isFirstStep}
            isFinalStep={isFinalStep}
            isLoading={isLoading}
/>
    </div>)
}