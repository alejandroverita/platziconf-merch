import React, {useRef, useContext} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AppContext from '../Context/AppContext';
import '../Styles/Components/Information.css';

const Information = () => {
  const {state, addToBuyer} = useContext(AppContext);
  const form = useRef(null);
  const navigate = useNavigate();
  const {cart} = state;

  const handleSubmit = () => {
    const formData = new FormData(form.current);
    const buyer = {
      'name': formData.get('name'),
      'email': formData.get('email'),
      'address': formData.get('address'),
      'country': formData.get('country'),
      'city': formData.get('city'),
      'phone': formData.get('phone'),
    }

    addToBuyer(buyer);
    navigate('/checkout/payment')
    
  }
  
    return (
        <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Informacion de contacto:</h2>
        </div>
        <div className="Information-form">
          <form ref={form}>
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
            <Link to='/checkout'>
            Regresar

            </Link>
          </div>
          <div className="Information-next">
                    <button type='button' onClick={handleSubmit}>
                      Pagar
                    </button>
              {/* {<Link to='/checkout/payment'>

              </Link>} */}
          </div>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Pedido:</h3>
        {cart.map((item) => ( 
          <div className="Information-item" key={item.title}>
            <div className="Information-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
          </div>
        ))}

      </div>
    </div>
    );
}

export default Information;