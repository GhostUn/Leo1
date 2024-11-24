import { AvatarCreate } from "@/api/authentication";
import { useToggle } from "@/hooks/use-toggle";
import { FormsType } from "@/types/forms";
import { UploadAvatar } from "@/ui/components/upload-avatar/upload-avatar";
import { Button } from "@/ui/design-system/button/button";
import { Dropdown } from "@/ui/design-system/forms/dropdown";
import { Input } from "@/ui/design-system/forms/input";
import { Typography } from "@/ui/design-system/typography/typography";
import { StorageReference, UploadTask } from "firebase/storage";
import next from "next";
import { useState } from "react";
import { toast } from "react-toastify";

interface Props{
    form: FormsType;
}
 
 export const RegisterForm = ({form}:Props) =>{
    const listpays = ["Cameroun", "Congo kinshassa", "Congo brazaville", "Usa", "uk", "Germany", "Canada", "France", "Australia"];
    const {
        control,
        onSubmit,
        errors,
        isLoading,
        register,
        handleSubmit,} = form;

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
        }}

        const {value: isLoadingIMG, toggle} = useToggle();

       /* const handlerImageUpload = async ()=>{
            let storageRef: StorageReference;
            let uploadTask: UploadTask
    
          console.log('selectedImage', selectedImage)
            if(selectedImage !== null){
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
                //next()
               
            }
            else{
                toggle()
                //next()
            }
        }*/
    return(
      
        <form onSubmit={handleSubmit(onSubmit)} className="pt-8 pb-5 space-y-4">
            <div className="flex items-center gap-5">
                    <div className="relative w-full h-auto space-y-5 m-5">
                    
                    <Input 
                        isLoading={isLoading}
                        placeholder = "Nom"
                        type = "text"
                        register={register}
                        errors={errors}
                        errorMsg = "ce champs est obligatoire"
                        id="nom"
                        isAutocompleted

                    />
  
                    <Input 
                          isLoading={isLoading}
                          placeholder = "Lieu de naissances"
                          type = "text"
                          register={register}
                          errors={errors}
                          errorMsg = "ce champs est obligatoire"
                          id="lieu_naiss"
                          isAutocompleted
                    />

        
                    <Input 
                       
                        isLoading={isLoading}
                         placeholder = "Ville de residences"
                         type = "text"
                         register={register}
                         errors={errors}
                         errorMsg = "ce champs est obligatoire"
                         id="ville"
                         isAutocompleted
                    />

                    <Input 
                      
                      isLoading={isLoading}
                      placeholder = "Addresse"
                      type = "text"
                      register={register}
                      errors={errors}
                      errorMsg = "ce champs est obligatoire"
                      id="addresse"
                      isAutocompleted

                    />

                    <Input 
                      
                      isLoading={isLoading}
                      placeholder = "Profession"
                      type = "text"
                      register={register}
                      errors={errors}
                      errorMsg = "ce champs est obligatoire"
                      id="profession"
                      isAutocompleted

                    />
                   
                </div>
                
                <div className="relative w-full h-auto space-y-5">
                    
                    <Input 
                        
                        isLoading={isLoading}
                        placeholder = "Prenom"
                        type = "text"
                        register={register}
                        errors={errors}
                        errorMsg = "ce champs est obligatoire"
                        id="prenom"
                        isAutocompleted
                    />

                    <Input 
                        isLoading={isLoading}
                        placeholder = "Date de naissances"
                        type = "date"
                        register={register}
                        errors={errors}
                        errorMsg = "ce champs est obligatoire"
                        id="date_naiss"
                        isAutocompleted

                    />
                    

                    <Input 
                        isLoading={isLoading}
                        placeholder = "johnDoe@gmail.com "
                        type = "email"
                        register={register}
                        errors={errors}
                        errorMsg = "ce champs est obligatoire"
                        id="email"
                        isAutocompleted

                    />
                      <Input 
                        isLoading={isLoading}
                        placeholder = "password"
                        type = "password"
                        register={register}
                        errors={errors}
                        errorMsg = "ce champs est obligatoire"
                        id="password"
                        isAutocompleted

                    />
                     <Input 
                        isLoading={isLoading}
                        placeholder = "Revenue mensuel"
                        type = "number"
                        register={register}
                        errors={errors}
                        errorMsg = "ce champs est obligatoire"
                        id="revenue"
                        isAutocompleted

                    />
                    

                    <Input 
                        isLoading={isLoading}
                        placeholder = "Code pin"
                        type = "number"
                        register={register}
                        errors={errors}
                        errorMsg = "ce champs est obligatoire"
                        id="codePin"
                        isAutocompleted

                    />
                
                </div> 
                 
        </div>
       
        <div className="relative w-full h-auto space-y-5 m-5 pb-5">
                        <UploadAvatar
                        handlerImageSelect={handlerImageSelect}
                        imagePreview={imagePreview}
                        label="Votre profil"
                        />
                      

                    </div>  


        
                    <div className="relative w-full h-auto space-y-5 m-5 pb-5">
                    
                    <Typography variant="body-lg" component="div">
                        Information pour le retrait
                    </Typography>

                    <Input 
                        isLoading={isLoading}
                        placeholder = "Entre les fo"
                        type = "number"
                        register={register}
                        errors={errors}
                        errorMsg = "ce champs est obligatoire"
                        id="telephone"
                        isAutocompleted

                    />
                    </div>  
      
            <Button isloading={isLoading} type="submit" fullWith>S&apos;incrire</Button>
           



        </form> 

        
    )
 }
