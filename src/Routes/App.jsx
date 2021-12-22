import React from 'react';
import { BrowserRouter,  Routes, Route } from 'react-router-dom';

/* Compoentns */
import Layout from '../Components/Layout';

/* Containers */
import Home from '../Containers/Home';
import Checkout from '../Containers/Checkout';
import Information from '../Containers/Information';
import Payment from '../Containers/Payment';
import Success from '../Containers/Success';
import NotFound from '../Containers/NotFound';

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path='/' element={<Home/>} /> 
                    <Route path='/checkout' element={<Checkout/>} /> 
                    <Route path='/checkout/information' element={<Information/>} /> 
                    <Route path='/checkout/payment' element={<Payment/>} /> 
                    <Route path='/checkout/success' element={<Success/>} /> 
                    <Route path='*' element={<NotFound/>} /> 
                </Routes>
            </Layout >
        </BrowserRouter>
    );
}

export default App;
