import React from 'react';
import Seo from '../SEO/Seo';

/* Components */
import Products from '../Components/Products';

// import initialState from '../initialState';

const seo = (
    <Seo
      title="Productos"
      description="Encuentra todos tus productos favoritos"
      image="https://davecast.s3.amazonaws.com/avatarnegativo.jpg"
      url="https://mocafood.xyz/"
    />
);

const Home = () => {
    return (
        <>
        {seo}
        <Products />
        </>
    );
}

export default Home;