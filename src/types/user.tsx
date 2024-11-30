import { Timestamp } from "firebase/firestore";

export interface UserInterface{
    uid : string;
    email: string | null;
    displayName:string | null;
    emailVerified : boolean;
    phoneNumber: string | null;
    photoURL : string | null;
    userDocument?: UserDocument;
}

export interface UpdateSolde{
    id:number
    solde_compte: number
    solde_carte:number
}


export interface UserDocument {
    uid: string;
    nom:string;
    prenom:string;
    email: string;
    password:string;
    date_naiss:Date;
    lieu_naiss:string;
    pays:string;
    ville:string;
    addresse:string;
    telephone:string;
    pieceID:string;
    profession:string;
    revenue:number;
    type_compte:string;
    pin:string;
    solde_compte:number;
    solde_carte:number;
    statut:number;
    accountnumber:number,
    cvv:number,
    creation_date : Timestamp;
    onboardingIsCompleted: boolean;
    displayName:string;
    expertise:string;
    biography:string;
    id:number
} 