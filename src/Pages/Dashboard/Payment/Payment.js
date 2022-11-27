import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {

    const booking= useLoaderData()
    console.log(booking)

    return (
        <div>
            <h1>Payment</h1>
        </div>
    );
};

export default Payment;