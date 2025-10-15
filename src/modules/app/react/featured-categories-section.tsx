import {CategoriesContainer, Category} from "@/modules/app/react/components/category";

export default function FeaturedCategoriesSection() {
    return (
        <section className="p-8">
            <CategoriesContainer itemCount={2}>
                <Category title="Tools Accessories Plants" src="/plant-4.jpg" layout="left"/>
                <Category title="Pet Friendly Plants" src="/plant-2.jpg" layout="left"/>
            </CategoriesContainer>
        </section>
    );
}