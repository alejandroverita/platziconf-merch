import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Components/Information.css';

const Information = () => {
    return (
        <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Informacion de contacto:</h2>
        </div>
        <div className="Information-form">
          <form action="">
          <label htmlFor="name">
            Full Name
            <input type="text" placeholder="Full Name" name="name" id="name" />
          </label>
          <label htmlFor="email">
            Email
            <input type="text" placeholder="Email" name="email" id="email" />
          </label>
          <label htmlFor="address">
            Address
            <input
              type="text"
              placeholder="Address"
              name="address"
              id="address"
            />
          </label>
          
          <label htmlFor="country">
            Country
            <input
              type="text"
              placeholder="Country"
              name="country"
              id="country"
            />
          </label>
          
          <label htmlFor="city">
            City
            <input type="text" placeholder="City" name="city" id="city" />
          </label>
          
          <label htmlFor="phone">
            Phone
            <input type="text" placeholder="Prone" name="phone" id="phone" />
          </label>
          </form>
        </div>
        <div className="Information-buttons">
          <div className="Information-back">
            Regresar
          </div>
          <div className="Information-next">
              <Link to='/checkout/payment'>
                    Pagar

              </Link>
          </div>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Pedido:</h3>
        <div className="Information-item">
          <div className="Information-element">
            <h4>ITEM Name</h4>
            <span>$10</span>
          </div>
        </div>
      </div>
    </div>
    );
}

export default Information;