export interface FormsType{
    setValue: (name: string, value: any) => void;
    control:any;
    onSubmit:any;
    errors:any;
    isLoading:boolean,
    register:any;
    handleSubmit:any;
}
export interface RegisterFormFielsType{
    id:string;
    email: string;
    password:string;
    nom:string;
    prenom:string;
    date_naiss:Date;
    lieu_naiss:string;
    pays:string;
    ville:string;
    Addresse:string;
    telephone:number;
    pieceID:string;
    profession:string;
    revenue:number;
    type_compte:"courant" | "epagne";
    pin:number;

    solde_compte:number,
    solde_carte:number,
    accountnumber:number,
    cvv:number,
    cartenumber:number,

    photoURL: string,
}

export interface LoginFormFielsType{
    email: string;
    password:string;
}
export interface ForgetPasswordFormFielsType{
    email: string;
}

export interface OnboardingProfileFormFieldsType{
    nom:string;
    prenom:string;
    telephone: string;
}

export interface PhonemunberFieldsType{
    phoneNumber : number
}

export interface UpdateSolde{
    solde_carte : number
    solde_compte: number
}