import React from "react";
import HeroSection from "@/modules/app/react/hero-section";
import ReassuranceSection from "@/modules/app/react/reassurance-section";

export default function HomePage() {
    return (
        <React.Fragment>
            <HeroSection/>
            <ReassuranceSection/>
        </React.Fragment>
    )
}