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
import { useEffect, useState } from "react"
import { AvatarCreate, updateUserIdentification } from "@/api/authentication"
import { UploadAvatar } from "@/ui/components/upload-avatar/upload-avatar"
import { getDownloadURL, ref, StorageReference, uploadBytesResumable, UploadTask } from "firebase/storage"
import { storage } from "@/config/firebase-config"
export const AvatarStep =({ 
    prev,
    next,
    isFirstStep,
    isFinalStep,
    stepsList,
    getCurrentStep
}:BaseComponentProps)=>{

    const [uploadProgress, setUploadProgress] = useState<number>(0)
    const {authUser} = useAuth();
    console.log(authUser)
    const {value: isLoading, toggle} = useToggle();
    const {
        handleSubmit,
        control,
        formState:{errors},
        register,
        setValue,
        reset
    } = useForm<OnboardingProfileFormFieldsType>();

    const handlerImageUpload = async ()=>{
        let storageRef: StorageReference;
        let uploadTask: UploadTask

      console.log('selectedImage', selectedImage)
        if(selectedImage !== null && authUser){
            toggle()
            const {error} = await AvatarCreate(
                authUser.uid,
                selectedImage
            );
            if (error) {
                toggle()
                toast.error(error.message)
                return
            }

            toggle()
            next()
           
        }
        else{
            toggle()
            next()
        }
    }
    
  
    const [imagePreview, setImagePreview] = useState<string | ArrayBuffer | null> (null)
    const [selectedImage, setSelectedImage] = useState<File | null>(null) 
    
    const handlerImageSelect  = (e:React.ChangeEvent<HTMLInputElement>) =>{
    
        const file = e.target.files?.[0];//pour recuperer le premier element
        if(file){
        setSelectedImage(file)

        const reader = new FileReader()
        reader.onload = (e) => {
            let imageDataUrl : string | ArrayBuffer | null = null;
            if(e.target){
                imageDataUrl = e.target.result;
            }
            setImagePreview(imageDataUrl)
        }

        reader.readAsDataURL(file)
    }
}

    return( 
    <div className="relative h-screen pb-[91px]">
        
        <div className="h-full overflow-auto">
            <Container className="grid h-full grid-cols-12">
                <div className="relative z-10 flex items-center h-full  col-span-6 py-10">

                    <div className="w-full space-y-5 pb-4.5">
                        <OnboardingTabs 
                        tabs={stepsList}
                        getCurrentStep={getCurrentStep}
                        />
                        <Typography variant="h1" component="h1" >
                            Dernier etape
                        </Typography>
                        <Typography theme="gray" variant="body-base" component="p" >
                        
                        </Typography>
                    </div>
                </div>
                <div className="flex items-right h-full col-span-6  px-[100px] pt-[140px]">
               <div className="flex justify-left w-full">
                    <UploadAvatar
                     handlerImageSelect={handlerImageSelect}
                     imagePreview={imagePreview}
                     />
               </div>
                </div>
            </Container>
        </div>

        <OnboardingFooter 
            prev={prev}
            next={handlerImageUpload}
            isFirstStep={isFirstStep}
            isFinalStep={isFinalStep}
            isLoading={isLoading}
/>
    </div>)
}