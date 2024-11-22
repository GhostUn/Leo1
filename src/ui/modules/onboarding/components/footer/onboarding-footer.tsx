import { Button } from "@/ui/design-system/button/button";
import clsx from "clsx";

interface Props{
    next?: () =>void;
    prev?: () =>void;
    isFirstStep?: () =>boolean;
    isFinalStep?:()=>boolean;
    isLoading?:boolean
}

export const OnboardingFooter = ({
    next,
    prev,
    isFirstStep,
    isFinalStep,
    isLoading
}:Props)=>{
    let actionButtonTille : string;

    if(isFirstStep && isFirstStep()){
            actionButtonTille = "Demarrer"
    }
    else if(isFinalStep && isFinalStep())
        {
        actionButtonTille="Terminer"
    }
    else{
        actionButtonTille = "Continue"
    }

    return(
        <div className="absolute bottom-0 left-0 w-full p-5 bg-white border-t border-gray-400">
            <div className={clsx(
                prev && !next && "justify-start",
                !prev && next && "justify-end",
                prev && next && "justify-between",
                "flex items-center gap-5"
            )}>
                {prev && (
                    <Button action={prev} disabled={isLoading} variant={!isLoading? "outline" : "disabled"}>
                        Retour
                    </Button>
                )}

                {next && (
                    <Button isloading={isLoading} action={next}>
                        {actionButtonTille}
                    </Button>
                )}
            </div>
        </div>
    )
}