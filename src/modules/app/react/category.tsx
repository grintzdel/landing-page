import React, {JSX} from "react";
import Image from "next/image";

type CategoryProps = {
    title: string;
    src: string;
    layout?: "center" | "left";
}

export const Category = ({title, src, layout = "center"}: CategoryProps): JSX.Element => {
    const overlayPosition = layout === "center"
        ? "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        : "bottom-8 left-8";

    return (
        <div className="relative w-full h-80 overflow-hidden rounded-lg group cursor-pointer">
            <Image
                src={src}
                alt={title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 transition-opacity group-hover:bg-black/30"/>
            <div className={`absolute ${overlayPosition} bg-black/70 px-6 py-4 rounded backdrop-blur-sm`}>
                <h3 className="text-white font-bold text-xl whitespace-nowrap capitalize">{title}</h3>
            </div>
        </div>
    );
};

type CategoriesContainerProps = {
    itemCount: number;
    children: React.ReactNode;
}

export const CategoriesContainer = ({itemCount, children}: CategoriesContainerProps): JSX.Element => {
    const getMinWidth = () => {
        if (itemCount <= 2) return 300;
        if (itemCount === 3) return 280;
        if (itemCount === 4) return 250;
        return 200;
    };

    return (
        <div
            className="grid gap-6"
            style={{
                gridTemplateColumns: `repeat(auto-fill, minmax(${getMinWidth()}px, 1fr))`
            }}
        >
            {children}
        </div>
    );
};