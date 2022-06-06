import React from 'react';
import './Menu.css'

const MenuOne = ({menu}) => {
    const {name,img,price}=menu;
    return (
        <div className='mt-12'>
           <div class="card w-96 bg-white shadow-xl moza-cart">
  <figure class="px-10 pt-10">
  <div class="avatar">
  <div class="w-24 rounded-full  ring ring-black ring-offset-base-100 ring-offset-2">
    <img src={img}  alt=""/>
  </div>
</div>


  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">{name}</h2>
    <p className="font-bold">$: {price}</p>
    <div class="card-actions">
      <button class="btn btn-primary">Add to Cart <i className='fas fa-shopping-cart text-white-700 px-1'></i></button>
    </div>
  </div>
</div>
        </div>
    );
};

export default MenuOne;