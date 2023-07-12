import { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from '../utill/UserContext';
import { useSelector } from 'react-redux';
import logo from "../assets/img/logo.png"

//JSX
 const HeaderTile = () => (
    <a href="/">
      <img
        data-testid="logoId"
        className="h-50 p-2"
        alt="logo"
        src={logo}
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
            <Link to="/cart"><li className="px-2" data-testid="cartID">Cart - {cartItems.length} Items</li></Link>
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