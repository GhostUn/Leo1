import { Container } from "@/ui/components/container/container"
import { Typography } from "../../design-system/typography/typography"
import { Button } from "../../design-system/button/button"
import { LinkTypes } from "@/lib/link-type"
import Image from  "next/image"
import {v4 as uuidv4 } from "uuid";

export const CallToActionView = ()=>{


    interface FeaturesListInterface{
        imagePath : string;
        imageAlt : string;
        title : string;
        description : string;

    }
    const featuresData: FeaturesListInterface[] = [
        {
            imagePath: "/assets/images/leo10.jpg",
            imageAlt:"illustration",
            title:"Ressources",
            description: "Pas de frais de maintenance.",
        },
        {
            imagePath: "/assets/images/leo11.jpg",
            imageAlt:"illustration",
            title:"Entrainement",
            description: "Pas de frais mensuels. ",
        },
        {
            imagePath: "/assets/images/leo12.jpg",
            imageAlt:"illustration",
            title:"Visibilite",
            description: "Pas de frais sur les transactions échouées.",
        },
        {
            imagePath: "/assets/images/leo13.jpg",
            imageAlt:"illustration",
            title:"Relations",
            description: "Pas de frais de recharge de la carte bancaire PaySika.",
        }
    ];
        const featuredList = featuresData.map((feature) =>(
            <div  key={uuidv4()} className="relative w-[130px] h-[130px] rounded-full mb-6 p-3  z-0 overflow-hidden">
                
            <Image
                    
                    src={feature.imagePath}
                    alt={feature.imageAlt}
                    className="object-scale-down blur-2xl"
                    fill
   
                    /> 
                <Image
                    
                     src={feature.imagePath}
                     alt={feature.imageAlt}
                     className="object-scale-down "
                     fill
    
                     />
        </div>
    ));
    return(
        <div className="relative overflow-hidden bg-gray-100">
            <Container className="py-10">
            <Typography variant="h5" theme="secondary" component="h1">
                        15 octobre 2021, nous annonçons la facilitation de notre première
                        Collecte de fonds auprès d'investisseurs en France, en Angleterre et au Nigéria
                        </Typography>
            </Container>
                <Container className="grid grid-cols-12 gap-2 py-5"  >
                    
                    <div className="flex flex-col justify-between col-span-5">
                        <Typography variant="h4" theme="gray-600" component="h4">
                             Nos partenaires Ils nous soutiennent.
                        </Typography>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-7 col-span-7">{featuredList}</div>
                
                    
                    
                </Container>
               
        </div>
    )
}