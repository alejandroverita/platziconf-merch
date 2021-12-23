import React from 'react';

import '../Styles/Components/Payment.css';

const Payment = () => {
    return (
        <div className="Payment">
            <div className="Payment-content">
                <h3>Resument del pedido:</h3>
                <div className="Payment-button">
                    Boton de pago con Paypal
                </div>
            </div>
        </div>
    );
}

export default Payment;