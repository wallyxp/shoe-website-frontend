import {AiFillStar} from 'react-icons/ai'
const CustomerReviewCard = ({imgURL, customerName, rating, feedback}) =>{
    return (
        <div className={"flex flex-col items-center "}>
            <div className={"pt-6 pb-4"}>
                <img
                    src={imgURL}
                    alt={"img"}
                    height={100}
                    width={100}
                    className={"rounded-full"}
                />
            </div>
            <p className={"text-center sm:max-w-sm font-montserrat text-md text-gray-500 py-4"}>{feedback}</p>
            <h2 className={"flex items-center"}><span className={"text-coral-red"}><AiFillStar/></span><span className={"text-gray-500 p-1"}>({rating})</span></h2>
            <h2 className={"font-montserrat font-medium text-sm"}>{customerName}</h2>
        </div>
    )
}

export default CustomerReviewCard