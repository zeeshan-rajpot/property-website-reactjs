import React from 'react'
import './mobilefooter.css'
import Facebooksvg from '../images/facebook.svg'
import instagramSvg from '../images/instagram.svg'
import twitter from '../images/twitter.svg'

const MobileFooter = () => {
    return (
        <>
            <div className='pt-5 border mobilefooterbg mobileblock' style={{ backgroundColor: '#FC780B' }}>

                <div className='d-flex align-center justify-content-around'>
                    <div>
                        <p className='fw-bold text-light' style={{ fontSize: '17px' }}>
                            Company
                        </p>
                        <p className='text-light'>About Us </p>
                        <p className='text-light'>How it Works</p>
                        <p className='text-light'>Events Partners </p>
                        <p className='text-light'>Blogs</p>
                        <p className='text-light'>Careers</p>
                        <p className='text-light' style={{fontSize:'9px'}}>Ⓒ 2023 Inprop Holdings Inc. <br/> All rights reserved.</p>
                    </div>
                    <div>
                        <p className='fw-bold text-light' style={{ fontSize: '17px' }}>
                            Support
                        </p>
                        <p className='text-light'>Help Center</p>
                        <p className='text-light'>Security</p>

                    </div>
                    <div>
                        <b className='fw-bold text-light' style={{ fontSize: '17px' }}>
                            Social
                        </b>
                        <br/>
                        <img src={Facebooksvg} alt="" srcset=""  />
             <img src={instagramSvg} alt="" srcset=""  className="marginright"/>
             <img src={twitter} alt="" srcset=""  className="marginright"/>
                    </div>
                </div>
            </div>


        </>
    )
}

export default MobileFooter