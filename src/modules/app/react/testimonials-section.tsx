import React, {JSX} from "react";
import {TestimonialCard} from "@/modules/app/react/components/testimonial";

const TestimonialsHeader: React.FC = (): JSX.Element => {
    return (
        <div className="flex flex-col justify-center items-center gap-3 mb-12">
            <p className="text-lg font-medium text-[#3a9843] tracking-tight">Testimonial</p>
            <h2 className="text-2xl font-bold capitalize lg:text-4xl">What The People Thinks About Us</h2>
        </div>
    )
}

export default function TestimonialsSection() {
    const testimonials = [
        {
            name: "Dwayne Bender",
            since: "one year with us",
            review: "Connect with a live host to explore a variety of topics or browse our entire demo library, an experienced developer, we have an option for you.",
            avatar: "/memoji-3.png"
        },
        {
            name: "Lukan Depina",
            since: "one year with us",
            review: "Create custom landing pages with Omega that convert more visitors than any website. With lots of unique blocks, without coding.",
            avatar: "/memoji-2.png"
        },
        {
            name: "Charles Patterson",
            since: "one year with us",
            review: "Create custom landing pages with Omega that convert more visitors than any website. With lots of unique blocks, without coding. .",
            avatar: "/memoji-3.png"
        }
    ];

    return (
        <section className="py-16 px-8 max-w-full mx-auto">
            <TestimonialsHeader/>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {testimonials.map((testimonial, index) => (
                    <TestimonialCard
                        key={index}
                        name={testimonial.name}
                        since={testimonial.since}
                        review={testimonial.review}
                        avatar={testimonial.avatar}
                    />
                ))}
            </div>
        </section>
    )
}