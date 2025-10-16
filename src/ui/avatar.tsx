import React, {JSX} from "react";
import Image from "next/image";

type AvatarProps = {
    src: string;
    alt: string;
}

export const Avatar: React.FC<AvatarProps> = ({src, alt}: AvatarProps): JSX.Element => {
    return (
        <div className="w-15 h-15 rounded-full overflow-hidden bg-white p-2">
            <Image src={src} alt={alt} width={48} height={48} className="object-cover"/>
        </div>
    )
}