import React, {JSX} from "react";
import Image from "next/image";

type ProductsContainerProps = {
    children: React.ReactNode;
}

type ProductCardProps = {
    title: string;
    category: string;
    price: string;
    src: string;
}

export const ProductsContainer: React.FC<ProductsContainerProps> = ({children}: ProductsContainerProps): JSX.Element => {
    return (
        <div
            className="grid gap-6"
            style={{
                gridTemplateColumns: `repeat(auto-fit, minmax(280px, 1fr))`
            }}
        >
            {children}
        </div>
    );
};

export const ProductCard: React.FC<ProductCardProps> = ({
                                                            title,
                                                            category,
                                                            price,
                                                            src
                                                        }: ProductCardProps): JSX.Element => {
    return (
        <div className="flex flex-col group cursor-pointer">
            <div className="relative w-full h-110 mb-4 overflow-hidden">
                <Image
                    src={src}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
            </div>
            <div className="flex flex-row justify-between">
                <div className="flex flex-col">
                    <h3 className="font-bold text-lg mb-1 max-w-[200px]">{title}</h3>
                    <p className="text-sm">{category}</p>
                </div>
                <div className="font-bold text-lg">{price}</div>
            </div>
        </div>
    );
};