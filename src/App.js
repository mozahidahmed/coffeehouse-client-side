
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './component/Cart/Cart';
import Contact from './component/Contact/Contact';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import Register from './component/Login/Register';
import RequireAuth from './component/Login/RequireAuth';


import Footer from './component/Shared/Footer';
import Navbar from './component/Shared/Navbar';

function App() {
  return (
    <div className="">
     
     
     
      <Navbar></Navbar>
  <Routes>
<Route path='/' element={<Home></Home>}></Route>
<Route path='home' element={<Home></Home>}></Route>
<Route path='contact' element={<Contact></Contact>}></Route>
<Route path='login' element={<Login></Login>}></Route>
<Route path='register' element={<Register></Register>}></Route>
{/* <Route path='order' element={<MyOrder></MyOrder>}></Route> */}
<Route path='order' element={<RequireAuth><Cart></Cart></RequireAuth>}></Route>




  </Routes>
  
      <Footer></Footer>
     
  
    </div>
  );
}

export default App;
