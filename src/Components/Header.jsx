import React from 'react';

import '../Styles/Components/Header.css';

const Header = () => {
    return (
        <div className="Header">
            <h1 className='Header-title'> Platzi Conf Merch</h1>
            <div className = 'Header-checkout'>
                Checkout
            </div>
        </div>
    );
}

export default Header;