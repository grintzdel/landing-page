import React, {JSX} from "react";
import {IconType} from "react-icons";
import {FaTruck, FaShieldAlt, FaUndo, FaHeadset} from "react-icons/fa";

type ReassuranceProps = {
    icon: IconType;
    title: string;
    description: string;
}

const Reassurance = ({icon: Icon, title, description}: ReassuranceProps): JSX.Element => {
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

export default function ReassuranceSection() {
    return (
        <section className="p-8">
            <div className="flex gap-6 justify-between flex-col lg:flex-row">
                <Reassurance icon={FaTruck} title="Free Shipping" description="Capped at $39 per order"/>
                <Reassurance icon={FaShieldAlt} title="Securety Payments" description="Up to 12 months installments"/>
                <Reassurance icon={FaUndo} title="14-Day Returns" description="Shop with confidence"/>
                <Reassurance icon={FaHeadset} title="24/7 Dedicated Support" description="Delivered to your door"/>
            </div>
        </section>
    );
}