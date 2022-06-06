import React, { useEffect, useState } from 'react';
import Review from './Review';








const CustomerReview = () => {
    const [reviews,setReviews]=useState([])


    useEffect(()=>{

        fetch('review.json')
        .then(res=>res.json()).then(data=>setReviews(data))
        
        
        },[])



    return (
        <div className='mt-12'>
            <h1 className='text-3xl text-black font-bold text-center'>CUSTOMER <span className="text-primary">REVIEWS</span></h1>
             <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-12 justify-center'>

                 {
                 reviews.map(review=><Review  review={review}></Review>)
                }
             </div>
        </div>
    );
};

export default CustomerReview;