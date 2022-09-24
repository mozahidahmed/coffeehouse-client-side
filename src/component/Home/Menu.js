import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import MenuOne from './MenuOne';


const Menu = () => {
    const [menus,setMenus]=useState([]);
    const [carts,setCarts]=useState([]);

 
//  Fetch ........................................................
 
    useEffect(()=>{

        fetch('product.json')
        .then(res=>res.json())
        .then(data=> setMenus(data))
        },[])
// ...........................................................


     const handleAddToCart=(selectedProduct)=>{ 
        const newCart=[...carts,selectedProduct]
        setCarts(newCart)

     }


    




    return (
        <div className='mt-12 lg:flex'>
             
            
             
            <div className="mt-12">
            <h1 className='text-3xl text-black font-bold text-center'>MENU <span className="text-primary">BAR</span></h1>
           
           <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-12 justify-center'>

             
             
             
             
             
             
             
               {
               menus.map(menu=><MenuOne menus={menu} handleAddToCart={handleAddToCart}></MenuOne>)
              }
            



           </div>
            </div>


            {/* <Cart carts={carts} menus={menus}></Cart> */}


        </div>
    );
};

export default Menu;