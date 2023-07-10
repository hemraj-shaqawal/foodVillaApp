import { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from '../utill/UserContext';
import { useSelector } from 'react-redux';

//JSX
 const HeaderTile = () => (
    <a href="/">
      <img
        className="h-50 p-2"
        alt="logo"
        src="https://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4=w100-rw"
      ></img>
    </a>
  );
  
  // HeaderLayout
  const HeaderLayout = () => {
    const { user } = useContext(UserContext);
    const cartItems = useSelector(store => store.cart.items);
        
    return (
      <div className="flex justify-between bg-white">
        <HeaderTile />
        <div className="flex">
          <ul className="flex py-12">
            <li className="px-2"><Link to="/">Home</Link></li>
            <li className="px-2"><Link to="/about">About</Link></li>
            <li className="px-2"><Link to="/contact">Contact</Link></li>
            <li className="px-2"><Link to="/cart">Cart - {cartItems.length} Items</Link></li>
            <li className="px-2"><Link to="/insta-mart">InstaMart</Link></li>
          </ul>
          <div className="text-lg mt-5 pt-6 ml-4 mr-4">
            { user.name }
          </div>
        </div>        
      </div>
    );
  };


 export default HeaderLayout;