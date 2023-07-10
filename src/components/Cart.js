import { useSelector } from 'react-redux';

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    return (<>
        {
            cartItems.map(element => {
               return (
                    <h1>{element}</h1>
               )
            })
        }      
    </>)
}

export default Cart