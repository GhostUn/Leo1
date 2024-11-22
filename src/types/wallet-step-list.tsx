export interface BaseComponentProps{
    next:()=>void;
    prev:()=>void;
    isFirstStep: ()=> boolean
    isFinalStep: ()=> boolean
    stepsList:walletStepsListInterface[]
    getCurrentStep :() =>walletStepsListInterface | undefined;
}

export interface walletStepsListInterface {
    id: number,
    label:string,
    component:{
        step:React.ComponentType<BaseComponentProps>
    },
    frequences:freq[]
}

export interface freq{
    freq:{}
}