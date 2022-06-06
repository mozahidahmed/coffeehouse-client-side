import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Navbar.css'


const Navbar = () => {

  const [user] = useAuthState(auth);
  
  const logout = () => {
    signOut(auth);
    localStorage.removeItem('accessToken')
  };
    
  
   
       
  
 
        const menuitems=
        <>
        <li className='text-white font-bold text-1xl '><Link to="/home">Home</Link></li>

        <li className='text-white font-bold text-1xl'><Link to="/contact">Contact</Link></li>

        <li className='text-white font-bold text-1xl'><Link to="/order"><i className='fas fa-shopping-cart text-white-700'></i></Link></li>
       
       {
         user?
        
         
         <button onClick={logout} class="btn btn-active btn-ghost text-white font-bold text-1xl">SignOut</button>
  
    
         :
       
         <li className='text-white font-bold text-1xl'><Link to="/login">Login</Link></li>
      
       }
     





        </>
      
    return (
      <div className='bg-black   px-6'>
  <div className="navbar">
        <div className="navbar-start ">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-primary lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52">
           
           {menuitems}
  
            
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl font-bold text-white">MOZAHID COFFEE</a>
          
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
          {menuitems}
          </ul>
        </div>
       <div>
     
       </div>

       

      </div>


      </div>
    );
};

export default Navbar;