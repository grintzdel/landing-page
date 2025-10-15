import HeroOverlay from "@/modules/app/react/hero-overlay";
import HeroProduct from "@/modules/app/react/hero-product";

export default function HeroSection() {
    return (
        <section className="min-h-screen lg:h-screen flex flex-col lg:flex-row">
            <HeroOverlay/>
            <HeroProduct/>
        </section>
    )
}