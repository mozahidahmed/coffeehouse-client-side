import React, { useEffect, useState } from 'react';
import MenuOne from './MenuOne';








const Menu = () => {
    const [menus,setMenus]=useState([])


    useEffect(()=>{

        fetch('product.json')
        .then(res=>res.json()).then(data=>setMenus(data))
        
        
        },[])



    return (
        <div className='mt-12 '>
            <h1 className='text-3xl text-black font-bold text-center'>MENU <span className="text-primary">BAR</span></h1>
             <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-12 justify-center'>

                 {
                 menus.map(menu=><MenuOne menu={menu}></MenuOne>)
                }
             </div>
        </div>
    );
};

export default Menu;