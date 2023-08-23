import Button from "../components/Button.jsx";
import {arrowRight} from "../assets/icons/index.js";
import {statistics} from "../constants/index.js";
import {bigShoe1} from "../assets/images/index.js";
import {shoes} from "../constants/index.js";
import ShoeCard from "../components/ShoeCard.jsx";
import {useState} from "react";

const Hero = () =>{
    const [shoeImg, setShoeImg] = useState(bigShoe1)

    return (
        <section
            id={"Home"}
            className={"w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"}
        >
            <div
                className={"relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 "}
            >
                <p className={"text-red-400 font-montserrat"}>Our Summer Collections</p>
                <h1 className={'mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'}>
                    <span>The </span>
                    <br/>
                    <span className={"text-red-500"}>New Arrival </span> IEM Shoes
                </h1>
                <p className={"mt-6 leading-8 sm:max-w-sm font-montserrat"}>Discover Stylish Nike Arrivals, quality comfort and innovation for your active life desgined by AKC with active collaboration with PKD</p>
                <Button label={"Shop Now"} iconUrl={arrowRight} bgColor={"bg-coral-red"} textColor={"white"}/>
                <div
                    className={"flex justify-start gap-16 mt-20 items-start w-full"}
                >
                    {
                        statistics.map((item, key)=>(
                            <div key={key} >
                                <p
                                    className={"text-4xl font-palanquin font-bold "}
                                >{item.value}</p>
                                <p
                                    className={"leading-7 font-montserrat text-slate-gray"}
                                >{item.label}</p>
                            </div>

                        ))
                    }
                </div>
            </div>
            <div className={"relative flex-1 flex justify-center items-center lg:min-h-screen bg-primary bg-hero bg-cover bg-center rounded-2xl"}>
                <img
                    src={shoeImg}
                    alt={"shoe collection"}
                    className={"sm:w-[610px] sm:h-[502px] w-[400px] h-auto object-contain relative z-10"}
                />
                <div className={"hidden sm:flex absolute sm:gap-6 gap-4 lg:-bottom-[5%] -bottom-[10%] max-sm:-bottom-[15%] sm-left-[10%] max-sm:px-6"}>
                    {shoes.map((shoe)=>(<div key={shoe}>
                        <ShoeCard
                            setShoeImg={setShoeImg}
                            bigShoe={shoe.bigShoe}
                            thumbnail={shoe.thumbnail}
                            currentShoe={shoeImg}
                        />
                    </div>))}
                </div>
            </div>


        </section>
    )
}

export default Hero