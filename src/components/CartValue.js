import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CartValue = () => {
    const { CartValue, location } = useContext(AppContext);

    return (
        <div className='alert alert-primary'>
            <span>Cart Value: {location}{CartValue}</span>
        </div>
    );
};

export default CartValue;
