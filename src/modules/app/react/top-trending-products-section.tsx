import React, {JSX} from "react";
import {Button} from "@/ui/button";
import {Divider} from "@/ui/divider";
import {ProductsContainer, ProductCard} from "@/modules/app/react/products";

const TopTrendingProductHeader = (): JSX.Element => {
    return (
        <div className="flex flex-col justify-between items-center mb-13 gap-8 md:flex-row">
            <h2 className="text-2xl font-bold whitespace-nowrap lg:text-4xl">Top Trending Products</h2>
            <Divider axis="horizontal" width="full" color="bg-gray-300"/>
            <Button text="Shop plants" href="#"/>
        </div>
    );
};

const topTrendingProducts = [
    {
        title: "Hoya carnosa Tricolor",
        category: "Indoor Plants",
        price: "$58",
        src: "/plant-1.jpg"
    },
    {
        title: "Monstera Deliciosa",
        category: "Tropical Plants",
        price: "$45",
        src: "/plant-2.jpg"
    },
    {
        title: "Fiddle Leaf Fig",
        category: "Indoor Plants",
        price: "$65",
        src: "/plant-3.jpg"
    },
    {
        title: "Snake Plant",
        category: "Air Purifying",
        price: "$32",
        src: "/plant-4.jpg"
    },
    {
        title: "Hoya carnosa Tricolor",
        category: "Indoor Plants",
        price: "$58",
        src: "/plant-1.jpg"
    },
    {
        title: "Monstera Deliciosa",
        category: "Tropical Plants",
        price: "$45",
        src: "/plant-2.jpg"
    },
    {
        title: "Fiddle Leaf Fig",
        category: "Indoor Plants",
        price: "$65",
        src: "/plant-3.jpg"
    },
    {
        title: "Snake Plant",
        category: "Air Purifying",
        price: "$32",
        src: "/plant-4.jpg"
    }
];

export default function TopTrendingProductsSection() {
    return (
        <section className="p-8">
            <TopTrendingProductHeader/>
            <ProductsContainer>
                {topTrendingProducts.map((product, index) => (
                    <ProductCard
                        key={index}
                        title={product.title}
                        category={product.category}
                        price={product.price}
                        src={product.src}
                    />
                ))}
            </ProductsContainer>
        </section>
    );
}