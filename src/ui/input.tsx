import React, {JSX} from "react";
import {Button} from "@/ui/button";

type InputProps = {
    asButton: boolean;
}

export const Input: React.FC<InputProps> = ({asButton}: InputProps): JSX.Element => {
    return (
        <div className="relative w-full max-w-md">
            <input
                type="email"
                placeholder="Enter your email"
                className="w-full h-12 pl-6 pr-32 rounded-full focus:outline-none focus:border-[#3a9843] text-black bg-white"
            />
            {asButton && (
                <div className="absolute right-1 top-1">
                    <Button
                        text="Submit"
                        href="#"
                        className="!h-10"
                    />
                </div>
            )}
        </div>
    )
}