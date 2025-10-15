import Image from "next/image";
import {Button, VideoButton} from "@/ui/button";
import React, {JSX} from "react";

const HeroBackgroundImage = (): JSX.Element => {
    return (
        <Image
            src="/hero-media-background.jpg"
            alt="Hero background"
            fill
            className="object-cover"
            priority
        />
    );
};

const HeroSubtitle = (): JSX.Element => {
    return (
        <p className="uppercase font-bold mb-4 text-white/80">
            Plant Shop
        </p>
    );
};

const HeroTitle = (): JSX.Element => {
    return (
        <h1 className="text-6xl font-light mb-6 text-white capitalize max-w-[530px] lg:text-8xl">
            Create Your Orban Jungle
        </h1>
    );
};

const HeroDescription = (): JSX.Element => {
    return (
        <p className="mb-8 max-w-sm text-gray-400">
            The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced
            by fox whelps. Bawds jog, flick quartz, vex nymphs.
        </p>
    );
};

const HeroActions = (): JSX.Element => {
    return (
        <div className="flex gap-4 items-center">
            <Button text="Shop now" href="#"/>
            <VideoButton asText={true} text="Watch Our Videos" href="#"/>
        </div>
    );
};

const HeroContent = (): JSX.Element => {
    return (
        <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-12 lg:px-25">
            <HeroSubtitle/>
            <HeroTitle/>
            <HeroDescription/>
            <HeroActions/>
        </div>
    );
};

export default function HeroOverlay() {
    return (
        <div className="relative w-full h-full lg:w-[70%]">
            <HeroBackgroundImage/>
            <HeroContent/>
        </div>
    );
}