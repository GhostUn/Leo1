import { LinkType } from "@/lib/link-type";
import { IconType } from "react-icons";

export interface AppLinks{
    label:string;
    type:LinkType;
    baseUrl:string;
    icon?: IconType;
}

export interface FooterLinks{
    label:string,
    links:AppLinks[]
}