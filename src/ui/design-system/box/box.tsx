import clsx from "clsx";

interface Props{
    children?: React.ReactNode;
    className?: string;
    padding_x?: string;
    padding_y?: string;
}

export const Box =({children, className, padding_y="py-9", padding_x="px-9"}: Props)=>{
    return(
        <div className={clsx(
            "w-full border border-gray-400   bg-white rounded",className, padding_x,padding_y
        )}>
            {children}
        </div>
    )
}