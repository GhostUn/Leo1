import { Container } from "@/ui/components/container/container"
import { SocialNetworksButtons } from "@/ui/components/navigation/social-networks-buttons";
import { Button } from "@/ui/design-system/button/button";
import { Typography } from "@/ui/design-system/typography/typography";
import Image from "next/image";
import { DiVim } from "react-icons/di";
import { RiArrowRightCircleFill } from "react-icons/ri";
import {v4 as uuidv4 } from "uuid";

    interface FeaturesListInterface{
        imagePath : string;
        imageAlt : string;
        title : string;
        description : string;

    }
    const featuresData: FeaturesListInterface[] = [
        {
            imagePath: "/assets/svg/disk.svg",
            imageAlt:"illustration",
            title:"Ressources",
            description: "Pas de frais de maintenance.",
        },
        {
            imagePath: "/assets/svg/game.svg",
            imageAlt:"illustration",
            title:"Entrainement",
            description: "Pas de frais mensuels. ",
        },
        {
            imagePath: "/assets/svg/cam.svg",
            imageAlt:"illustration",
            title:"Visibilite",
            description: "Pas de frais sur les transactions échouées.",
        },
        {
            imagePath: "/assets/svg/compass.svg",
            imageAlt:"illustration",
            title:"Relations",
            description: "Pas de frais de recharge de la carte bancaire PaySika.",
        }
    ];



export const FeaturedView = ()=>{

    const featuredList = featuresData.map((feature) =>(
        <div key={uuidv4()} className="flex flex-col items-center justify-center bg-white rounded p-7">
            <div className="relative w-[130px] h-[130px] rounded-full mb-6 p-10  z-0 overflow-hidden">
                
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
            <Typography variant="lead" component="h3" weight="medium" className="text-center mb-2.5">
                {feature.title}
            </Typography>

            <Typography variant="body-base" component="p" theme="gray"className="text-center" >
                {feature.description}
            </Typography>
        </div>
    ));

    return (
        <div className="bg-gray-300">
            <Container className="grid grid-cols-12 gap-24 py-24">
                <div className="grid grid-cols-2 gap-7 col-span-7">{featuredList}</div>
                <div className="flex flex-col justify-between gap-10 col-span-5" >

                    <div>
                        <Typography 
                        variant="h2" 
                        component="h2"
                        className="mb-5">
                                Recevez votre paiements.
                        </Typography>
                        <Typography 
                        variant="body-lg" 
                        theme="black"
                        className="mb-8">
                              Vous pouvez recevoir des paiements de Paypal,
                                l'échange de plates-formes de plaques ou de plateformes de paris en ligne ,
                                à partir des redevances YouTube , Facebook, Instagram,
                                TikTok et bien d'autres. {" "}
                        </Typography>
                        
                        <div className="relative w-[430px] h-[230px] mb-6 p-10  z-0 overflow-hidden">
                        
                            <Image 
                            fill
                            src="/assets/images/leo7.png"
                            alt="Groupe Slack des Tigers Monkeys"
                            />
                        </div>
                    </div>
                    <div>
                    <Typography 
                        variant="caption3" 
                        theme="gray"
                        className="mb-4">
                            Nos reseau sociaux
                    </Typography>
                    <SocialNetworksButtons/>

                    </div>
                </div>
            </Container>
        </div>
    )
}