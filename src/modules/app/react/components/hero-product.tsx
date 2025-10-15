import Image from "next/image";
import {Button} from "@/ui/button";
import React, {JSX} from "react";

const ProductImage = (): JSX.Element => {
    return (
        <div className="relative w-full max-w-md aspect-square mb-6">
            <Image
                src="/hero-product.jpg"
                alt="Product"
                fill
                className="object-contain"
            />
        </div>
    );
};

const ProductTitle = (): JSX.Element => {
    return (
        <h2 className="text-2xl font-bold mb-2 max-w-[260px]">
            Hoya carnosa Tricolor
        </h2>
    );
};

const ProductCategory = (): JSX.Element => {
    return (
        <p className="text-[#3a9843] font-bold mb-3">
            accessories
        </p>
    );
};

const ProductDescription = (): JSX.Element => {
    return (
        <p className="text-gray-600 max-w-[260px] mb-6">
            Hill Science Plan Healthy Development Puppy Food Large...
        </p>
    );
};

const ProductPrice = (): JSX.Element => {
    return (
        <span className="text-2xl font-bold ml-4">
            $58
        </span>
    );
};

const ProductActions = (): JSX.Element => {
    return (
        <div className="flex items-center">
            <Button text="Add to Cart" href="#" withArrow/>
            <ProductPrice/>
        </div>
    );
};

export default function HeroProduct() {
    return (
        <div className="flex-1 flex flex-col justify-center items-center">
            <div className="px-15 w-full max-w-md">
                <ProductImage/>
                <ProductTitle/>
                <ProductCategory/>
                <ProductDescription/>
                <ProductActions/>
            </div>
        </div>
    );
}