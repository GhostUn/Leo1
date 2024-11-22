import clsx from "clsx";
import Image from "next/image";

interface Props {
    size?: "small" | "medium" | "large" | "extra-large";
    src:string;
    alt:string;
}

export const Avatar = ({ size = "medium", src, alt}: Props) => {
    let sizeStyle: string;

    switch (size) {
        case "small":
            sizeStyle = "w-[24px] h-[24px]";
            break;
        case "medium": // default
            sizeStyle = "w-[34px] h-[34px]";
            break;
        case "large":
            sizeStyle = "w-[50px] h-[50px]";
            break;
            case "extra-large":
                sizeStyle = "w-[130px] h-[130px]";
                break;
    }

    return (
        <div className={clsx(sizeStyle, "bg-gray-400 rounded-full relative")}>
            <Image
                src={src ? src : "/assets/svg/logo.svg"}
                alt={alt}
                layout="fill" // Utilisez layout="fill" pour occuper tout l'espace disponible du conteneur
                objectFit="cover" // Utilisez objectFit="cover" pour que l'image couvre bien l'espace
                className="object-cover object-center rounded-full" // Ajoutez des styles si nécessaire
                unoptimized // Ajoutez cette ligne pour désactiver l'optimisation de l'image
            />
        </div>
    );
};
