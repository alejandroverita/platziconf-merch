import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../Context/AppContext';
import '../Styles/Components/Header.css';

const Header = () => {
    const {state} = useContext(AppContext);
    const {cart} = state;
    
    return (
        <div className="Header">
            <h1 className='Header-title'> 
            <Link to ='/'>
                Platzi Conf Merch
            </Link >
            </h1>
            <div className= 'Header-checkout'>
                <Link to='/checkout' >
                    <i className='fas fa-shopping-basket fa-2x' />

                </Link>
            {cart.length > 0 && <div className="Header-alert">{cart.length}</div>}
            </div>
        </div>
    );
}

export default Header;