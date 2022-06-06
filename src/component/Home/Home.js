import React from 'react';


import Banner from './Banner';
import CustomerReview from './CustomerReview';
import Menu from './Menu';

const Home = () => {
    return (
        <div>
           
            <Banner></Banner>
            <Menu></Menu>
            <CustomerReview></CustomerReview>
           
        </div>
    );
};

export default Home;