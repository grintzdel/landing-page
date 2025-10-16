import React, {JSX} from "react";
import Link from "next/link";
import {Arrow} from "@/ui/arrow";
import {FaPlay} from "react-icons/fa";

type ButtonProps = {
    text: string;
    href: string;
    withArrow?: boolean;
    className?: string;
}

type VideoButtonProps = {
    href: string;
    asText?: boolean;
    text?: string;
}

export const VideoButton: React.FC<VideoButtonProps> = ({
                                                            href,
                                                            asText = false,
                                                            text
                                                        }: VideoButtonProps): JSX.Element => {
    return (
        <Link href={href} className="flex items-center gap-3 cursor-pointer group">
            <div
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center group-hover:bg-gray-300 transition-colors">
                <FaPlay className="text-black w-3 h-3 ml-1"/>
            </div>
            {asText && text && (
                <span className="text-white font-bold group-hover:opacity-70 transition-opacity capitalize">
                    {text}
                </span>
            )}
        </Link>
    );
};

export const Button: React.FC<ButtonProps> = ({
                                                  text,
                                                  href,
                                                  withArrow = false,
                                                  className = ""
                                              }: ButtonProps): JSX.Element => {
    return (
        <Link
            href={href}
            className={`font-medium rounded-full flex justify-center items-center content-center h-10 px-9 text-white capitalize whitespace-nowrap border-2 border-[#3a9843] bg-[#3a9843] hover:bg-white hover:text-[#3a9843] transition-colors ${
                withArrow ? "gap-1" : ""
            } ${className}`}
        >
            {text}
            {withArrow && <Arrow className="rotate-180 w-3 h-3"/>}
        </Link>
    );
}