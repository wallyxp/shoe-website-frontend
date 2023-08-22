import {AiFillStar} from 'react-icons/ai'

const PopularProductCard = ({shoeImg, shoeName, shoePrice}) =>{
    return(
        <div>
            <img src={shoeImg}/>
            <h2 className={"flex flex-row items-center"}><AiFillStar/> (4.5)</h2>
            <h2>{shoeName}</h2>
            <p>{shoePrice}</p>
        </div>
    )
}

export default PopularProductCard