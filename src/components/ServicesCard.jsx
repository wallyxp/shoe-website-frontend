const ServicesCard = ({imgUrl, label, subtext}) =>{
    return(
        <div className={"shadow-2xl px-3 rounded-2xl mx-3 w-[290px] h-[290px]  max-md:my-4"}>
            <div className={"px-3 py-11"}>
                <div className={"py-2"}>
                    <img
                        height={35}
                        width={35}
                        src={imgUrl}
                        alt={"image"}
                        className={"bg-coral-red p-2 rounded-full"}
                    />
                </div>
                <h1 className={"py-2 font-montserrat font-bold text-md"}>{label}</h1>
                <p className={"font-montserrat text-gray-500 text-sm sm:max-w-sm leading-5"}>{subtext}</p>
            </div>
        </div>
    )
}

export default ServicesCard