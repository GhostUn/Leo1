import { AppLinks } from "@/types/app-links";
import { RiLinkedinBoxFill, RiSlackFill, RiYoutubeFill } from "react-icons/ri";

export const footerApplicationLinks: AppLinks[] = [
    {
        label:"Accueil",
        baseUrl:"/",
        type:"internal",
    },
    {
        label:"Project",
        baseUrl:"/#",
        type:"internal",
    },
    {
        label:"Coders Monkeys",
        baseUrl:"/#",
        type:"internal",
    },
    {
        label:"Formation",
        baseUrl:"/#",
        type:"internal",
    }
];
export const footerUsersLinks:AppLinks[]=[
    {
        label:"Mon espace",
        baseUrl:"/#",
        type:"internal"
    },
    {
        label:"connexion",
        baseUrl:"/Connexion",
        type:"internal"
    },
    {
        label:"Inscription",
        baseUrl:"/Connexion/inscription",
        type:"internal"
    },
    {
        label:"Mot de passe oublie",
        baseUrl:"/Connexion/mots-de-passe-perdu",
        type:"internal"
    },
];
export const footerInformationLinks: AppLinks[]=[
    {
        label:"CGU",
        baseUrl:"/#",
        type:"internal"
    },
    {
        label:"Confidentialite",
        baseUrl:"/#",
        type:"internal"
    },
    {
        label:"A propos",
        baseUrl:"/#",
        type:"internal"
    },
    {
        label:"Contact",
        baseUrl:"/#",
        type:"internal"
    },
];
export const footerSocialNetworksLinks: AppLinks[] = [
    {
        label:"Youtube",
        baseUrl:"/#",
        type:"external",
        icon: RiYoutubeFill
    },
    {
        label:"Linkedin",
        baseUrl:"/#",
        type:"external",
        icon: RiLinkedinBoxFill
    },
    {
        label:"Slack",
        baseUrl:"/#",
        type:"external",
        icon: RiSlackFill
    }
];

export const footerLinks = [
    {
        label:"App",
        links:footerApplicationLinks,
    },
    {
        label:"Utilisateur",
        links:footerUsersLinks,
    },
    {
        label:"Information",
        links:footerInformationLinks,
    },
    {
        label:"Reseau",
        links:footerSocialNetworksLinks,
    },
]