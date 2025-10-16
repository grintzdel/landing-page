import React, {JSX} from "react";
import Image from "next/image";

type CategoryProps = {
    title: string;
    src: string;
    layout?: "center" | "left";
}

type CategoriesContainerProps = {
    itemCount: number;
    children: React.ReactNode;
}

export const Category: React.FC<CategoryProps> = ({title, src, layout = "center"}: CategoryProps): JSX.Element => {
    const overlayPosition = layout === "center"
        ? "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        : "top-1/2 left-8 -translate-y-1/2";

    const titleWords = title.split(' ');

    return (
        <div className="relative w-full h-96 overflow-hidden group cursor-pointer">
            <Image
                src={src}
                alt={title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 transition-opacity group-hover:bg-black/30"/>
            <div className={`absolute ${overlayPosition} bg-black/60 px-12 py-12`}>
                <h3 className="text-white font-bold text-3xl capitalize text-center">
                    {titleWords.map((word, index) => (
                        <React.Fragment key={index}>
                            {word}
                            {index < titleWords.length - 1 && <br/>}
                        </React.Fragment>
                    ))}
                </h3>
            </div>
        </div>
    );
};

export const CategoriesContainer: React.FC<CategoriesContainerProps> = ({
                                                                            itemCount,
                                                                            children
                                                                        }: CategoriesContainerProps): JSX.Element => {
    const getMinWidth = () => {
        if (itemCount <= 2) return 300;
        if (itemCount === 3) return 280;
        if (itemCount === 4) return 250;
        return 200;
    };

    return (
        <div
            className="grid gap-12"
            style={{
                gridTemplateColumns: `repeat(auto-fit, minmax(${getMinWidth()}px, 1fr))`
            }}
        >
            {children}
        </div>
    );
};