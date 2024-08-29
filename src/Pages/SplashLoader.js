import React from 'react';
import './SplashLoader.css';
import img1 from '../images/menu.svg'

const SplashLoader = () => {
    return (
        <>
            <div className='d-flex align-items-center justify-content-center flex-column' style={{ height: '100vh' }}>
                <img
                    src='/Frame 1261153753.png'
                    // width='50px'
                    alt='Logo'
                />
                {/* <h1 className='pt-4 fw-bold'>Inprop</h1> */}
            </div>

        </>
    );
};

export default SplashLoader;