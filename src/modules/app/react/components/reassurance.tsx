import {IconType} from "react-icons";
import React, {JSX} from "react";

type ReassuranceProps = {
    icon: IconType;
    title: string;
    description: string;
}

export const Reassurance = ({icon: Icon, title, description}: ReassuranceProps): JSX.Element => {
    return (
        <div className="flex flex-row gap-5">
            <div>
                <Icon className="w-8 h-8"/>
            </div>
            <div className="flex flex-col gap-3">
                <h3 className="font-bold">{title}</h3>
                <p className="text-gray-600 text-[13px]">{description}</p>
            </div>
        </div>
    );
};