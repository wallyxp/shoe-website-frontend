const Button = ({label, iconUrl}) =>{
    return (
        <div>
            <button
                className={"bg-coral-red flex py-3 px-5 justify-center items-center text-white rounded-full hover:bg-red-700 mt-5 font-montserrat"}
            >
                {label}
                <img
                    src={iconUrl} alt={label}
                    className={"px-2 "}
                />
            </button>
        </div>
    )
}

export default Button