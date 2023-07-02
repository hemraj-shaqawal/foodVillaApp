import { Link } from "react-router-dom";
//JSX
 const HeaderTile = () => (
    <a href="/">
      <img
        className="logo"
        alt="logo"
        src="https://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4=w100-rw"
      ></img>
    </a>
  );
  
  // HeaderLayout
  const HeaderLayout = () => {
    return (
      <div className="header">
        <HeaderTile />
        <div className="nav-items">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/insta-mart">InstaMart</Link></li>
          </ul>
        </div>
      </div>
    );
  };


 export default HeaderLayout;