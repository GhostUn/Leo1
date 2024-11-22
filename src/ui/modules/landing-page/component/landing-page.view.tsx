import { CallToActionView } from "@/ui/components/call-to-action/call-to-action.view"
import { CurrentCourseCtaView } from "./current-course-cta/current-course-cta.view"
import { FeaturedView } from "./featured/featured.view"
import { HeroTop } from "./hero-top/hero-top.view"
import { HighLightListView } from "./highlight-list/highlight-list.view"
import { CodersMonkeysSlackView } from "./Slack/coders-monkeys-slack"

export const LandingPageview = ()=>{
return <> 
        <HeroTop/>
        <FeaturedView/>
        <CodersMonkeysSlackView/>
        <HighLightListView/>
        <CallToActionView/>
    </>
}