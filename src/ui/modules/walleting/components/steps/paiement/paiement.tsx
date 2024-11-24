import { BaseComponentProps } from "@/types/wallet-step-list"
//import { OnboardingFooter } from "../../footer/onboarding-footer"
import { Container } from "@/ui/components/container/container"
import { Typography } from "@/ui/design-system/typography/typography"

import Image from "next/image"
//import { OnboardingTabs } from "../../tabs/onboardingTable"
//import { ProfileStepForm } from "./profile-step-form"
import { FormSubmitHandler, SubmitHandler, useForm } from "react-hook-form"
import { OnboardingProfileFormFieldsType, PhonemunberFieldsType } from "@/types/forms"
import { useToggle } from "@/hooks/use-toggle"
import { firestoreUpdateDocument } from "@/api/firestore"
import { useAuth } from "@/context/AuthUserContext"
import { toast } from "react-toastify"
import { useEffect } from "react"
import { updateUserIdentification } from "@/api/authentication"
import { OnboardingFooter } from "@/ui/modules/onboarding/components/footer/onboarding-footer"
import { WalletTabs } from "@/ui/modules/walleting/components/tabs/walletTabs"
import { Button } from "@/ui/design-system/button/button"
import { RiUser3Line, RiMenu2Fill, RiWallet3Line, RiCheckboxIndeterminateFill } from "react-icons/ri"
import clsx from "clsx"
import { PaiementForm } from "./paiement-step-form"

export const Paiement =({ 
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
    } = useForm<PhonemunberFieldsType>();
/*
    const {displayName, expertise, biography} = authUser.userDocument;
    
    // display value is exist...
    useEffect(()=>{
        const fieldsToUpdate : ("phoneNumber")[] =[
            "phoneNumber"
        ];
        for(const field of fieldsToUpdate){
         //   setValue(field, authUser.userDocument[field])
        }
       
    },[])
    */
    /*
    const handleUpdateUserDocument = async (
        formData:OnboardingProfileFormFieldsType)=>{
        const {error} = await firestoreUpdateDocument(
            "users",
            authUser.uid,
            formData
        );
        console.log("form",formData)
        if(error){
            setLoading(false);
            toast.error(error.message);
            return;
        }
        setLoading(false);
        reset();
        next();
    }*/
    const onSubmit: SubmitHandler<OnboardingProfileFormFieldsType> = async (formData) => {
        setLoading(true)
/*
        if(displayName !== formData.displayName ||
             expertise !== formData.expertise ||
              biography !== formData.biography){
                //....
                if(
                    displayName !== formData.displayName 
                    || authUser.displayName !== formData.displayName
                ){
                    const data = {
                        displayName : formData.displayName,
                        expertise:formData.expertise,
                        biography:formData.biography
                    }
                    const {error} = await updateUserIdentification(
                        authUser.uid,
                        data
                    );
                    if(error){
                        setLoading(false)
                        toast.error(error.message)
                        return
                    }
                }
            handleUpdateUserDocument(formData)
        }
            */
        setLoading(false)

        next();
    }

    return( 
    <div className="relative h-screen pb-[91px]">
        
        <div className="h-full overflow-auto">
            <Container className="grid h-full grid-cols-12">
                
                <div className="relative z-10 flex items-center h-full col-span-6 py-10">
                    
                        <div className="w-full space-y-5 pb-4.5">
                            <WalletTabs 
                            tabs={stepsList}
                            getCurrentStep={getCurrentStep}
                            />

                            <div className="flex justify-center w-full gap-7">
                            <PaiementForm 
                                form = {
                                    {
                                        errors,
                                        control,
                                        register,
                                        handleSubmit,
                                        onSubmit,
                                        isLoading,
                                        setValue(name, value) {
                                            
                                        },
                                    }
                                }
                            />
                            </div>
                    
                        </div>
                    <div className="col-span-5">
                        <div className="flex items-center h-full col-span-4">
                        </div>
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