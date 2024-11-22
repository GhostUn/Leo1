import { LinkTypes } from "@/lib/link-type"
import { Container } from "@/ui/components/container/container"
import { Button } from "@/ui/design-system/button/button"
import { Logo } from "@/ui/design-system/logo/logo"
import { Typography } from "@/ui/design-system/typography/typography"
import Image from "next/image"

export const CodersMonkeysSlackView = () =>{
    return(
       <Container className="flex justify-between">
        <div className="flex flex-col justify-center max-w-xl space-y-5">
            <div className="flex items-center gap-2 ">
                <Logo size="very-small"/>
                    <Typography
                    variant="caption2"
                    component="span"
                    weight="medium"
                    >
                       LeoSika
                    </Typography>
            </div>
            <Typography variant="h3" 
            component="h2" className="items-center justify-center">
               Carte de débit gratuite en Afrique francophone
            </Typography>
            <Typography variant="body-lg" 
            component="p" theme="gray" className="max-w-lg">
                Nous offrons deux types de cartes bancaires : la virtuelle et la physique. Les deux cartes vous permettent de payer sur n’importe quel site en ligne (Amazon, Netflix, Alibaba, Cdiscount, etc.) 
                ou d\’être connecté à des plateformes telles que Google Play, App Store, PayPal, etc.
            </Typography>

            <Button baseUrl="/#" linkType={LinkTypes.EXTERNAL}>
            <Button baseUrl="">Optenez votre carte gratuite</Button>
            </Button>

        </div>


        <div className="relative w-[600px] h-[600px]">

            <Image 
            fill
            src="/assets/images/leo1.avif"
            alt="Groupe Slack des Tigers Monkeys"
            />

        </div>
       </Container>
    )
}