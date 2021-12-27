import React, {useContext} from 'react';
import AppContext from '../Context/AppContext'
import Map from '../Components/Map';
import useGoogleAddress from '../Hooks/useGoogleAddress';
import '../Styles/Components/Success.css';

const Success = () => {

    const {state} = useContext(AppContext);

    const {buyer} = state;

    const location = useGoogleAddress(buyer[0].address);
    
    return (
        <div className="Success">
            <div className="Success-content">
                <h2>{buyer.name}, gracias por tu compra</h2>
                <span>Tu pedido llegara en 3 dias a tu direccion:</span>
                <div className="Success-map">
                    <Map data={location} />
                </div>
            </div>
        </div>
    );
}

export default Success;