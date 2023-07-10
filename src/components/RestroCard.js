import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem, clearCart} from "../utill/storeCollection/CartSlice";

// Data interpulation
const RestroCard = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
    const cartItems = useSelector(store => store.cart.items);
    const dispatch = useDispatch();
    const addToCart = (item) => {
      dispatch(addItem(item));
    }
    const removeItemFromCart = (item) => {
      dispatch(removeItem(item))
    }

    return (
      <div className="w-[250px] px-3 hover:shadow-lg min-h-max">
        <img
          alt="icn"
          src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
            cloudinaryImageId
          }
        ></img>
        <div className="w-full">
          <h2 className="font-bold">{name}</h2>
          <h4 className="font-bold">{avgRating} Stars</h4>
        </div>      
        <h3>{cuisines?.splice(0,4).join(", ")}</h3>   
        <div className="flex justify-end">
          <button className="bg-cyan-500 w-[50px] h-8 border border-black rounded-lg mb-2 mt-2" onClick={e => addToCart(name)}>+</button>     
          <input type="text" value={cartItems.length} className="w-8 mr-5 ml-5 text-center"></input>
          <button className="bg-cyan-500 w-[50px] h-8 border border-black rounded-lg mb-2 mt-2" onClick={e => removeItemFromCart(name)}>-</button>     
        </div>
      </div>
    );
  };


  export default RestroCard;