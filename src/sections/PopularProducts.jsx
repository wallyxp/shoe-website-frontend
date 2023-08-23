import {products} from "../constants/index.js";
import PopularProductCard from "../components/PopularProductCard.jsx";

const PopularProducts = () =>{

    return (
        <section id={"products"} className={"max-container max-sm:mt-12 flex justify-center"}>
            <div>
                <h2 className={"text-4xl font-bold font-palanquin my-2 pt-7 pb-4"}>
                    <span>Our </span>
                    <span className={"text-coral-red"}>
                         Popular
                    </span>
                    <span> Products</span>
                </h2>
                <p className={"md:max-w-md font-montserrat pb-8"}>These are our most popular products that customers have brought in the past 10 days. Try it out for
                yourself</p>
                <div className={"flex flex-row sm:gap-7 gap-4"}>
                    {
                        products.map((product)=>(
                            <div key={product}>
                                <PopularProductCard
                                    shoeImg={product.imgURL}
                                    shoeName={product.name}
                                    shoePrice={product.price}
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default PopularProducts