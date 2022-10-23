import React from 'react';
import useCart from '../hooks/useCart';

const Cart = ({cart,removeFromCart}) => {
  
    const [cartInfo, setCartInfo] = useCart()
    
const handleCheckOut = (cart) => {
       setCartInfo(cart)
       console.log(cartInfo)
}
let total = 0;
for(const product of cart){
      total = total + product.price;
}



    return (
        <div>
            <h2>Cart Summary</h2>
            <h5>total product: {cart.length}</h5 >
            <p>price: {total}</p>
            {
                cart.map(product => <div key={product.id}>
                      
                    <p>{product.name} <button onClick={() => removeFromCart(product)}>X</button></p>
                  
                </div>)
            }
            {cart.length > 0 && <button onClick={() => handleCheckOut(cart)}>checkout</button>}
         
        </div>
    );
};

export default Cart;