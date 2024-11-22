import { Spinner } from "./spinner"

export const ScreenSpinner = () =>{
    return (
        <div className="flex justify-center items-center h-screen">
            <Spinner size="large"/>
        </div>
    )
}