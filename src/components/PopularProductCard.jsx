import {AiFillStar} from 'react-icons/ai'

const PopularProductCard = ({shoeImg, shoeName, shoePrice}) =>{
    return(
        <div>
            <img src={shoeImg}/>
            <h2 className={"flex flex-row items-center py-3 font-palanquin text-gray-500"}><AiFillStar className={"text-coral-red mr-2 text-lg"}/> (4.5)</h2>
            <h2 className={"font-montserrat text-2xl font-bold"}>{shoeName}</h2>
            <p className={"py-3 font-montserrat text-xl text-coral-red font-bold"}>{shoePrice}</p>
        </div>
    )
}

export default PopularProductCard