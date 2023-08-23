import {reviews} from "../constants/index.js";
import CustomerReviewCard from "../components/CustomerReviewCard.jsx";

const CustomerReviews = () =>{
    return(
        <div className={"flex flex-col text-center"}>
            <h1 className={"font-palanquin font-bold text-4xl"}> What Our <span className={"text-coral-red"}>Customers</span> Say ?</h1>
            <p className={"pt-3 pb-10 font-montserrat text-gray-500"}> Hear genuine  stories from our statisfied customers about their experiences with us.</p>
            <div className={"flex sm:flex-row flex-col justify-center"}>
                {reviews.map((review, index)=>(
                    <CustomerReviewCard
                        key={index}
                        imgURL={review.imgURL}
                        customerName={review.customerName}
                        rating={review.rating}
                        feedback={review.feedback}
                    />
                ))}
            </div>
        </div>
    )
}

export default CustomerReviews