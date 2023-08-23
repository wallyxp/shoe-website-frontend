const Button = ({label, iconUrl, bgColor, textColor}) =>{
    return (
        <div className={"mr-3"}>
            <button
                className={`${bgColor? bgColor : "ring-1 ring-gray-500"} flex py-3 px-5 justify-center items-center text-${textColor} rounded-full ${bgColor ? "hover:bg-red-700" : "hover:bg-gray-600 hover:text-white"} font-montserrat`}
            >
                {label}
                {
                    iconUrl? <img
                        src={iconUrl} alt={label}
                        className={"px-2 "}
                    /> : " "
                }

            </button>
        </div>
    )
}

export default Button