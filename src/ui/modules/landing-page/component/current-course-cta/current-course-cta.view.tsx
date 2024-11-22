import { Container } from "@/ui/components/container/container"
import { Typography } from "@/ui/design-system/typography/typography"
import Image from "next/image"
import { RiPlayCircleFill } from "react-icons/ri"

export const CurrentCourseCtaView = ()=>{
    return(
       <div className="bg-gray-300">

        <Container className="py-24 text-center">
            <Typography variant="h2" component="h2" className="mb-2.5">
                Formations React.js gratuite
            </Typography>
            <Typography variant="lead" component="h3" className="mb-5">
                Apprends a coder l'app des Tigres codeurs
            </Typography>

            <Typography variant="caption3" component="p" theme="gray" className="mb-16">
               Si tu veux un cv plus sexy que ton ex, suis cette formation
            </Typography>

            <a href="/#" target="_blank">
                    <div className="relative bg-gray-400 rounded h-[626px]">
                        <div className="relative h-full flex flex-col gap-2 items-center justify-center bg-gray text-white z-10 opacity-0 hover:opacity-95 animate">
                           <RiPlayCircleFill size={42}/>
                            <Typography variant="caption2" theme="white" className="uppercase" weight="medium">
                                Lire la formation
                            </Typography>
                        </div>
                        <Image fill src="assets/images/Group(1).png" alt="" className="object-cover object-center rounded"/>
                    </div>
            
            </a>
        </Container>
       </div>
    )
}