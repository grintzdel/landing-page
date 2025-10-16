import React, {JSX} from "react";
import {Avatar} from "@/ui/avatar";
import {FaQuoteLeft} from "react-icons/fa";

type TestimonialCardProps = {
    name: string;
    since: string;
    review: string;
    avatar: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
                                                                    name,
                                                                    since,
                                                                    review,
                                                                    avatar
                                                                }: TestimonialCardProps): JSX.Element => {
    return (
        <div className="bg-gray-100 pt-10 pl-10 pr-10 pb-15">
            <div className="flex flex-col gap-8">
                <div className="flex flex-row gap-4 items-center">
                    <Avatar src={avatar} alt={name}/>
                    <div className="flex flex-col justify-center">
                        <p className="font-semibold max-w-[110px]">{name}</p>
                        <p className="text-gray-500 text-[13px] tracking-tight">{since}</p>
                    </div>
                    <FaQuoteLeft fill="#3a9843" className="h-9 w-9 ml-0 md:ml-5 lg:ml-10"/>
                </div>
                <div>
                    <p className="text-gray-700 font-light">{review}</p>
                </div>
            </div>
        </div>
    )
}