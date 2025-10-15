import {FaTruck, FaShieldAlt, FaUndo, FaHeadset} from "react-icons/fa";
import {Reassurance} from "@/modules/app/react/components/reassurance";

export default function ReassurancesSection() {
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