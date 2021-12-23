import React from 'react';

/* Components */
import Products from '../Components/Products';

import initialState from '../initialState';

const Home = () => {
    return (
        <Products products={initialState.products} />
    );
}

export default Home;