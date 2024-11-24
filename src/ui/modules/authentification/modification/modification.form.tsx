import { AvatarCreate, getUser } from "@/api/authentication";
import { useAuth } from "@/context/AuthUserContext";
import { useToggle } from "@/hooks/use-toggle";
import { FormsType } from "@/types/forms";
import { Session } from "@/ui/components/session/session";
import { UploadAvatar } from "@/ui/components/upload-avatar/upload-avatar";
import { Button } from "@/ui/design-system/button/button";
import { Input } from "@/ui/design-system/forms/input";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

interface Props {
  form: FormsType;
}

export const ModificationForm = ({ form }: Props) => {
  const { authUser } = useAuth();
  console.log('uid', authUser)
  const listpays = ["Cameroun", "Congo kinshassa", "Congo brazaville", "Usa", "uk", "Germany", "Canada", "France", "Australia"];
  const { control, onSubmit, errors, isLoading, register, handleSubmit, setValue } = form;

  const [imagePreview, setImagePreview] = useState<string | ArrayBuffer | null>(null);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handlerImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target?.result || null);
      };
      reader.readAsDataURL(file);
    }
  };

  const { value: isLoadingIMG, toggle } = useToggle();


  return (
    <form onSubmit={handleSubmit(onSubmit)} className="pt-8 pb-5 space-y-4">
      <div className="flex items-center gap-5">
        <div className="relative w-full h-auto space-y-5 m-5">
        <Input
            isLoading={isLoading}
            placeholder="id"
            type="text"
            register={register}
            errors={errors}
            errorMsg="Ce champ est obligatoire"
            id="id"
            isAutocompleted
            defaultValue={authUser?.uid || ""}
            hidden = {true}
          />

          <Input
            isLoading={isLoading}
            placeholder="Nom"
            type="text"
            register={register}
            errors={errors}
            errorMsg="Ce champ est obligatoire"
            id="nom"
            isAutocompleted
            defaultValue={authUser?.nom || ""}
          />

          <Input
            isLoading={isLoading}
            placeholder="Lieu de naissance"
            type="text"
            register={register}
            errors={errors}
            errorMsg="Ce champ est obligatoire"
            id="lieu_naiss"
            isAutocompleted
            defaultValue={authUser?.lieu_naiss || ""}
          />

          <Input
            isLoading={isLoading}
            placeholder="Ville de résidence"
            type="text"
            register={register}
            errors={errors}
            errorMsg="Ce champ est obligatoire"
            id="ville"
            isAutocompleted
            defaultValue={authUser?.ville || ""}
          />

          <Input
            isLoading={isLoading}
            placeholder="Adresse"
            type="text"
            register={register}
            errors={errors}
            errorMsg="Ce champ est obligatoire"
            id="addresse"
            isAutocompleted
            defaultValue={authUser?.addresse || ""}
          />

          <Input
            isLoading={isLoading}
            placeholder="Profession"
            type="text"
            register={register}
            errors={errors}
            errorMsg="Ce champ est obligatoire"
            id="profession"
            isAutocompleted
            defaultValue={authUser?.profession || ""}
          />
        </div>

        <div className="relative w-full h-auto space-y-5">
          <Input
            isLoading={isLoading}
            placeholder="Prénom"
            type="text"
            register={register}
            errors={errors}
            errorMsg="Ce champ est obligatoire"
            id="prenom"
            isAutocompleted
            defaultValue={authUser?.prenom || ""}
          />

          <Input
            isLoading={isLoading}
            placeholder="Date de naissance"
            type="date"
            register={register}
            errors={errors}
            errorMsg="Ce champ est obligatoire"
            id="date_naiss"
            isAutocompleted
            defaultValue={authUser?.date_naiss || ""}
          />

          <Input
            isLoading={isLoading}
            placeholder="Email"
            type="email"
            register={register}
            errors={errors}
            errorMsg="Ce champ est obligatoire"
            id="email"
            isAutocompleted
            defaultValue={authUser?.email || ""}
          />

          <Input
            isLoading={isLoading}
            placeholder="Revenue mensuel"
            type="number"
            register={register}
            errors={errors}
            errorMsg="Ce champ est obligatoire"
            id="revenue"
            isAutocompleted
            defaultValue={authUser?.revenue || ""}
          />

<Input
            isLoading={isLoading}
            placeholder="nouveau mots de pass"
            type="password"
            register={register}
            errors={errors}
            errorMsg="Ce champ est obligatoire"
            id="password"
            isAutocompleted
            defaultValue={authUser?.revenue || ""}
            
          />
        </div>
      </div>

      <div className="relative w-full h-auto space-y-5 m-5 pb-5">
        <UploadAvatar handlerImageSelect={handlerImageSelect} imagePreview={imagePreview} label="Votre profil" />
      </div>

      <Button type="submit" fullWith>
        Mettre à jour
      </Button>
    </form>
  );
};
