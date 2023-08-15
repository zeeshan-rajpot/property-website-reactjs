import React from 'react';
import './SplashLoader.css';
import img1 from '../images/menu.svg'

const SplashLoader = () => {
    return (
        <>
            <div className='d-flex align-items-center justify-content-center flex-column' style={{ height: '100vh' }}>
                <img
                    src={img1}
                    width='50px'
                    alt='Logo'
                />
                <h1 className='pt-4 fw-bold'>Inprop</h1>
            </div>

        </>
    );
};

export default SplashLoader;