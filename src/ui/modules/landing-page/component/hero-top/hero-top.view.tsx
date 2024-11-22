import { Container } from "@/ui/components/container/container"
import { Button } from "@/ui/design-system/button/button"
import { Typography } from "@/ui/design-system/typography/typography"
import Image from  "next/image"


export const HeroTop = () =>{

    return(
        <Container 
        className="relative pt-40 pb-40 overflow-hidden">
            <div className="w-full max-w-2xl space-y-5">
                <Typography variant="h3" component="h1" className="max-w-lg">
                Un Compte, une carte bancaire gratuite.
                </Typography>
                <Typography 
                variant="body-lg" 
                component="p" 
                theme="gray" 
                className="max-w-xl">
                    En 2 minutes, créez votre compte LeoSika, puis, 
                    obtenez gratuitement et instantanément 
                    votre carte bancaire internationale depuis votre lit . 
                </Typography>
                <div className="space-x-5 pt-2.5">
                    <Button baseUrl="">Optenez votre carte gratuite</Button>
                    <Button baseUrl="" variant="secondary">En savoir plus</Button>

                </div>
            </div>
            <Image 
                src="/assets/images/leo2.avif"
                alt="Illustration d'une fusee"
                width={611}
                height={196}
                className="absolute top-0 right-0 z-0"
                />
        </Container>
    )
}