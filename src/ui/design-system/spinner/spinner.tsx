import clsx from "clsx";

interface Props{
    size?: "small" | "medium"|"large";
    variant?: "primary"| "white";
}



export const Spinner =({size = "medium", variant="primary"}: Props)=>{
    
    let variantStyle: string ="",
     sizeStyles: string="";


    switch(size){
        case "small":
            sizeStyles = "w-5 h-5";
            break;
        case "medium": //default
            sizeStyles = "w-9 h-9";
            break;
        case "large":
            sizeStyles = "w-12 h-12";
            break;
    }


    switch(variant){
        case "primary"://default
            variantStyle = "text-primary";
            break;
        case "white": 
        variantStyle = "text-white";
            break;
    }
    return(
        <>
      <svg
    role="spinner"
    
    className={clsx(sizeStyles, variantStyle, "animate-spin")}
    //classname={clsx(sizeStyles, viriantStyle, "animate-spin")}
    
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
>
    <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
    ></circle>
    <path
        className="opacity-75"
        fill="currentColor"
        d="M9.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"
    ></path>
</svg>

        </>
    )
}