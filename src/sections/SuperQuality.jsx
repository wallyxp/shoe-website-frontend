import Button from "../components/Button.jsx";
import {shoe8} from "../assets/images/index.js";
const SuperQuality = () =>{
    return(
        <div className={"flex md:flex-row flex-col justify-center items-center padding-l bg-primary rounded-2xl"}>
            <div className={"pr-20 my-8"}>
                <h1 className={"font-palanquin text-3xl font-bold tracking-wide leading-9"}>
                    <span>We Provide You </span>
                    <span className={"text-coral-red"}>Super <br/>Quality </span>
                    Shoes
                </h1>
                <p className={"sm:max-w-sm pt-4 font-montserrat text-gray-500"}>
                    Super quality shoes are crafted from the finest materials available. This often includes full-grain leather for the upper, which is not only durable but also develops a rich patina over time.
                </p>
                <p className={"sm:max-w-sm pt-5 pb-3 font-montserrat text-gray-500"}>
                    The linings and insoles are typically made from high-quality leather or moisture-wicking materials for comfort and breathability.
                </p>
                <Button label={"View Details"} textColor={"white"} bgColor={"bg-coral-red"}/>
            </div>
            <div className={"max-sm: p-5"}>
                <img
                    src={shoe8}
                />
            </div>
        </div>
    )
}

export default SuperQuality