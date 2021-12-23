import React, {useState} from 'react';


import initialState from '../initialState';

const useInitialState = () => {

    const [state, setState] = useState(initialState);

    const addToCart = payload => {
        setState({
            ...state,
            cart: [...state.cart, payload],
        })
    };

    const removeFromCart = payload => {
        console.log(payload)
        setState({
            ...state,
            cart:[state.cart.filter(item => item.id !== payload.id)],
        })
        console.log(item.id)
    }

    return {
        addToCart,
        removeFromCart,
        state,
    };
    
}

export default useInitialState;