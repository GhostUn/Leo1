import { BaseComponentProps } from "@/types/wallet-step-list";

export const WalletView = ({
    getCurrentStep,
    next,
    prev,
    isFirstStep,
    isFinalStep,
    stepsList,
}:BaseComponentProps)=>{

    if (getCurrentStep()?.component) {
        
        const Component = getCurrentStep()?.component.step
        return(
            <div>
                {
                    Component && (
                        <Component
                            getCurrentStep = {getCurrentStep}
                            next={next}
                            prev={prev}
                            isFirstStep= {isFirstStep}
                            isFinalStep = {isFinalStep}
                            stepsList = {stepsList}
                        />
                    )
                }
            </div>
        );
    }

    return null
}