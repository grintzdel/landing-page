import {CategoriesContainer, Category} from "@/modules/app/react/category";

export default function CategoriesSection() {
    return (
        <section className="p-8">
            <CategoriesContainer itemCount={3}>
                <Category title="Air Purifying Plants" src="/plant-1.jpg"/>
                <Category title="Best Selling Plants" src="/plant-2.jpg"/>
                <Category title="Low Light Plants" src="/plant-3.jpg"/>
            </CategoriesContainer>
        </section>
    );
}