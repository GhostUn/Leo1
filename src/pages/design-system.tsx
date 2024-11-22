//COMPONENT
import { Container } from "@/ui/components/container/container"
import { Navigation } from "@/ui/components/navigation/navigations"
import { Seo } from "@/ui/components/seo/seo"

//DESIGN SYSTEM
import { Avatar } from "@/ui/design-system/avatar/avatar"
import { Button } from "@/ui/design-system/button/button"
import { Logo } from "@/ui/design-system/logo/logo"
import { Spinner } from "@/ui/design-system/spinner/spinner"
import { Typography } from "@/ui/design-system/typography/typography"
//ICO
import { RiUser3Line } from "react-icons/ri"

export default function DesignSystem(){
    return(
        <>
          <Seo title="Tigers Monkeys" description="Design System" />
      <Navigation />
      <Container className="py-10 space-y-20">

       <div className="space-y-2">
      
      <Typography variant="caption2" weight="medium">
        Typography
      </Typography>

      <div className="flex flex-col gap-2 p-5 border-gray-400 divide-y-2 divide-gray-400 rounded">
        <div className="pb-5 space-y-2">
            <Typography variant="caption2" weight="medium" >
                display
            </Typography>
            <Typography variant="display">
                Notthing is impossible
            </Typography>
      </div>
      <div className="pb-5 space-y-2">
            <Typography variant="caption2" weight="medium" >
                H1
            </Typography>
            <Typography variant="display">
                Notthing is impossible, the word itself says, Im possible
            </Typography>
      </div>
      <div className="pb-5 space-y-2">
            <Typography variant="caption2" weight="medium" >
                H1
            </Typography>
            <Typography variant="h1">
                your time is limited, so dont waste it living someone elses life
            </Typography>
      </div>
      <div className="pb-5 space-y-2">
            <Typography variant="caption2" weight="medium" >
                H2
            </Typography>
            <Typography variant="h2">
                your time is limited, so dont waste it living someone elses life
            </Typography>
      </div>
      <div className="pb-5 space-y-2">
            <Typography variant="caption2" weight="medium" >
                H3
            </Typography>
            <Typography variant="h3">
                your time is limited, so dont waste it living someone elses life
            </Typography>
            <div className="pb-5 space-y-2">
            <Typography variant="caption2" weight="medium" >
                H4
            </Typography>
            <Typography variant="h4">
                your time is limited, so dont waste it living someone elses life
            </Typography>
      </div>
      <div className="pb-5 space-y-2">
            <Typography variant="caption2" weight="medium" >
                H5
            </Typography>
            <Typography variant="h5">
                your time is limited, so dont waste it living someone elses life
            </Typography>
      </div>
      <div className="pb-5 space-y-2">
            <Typography variant="caption2" weight="medium" >
                caption 1
            </Typography>
            <Typography variant="caption1">
                caption 1
            </Typography>
      </div>
      <div className="pb-5 space-y-2">
            <Typography variant="caption2" weight="medium" >
                caption 2
            </Typography>
            <Typography variant="caption2">
                caption 2
            </Typography>
      </div>
      <div className="pb-5 space-y-2">
            <Typography variant="caption2" weight="medium" >
                caption 3
            </Typography>
            <Typography variant="caption3">
                caption 3
            </Typography>
      </div>
      <div className="pb-5 space-y-2">
            <Typography variant="caption2" weight="medium" >
                caption 4
            </Typography>
            <Typography variant="caption4">
                caption 4
            </Typography>
      </div>
      </div>
</div>
        
      </div>
     
      <div className="flex items-center gap-4 p10">
      <Spinner size="small"/>
      <Spinner/>
      <Spinner size="large"/>
      </div>
      <div>
        
      </div>

<div className="flex items-center gap-5 p-10">
      <Button isloading  size="small" >Accent</Button>
      <Button isloading  size="small" icon={{icon:RiUser3Line}} iconPosition="left">Accent</Button>
      <Button isloading  size="small" icon={{icon:RiUser3Line}} >Accent</Button>
      <Button isloading  size="small" variant="secondary" >Accent</Button>
      <Button isloading  size="small" variant="outline">secondary</Button>
      <Button isloading  size="small" variant="outline">Accent</Button>
      <Button isloading  size="small" variant="disabled" disabled>Accent</Button>
      <Button isloading   variant="ico" icon={{icon:RiUser3Line}} size="small" />
</div>
<div className="flex items-center gap-5 p-10">
      <Button >Accent</Button>
      <Button icon={{icon:RiUser3Line}} iconPosition="left">Accent</Button>
      <Button icon={{icon:RiUser3Line}} >Accent</Button>
      <Button variant="secondary" >Accent</Button>
      <Button variant="outline">secondary</Button>
      <Button variant="outline">Accent</Button>
      <Button variant="disabled" disabled>Accent</Button>
      <Button variant="ico" icon={{icon:RiUser3Line}} />
</div>
<div className="flex items-center gap-5 p-10">
      <Button size="large" >Accent</Button>
      <Button size="large" icon={{icon:RiUser3Line}} iconPosition="left">Accent</Button>
      <Button size="large" icon={{icon:RiUser3Line}} >Accent</Button>
      <Button size="large" variant="secondary" >Accent</Button>
      <Button size="large" variant="outline">secondary</Button>
      <Button size="large" variant="outline">Accent</Button>
      <Button size="large" variant="disabled" disabled>Accent</Button>
      <Button size="large" variant="ico" icon={{icon:RiUser3Line}}  />
</div>
<div className="flex items-center gap-5 p-10">
      <Button size="large" >Accent</Button>
      <Button size="large" variant="secondary">secondary</Button>
      <Button size="large" variant="outline">Accent</Button>
      <Button size="large" variant="disabled" disabled>Accent</Button>
      <Button  variant="ico" icon={{icon:RiUser3Line}} size="large"/>
      <Button  variant="ico" iconTheme="secondary" icon={{icon:RiUser3Line}} size="large"/>
      <Button  variant="ico" iconTheme="gray" icon={{icon:RiUser3Line}} />
</div>
     {/**logo/ */}
      <div className="space-y-2">
        <Typography>
            Logo
        </Typography>
        <div className="flex items-center gap-2 border border-gray-400 rounded" >
            <Logo size="very-small"/>
            <Logo size="small"/>
            <Logo size="medium"/>
            <Logo size="large"/>
        </div>
        {/**Avatar */}
        <div className="flex items-center gap-2 border border-gray-400 rounded" >
            <Avatar 
            size="small" 
            alt="avatar" 
            src="/assets/images/a monkey with black wayfarer glasses sitting psych.jpg"/>
            <Avatar 
            alt="avatar" 
            src="/assets/images/md.png"/>
            <Avatar 
            size="large" 
            alt="avatar" 
            src="/assets/images/a monkey with black wayfarer glasses sitting psych.jpg"/>

        </div>
      </div>
      </Container>
    </>
    )
}