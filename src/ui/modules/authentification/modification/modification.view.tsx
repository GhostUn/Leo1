import { Container } from "@/ui/components/container/container"
import { Box } from "@/ui/design-system/box/box"
import { Typography } from "@/ui/design-system/typography/typography"
import Image from "next/image"
import Link from "next/link"
import { FormsType } from "@/types/forms"
import { ModificationForm } from "./modification.form"
import { UserDocument } from "@/types/user"

interface Props{
    form: FormsType;
   
}
export const ModificationView = ({form}:Props)=>{
    return(
    <Container className="grid grid-cols-2 gap-10 mb-32">

        <div className="flex items-center">
            <div className="relative w-full h-[531px]">
                <Image fill src="/assets/images/Group 59.png" 
                       alt="description de l'illustration"
                       className="object-scale-down"
                />
               
            </div>
        </div>
        

                <div>
                    <ModificationForm form={form} />
                    
                </div>
          
    </Container>

)}
       