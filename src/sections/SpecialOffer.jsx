import {arrowRight} from "../assets/icons/index.js";
import Button from "../components/Button.jsx";
import {offer} from "../assets/images/index.js";
const SpecialOffer = () =>{
    return (
        <div className={"flex md:flex-row flex-col justify-center items-center bg-primary p-6 rounded-2xl"}>
            <div className={"mr-8"}>
                <h1 className={"font-palanquin font-bold text-4xl py-2"}><span className={"text-coral-red"}>Special </span>Offer</h1>
                <p className={"font-montserrat py-2 text-md md:max-w-md"}>Don't miss our exclusive shoe sale! Enjoy up to 50% off on a wide range of stylish and durable footwear. Elevate your wardrobe with premium shoes at unbeatable prices.</p>
                <p className={"font-montserrat py-2 text-md md:max-w-md"}>Shop now for the best selection and savings while this limited-time offer lasts!</p>
                <div className={"flex flex-row py-7"}>
                    <Button
                        label={"Shop Now"}
                        iconUrl={arrowRight}
                        textColor={"white"}
                        bgColor={"bg-coral-red"}
                    />
                    <Button label={"Learn More"} textColor={"gray-500"} />
                </div>
            </div>
            <div>
                <img
                    src={offer}
                    alt={"Offer-Images"}
                />
            </div>
        </div>
    )
}

export default SpecialOffer