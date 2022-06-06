import React from 'react';



const Review = ({ review }) => {
    const { name, img, description } = review;
    return (
        <div className='mt-12'>

            <div class="card w-96 bg-white shadow-xl moza-cart">
                <figure class="px-10 pt-10">

                    <div class="avatar">
                        <div class="w-24 rounded-full  ring ring-black ring-offset-base-100 ring-offset-2">
                            <img src={img} alt="" />
                        </div>
                    </div>


                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{name}</h2>
                    <p>{description}</p>

                    <div className='flex justify-center'>
                        <i className='fas fa-star text-yellow-500'></i>
                        <i className='fas fa-star text-yellow-500 icon-style'></i>
                        <i className='fas fa-star text-yellow-500 icon-style'></i>
                        <i className='fas fa-star text-white-700 icon-style'></i>
                        
                    </div>

                    <div class="card-actions">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;