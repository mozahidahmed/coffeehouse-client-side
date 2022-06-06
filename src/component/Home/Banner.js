import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
    
    return (
        <div className="bg-style">
            <div class="hero py-16  px-6">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src="https://i.ibb.co/ZLPMZCS/Abou-C.webp"  alt=""/>
    <div>
      <h1 class="text-4xl font-bold text-white">FRESH COFFEE IN <br/>THE MORNING</h1>
      <p class="py-6 text-white">the best coffee house in banglades at sylhet the best coffee house in banglades at sylhet
      the best coffee house in banglades at sylhet
      the best coffee house in banglades at sylhet
      the best coffee house in banglades at sylhet
      </p>
     <Link to="/contact"> <button class="btn btn-primary text-black font-bold">CONTACT US</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;