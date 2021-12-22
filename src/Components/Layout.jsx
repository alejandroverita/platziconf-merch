import React from 'react';

/* Components */
import Header from './Header.jsx';
import Footer from './Footer.jsx';

import '../Styles/Components/Layout.css';

const Layout = ({children}) => {
    return (
        <div className='Main'>
            <Header />
            {children}
            <Footer />
        </div>
    );
}

export default Layout;