import React, {useContext} from 'react';
import {PayPalButton} from 'react-paypal-button-v2';
import AppContext from '../Context/AppContext';
import '../Styles/Components/Payment.css';

const Payment = ({history}) => {
    const { state, addNewOrder } = useContext(AppContext);
    const { cart, buyer } = state;

    const handleSumTotal = () => {
        return cart.reduce((acc, cur) => acc + cur.price, 0)
    };

    const handlePaymentSuccess = (data) => {
        console.log(data);
        if(data.status === 'COMPLETED'){
            const newOrder = {
                buyer,
                product: cart, 
                payment: data,
            }
            addNewOrder(newOrder);
            history.push('/checkout/success')
        }
    }

    const paypalOptions = {
        clientId: process.env.REACT_APP_CLIENT_ID,
        intent: 'capture',
        currency: 'USD,'
    }

    const buttonSyles = {
        layout: 'vertical',
        shape: 'rect'
    }
    
    return (
        <div className="Payment">
            <div className="Payment-content">
                <h3>Resument del pedido:</h3>
                {cart.map((item)=> ( 
                    <div className="Payment-item" key={item.title}>
                        <div className="Payment-element">
                            <h4>{item.title}</h4>
                            <span>$ {''} {item.price}</span>
                        </div>
                    </div>
                ))}
                
                <div className="Payment-button">
                    <PayPalButton 
                        paypalOptions = {paypalOptions}
                        buttonStyles = {buttonSyles}
                        amount = {handleSumTotal()}
                        onPaymentStart= {() => console.log('Start payment')}
                        onPaymentSuccess = {data => handlePaymentSuccess(data)}
                        onPaymentError = {error => console.log(error)}
                        onPaymentCancel = {data => console.log(data)}
                    />
                </div>
            </div>
        </div>
    );
}

export default Payment;