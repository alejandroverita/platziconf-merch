import React from 'react';


const CheckoutItem = ({ product, handleRemove}) => {
    return (
        <div className="Checkout-item" >
            <div className="Checkout-element">
                <h4>{product.title}</h4>
                <span>${product.price}</span>
            </div>
            <button type='button' onClick={handleRemove}>
                <i className="fas fa-trash-alt" />
            </button>
        </div> 
    );
}

export default CheckoutItem;