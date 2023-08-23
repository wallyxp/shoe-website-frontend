import {services} from "../constants/index.js";
import ServicesCard from "../components/ServicesCard.jsx";

const Services = () =>{
    return (
        <div className={"flex md:flex-row flex-col justify-center items-center"}>
            {services.map((service)=>(
                <ServicesCard
                    key={service}
                    imgUrl={service.imgURL}
                    label={service.label}
                    subtext={service.subtext}
                />
            ))}
        </div>
    )
}

export default Services