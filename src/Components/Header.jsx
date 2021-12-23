import React from 'react';
import { Link } from 'react-router-dom';

import '../Styles/Components/Header.css';

const Header = () => {
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
            </div>
        </div>
    );
}

export default Header;