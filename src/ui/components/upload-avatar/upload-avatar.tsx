import { Avatar } from "@/ui/design-system/avatar/avatar"
import { RiCamera2Fill } from "react-icons/ri"
interface Props{
    handlerImageSelect:(e:React.ChangeEvent<HTMLInputElement>) => void
    imagePreview:string | ArrayBuffer | null
    label?:string
}
export const UploadAvatar = ({
    handlerImageSelect,
    imagePreview,
    label 

}:Props) => {
    return (
        <div className="flex items-center gap-5">
            <label className="
            inline-block bg-primary hover:bg-primary-400 
            text-white rounded px-[18px]
            py-[15px] text-caption-2 font-meduim animate
            cursor-pointer
            ">
                <div className="flex items-center gap-5">
                    <RiCamera2Fill/>
                    <span>Choisir un fichier</span>
                </div>
                <input type="file" className="hidden" onChange={handlerImageSelect}/>
            </label>

            <Avatar size="extra-large" alt="avatar" src= {
                imagePreview ? 
                    typeof(imagePreview)=== "string"
                    ? imagePreview: String(imagePreview)
                    : "/assets/svg/logo.svg"
            }/>
        </div>
    )
}