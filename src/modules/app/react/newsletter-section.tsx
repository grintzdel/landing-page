import {JSX} from "react";
import {NewsletterForm} from "@/modules/app/react/components/form";
import Image from "next/image";

export default function NewsletterSection(): JSX.Element {
    return (
        <section className="relative w-screen h-[600px]">
            <Image
                src="/hero-media-background.jpg"
                alt="Newsletter background"
                fill
                className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center px-4">
                <div className="flex flex-col items-center text-center mb-8">
                    <h2 className="text-white text-4xl md:text-5xl font-bold mb-4 capitalize">
                        Be The First To Hear
                    </h2>
                    <p className="text-white font-medium text-lg">
                        Sign up for the latest trends and offers and save 10% off your next Hortology order.
                    </p>
                </div>
                <NewsletterForm/>
            </div>
        </section>
    )
}