import React from "react";

import HeroSection from "@/modules/app/react/hero-section";
import ReassurancesSection from "@/modules/app/react/reassurances-section";
import CategoriesSection from "@/modules/app/react/categories-section";

export default function HomePage() {
    return (
        <React.Fragment>
            <HeroSection/>
            <ReassurancesSection/>
            <CategoriesSection/>
        </React.Fragment>
    )
}