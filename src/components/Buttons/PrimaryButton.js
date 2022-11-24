import React from 'react';

const PrimaryButton = ({children, classes}) => {
    return (
        <button className={`btn btn-primary  text-white ${classes}`}>
            {children}
        </button>
    );
};

export default PrimaryButton;