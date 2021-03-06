import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import AppContext from '../Context/AppContext';
import '../Styles/Components/Checkout.css';

import CheckoutItem from '../Components/CheckoutItem';

import Seo from '../SEO/Seo';

const seo = (
    <Seo
      title="Checkout"
      description="Listado de productos"
      image="https://davecast.s3.amazonaws.com/avatarnegativo.jpg"
      url="https://mocafood.xyz/"
    />
);

const Checkout = () => {

    const {state, removeFromCart} = useContext(AppContext);

    const { cart } = state;

    const handleRemove = (product) => () =>{
        removeFromCart(product);
        // console.log(cart[index])
            
    };

    const handleSumTotal = () => {
        return cart.reduce((acc, cur) => acc + cur.price, 0)
    };
    
    
    return (
        <>
            {seo}
            <div className="Checkout">
                <div className="Checkout-content">
                    <h3>{cart.length > 0 ? "Orders list" : "No orders"}</h3>

                    {cart.map((item)=>(

                        <CheckoutItem 
                            
                            product={item} 
                            handleRemove={handleRemove(item)}
                        />
                    ))}
                </div>
                
                {cart.length > 0 && (
                    <div className="Checkout-sidebar">
                        <h3>Precio Total: ${handleSumTotal()}</h3>
                        <Link to='/checkout/information'>
                            <button type='button'>Continuar</button>
                        </Link>
                    </div>
                )}
            </div>
        </>
    );
}

export default Checkout;