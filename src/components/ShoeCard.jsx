const ShoeCard = ({setShoeImg, bigShoe, thumbnail, currentShoe}) =>{
    return (

        <div
            className={`border-2 rounded-xl ${
                currentShoe === bigShoe
                    ? "border-coral-red"
                    : "border-transparent"
            } cursor-pointer max-sm:flex-1`}
            onClick={()=>(setShoeImg(bigShoe))}
        >
            <div className='flex justify-center items-center bg-card bg-center bg-cover lg:w-40 lg:h-40 w-20 h-20 rounded-xl max-sm:p-4'>
                <img
                    src={thumbnail}
                    alt='shoe colletion'
                    width={127}
                    height={103.34}
                    className='object-contain'
                />
            </div>
        </div>

    )
}

export default ShoeCard