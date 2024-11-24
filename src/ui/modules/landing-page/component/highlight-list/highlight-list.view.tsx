import { Container } from "@/ui/components/container/container"
import { Button } from "@/ui/design-system/button/button";
import { Typography } from "@/ui/design-system/typography/typography"
import Image from "next/image"
import { Children } from "react";
import { RiArrowRightLine, RiCheckboxCircleLine } from "react-icons/ri"

export const HighLightListView = () => {
    return(

        <Container className="py-24 space-y-10">
           
            <div className="flex flex-row-reverse justify-center gap-24">

            <div className="w-[409px] h-[350px] relative mt-10 ">
                <Image fill src="/assets/images/leo9.png" alt="ullustration"/>
            </div>
            <div className="max-w-md space-y-7">
                <Typography variant="h4" component="h2" weight="regular" className="" theme="primary">
                Utilisez notre carte physique n&apos;importe où
                dans le monde
                </Typography>
                <Typography variant="lead"  weight="regular" theme="gray">
                Maintenant, payez un article ou n&apos;importe quel service dans un magasin local avec votre carte bancaire physique..

                </Typography>

                <div className="space-y-3">
                    <ListPoint>
                    Pas de problème, payez facilement sur place.
                    </ListPoint>
                    <ListPoint>les paiements internationaux à un prix abordable.</ListPoint>
                    <ListPoint>Prenez votre carte physique n&apos;importe où dans le monde.</ListPoint>
                    <ListPoint>Prélever de l&apos;argent de n&apos;importe quel DAB n&apos;importe où dans le monde.</ListPoint>

                </div>
                <div className="relative inline-block bg-gray-400">
                    <Button baseUrl="/#" variant="secondary" icon={{icon:RiArrowRightLine}} iconPosition="right" >
                        Demarrer
                    </Button>
                                  </div>
                </div>
            </div>

            <div className="flex justify-center gap-24">

                <div className="w-[410px] h-[400px] relative mt-10 ">
                    <Image fill src="assets/images/leo8.png"  alt="ullustration"/>
                </div>
                <div className="max-w-md space-y-7">
                    <Typography variant="h4" component="h2" theme="secondary">
                    Votre sécurité notre priorité
                    </Typography>
                    
                    <Typography variant="caption2" component="h2" theme="gray">
                     Nous vous protégeons , 
                     alors n&apos;ayez pas peur d&apos;utiliser votre téléphone ou votre carte pour 
                     tous vos paiements en ligne et hors ligne
                    </Typography>

                    <div className="space-y-3">
                        

                        <ListPoint>
                        Toutes vos données sont cryptées et ne peuvent pas être piratées.
                        </ListPoint>
                        <ListPoint>Nous utilisons le protocole 3DSecure pour authentifier vos paiements..</ListPoint>
                        <ListPoint>Votre argent est sûr et sécurisé, stocké avec nos partenaires bancaires réglementés et de premier plan sur le marché.</ListPoint>
                       

                    </div>
                    <div className="relative inline-block">
                        <Button baseUrl="/#" icon={{icon:RiArrowRightLine}} iconPosition="right">
                            Let&apos;s go
                        </Button>
                        <Image width={25} height={27} alt="clic" 
                        className="asolute -bottom-15 right-7"
                        src="assets/svg/Vector 79.svg" 
                        />                </div>
                    </div>
                </div>
        </Container>
    )
};



interface Props {
    children:React.ReactNode;
}

const ListPoint = ({children}:Props)=>{
    return(
        <div className=" flex items-center gap-2">
            <RiCheckboxCircleLine size={24} className="text-secondary"/>
            <Typography variant="body-lg" component="span" theme="success">
                {children}
            </Typography>
        </div>
    );
};