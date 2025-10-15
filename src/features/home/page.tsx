import React from "react";

import HeroSection from "@/modules/app/react/hero-section";
import ReassurancesSection from "@/modules/app/react/reassurances-section";
import CategoriesSection from "@/modules/app/react/categories-section";
import TopTrendingProductsSection from "@/modules/app/react/top-trending-products-section";
import FeaturedCategoriesSection from "@/modules/app/react/featured-categories-section";
import TestimonialsSection from "@/modules/app/react/testimonials-section";

export default function HomePage() {
    return (
        <React.Fragment>
            <HeroSection/>
            <ReassurancesSection/>
            <CategoriesSection/>
            <TopTrendingProductsSection/>
            <FeaturedCategoriesSection/>
            <TestimonialsSection/>
        </React.Fragment>
    )
}