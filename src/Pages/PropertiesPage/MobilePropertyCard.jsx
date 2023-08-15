import React from 'react'
import img from '../../images/david-rodrigo-Fr6zexbmjmc-unsplash.svg';
import bed from '../../images/bed.svg';
import bath from '../../images/bath.svg';
import area from '../../images/area.svg';
import loc from '../../images/location.svg';
import call from '../../images/call.svg';
import Whatsapp from '../../images/whtsapp.svg';
import Email from '../../images/message.svg';
import Menu from '../../images/cardmenu.svg';

const MobilePropertyCard = () => {
    return (
        <>
            <div className='mobileblock'>
              
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        margin: '20px',
                        borderRadius: '15px',
                        backgroundColor: '#fff',
                        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                    }}
                >
                    <div
                        style={{
                            width: '41%',
                            height: '100%',
                            borderRadius: '15px 0 0 15px',
                        }}
                    >
                        <img
                            src={img}
                            alt='Image'
                            style={{
                                width: '100%',
                                height: '100%',
                                borderRadius: '15px 0 0 15px',
                            }}
                        />
                        {/* <h1
          className='mt-4 mb-4'
          style={{
            fontSize: '1.5vw',
            background:
              'linear-gradient(to right, rgb(165 165 165 / 52%), rgb(153 153 153 / 52%))',
            padding: '7px',
            color: '#fff',
            width: '66px',
            borderRadius: '0px 15px 15px',
            backdropFilter: 'blur(2px)',
            position: 'relative',
            height: '20px',

            transform: 'translateY(-44px) translateX(0px)',
          }}
        >
          Apartments
          <span
            style={{
              position: 'absolute',
              right: '12px',
              fontSize: '1.5vw',
            }}
          >
            13
          </span>
        </h1> */}
                    </div>
                    <div
                        style={{
                            width: '75%',
                            height: '100%',
                        }}
                    >
                        <div>
                            <h2
                                style={{
                                    marginBottom: '0px',
                                    fontSize: '2.6vw',
                                    color: '#c7c7c7',
                                    marginLeft: '4px',
                                    marginTop: '10px'
                                }}
                            >
                                Apartment
                            </h2>

                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    marginTop: '-8px',
                                }}
                            >
                                <h5
                                    style={{
                                        marginBottom: '0px',
                                        fontSize: '1.7vw',
                                        color: '#c7c7c7',
                                        marginLeft: '4px',
                                        marginRight: '5px',
                                    }}
                                >
                                    City View
                                </h5>
                                <div
                                    style={{
                                        borderRight: '1px solid #c7c7c7',
                                        height: '10px',
                                        marginRight: '5px',
                                        marginTop: '0px',
                                    }}
                                ></div>
                                <h5
                                    style={{
                                        marginBottom: '0px',
                                        fontSize: '1.7vw',
                                        color: '#c7c7c7',
                                        marginRight: '5px',
                                    }}
                                >
                                    Another Heading
                                </h5>
                                <div
                                    style={{
                                        borderRight: '1px solid #c7c7c7',
                                        height: '10px',
                                        marginRight: '5px',
                                        marginTop: '0px',
                                    }}
                                ></div>
                                <h5
                                    style={{
                                        marginBottom: '0px',
                                        fontSize: '1.7vw',
                                        color: '#c7c7c7',
                                    }}
                                >
                                    Another Heading
                                </h5>
                                <button
                                    type='submit'
                                    className='shadow'
                                    style={{
                                        width: '27%',
                                        height: '37px',
                                        backgroundColor: 'rgb(255, 255, 255)',
                                        transform: 'translateX(7px) translateY(-6px)',
                                        border: 'transparent',
                                        fontSize: '1.4vw',
                                        borderRadius: '15px 15px 0px 14px',
                                        color: '#FC780B',
                                    }}
                                >
                                    180,000 AED/year
                                    <br />{' '}
                                    <span
                                        style={{
                                            paddingLeft: '10px',
                                            fontSize: '1vw',
                                        }}
                                    >
                                        Listed 12 Minutes ago
                                    </span>
                                </button>
                            </div>

                            <hr
                                style={{
                                    margin: '0',
                                    border: '1px solid #c7c7c7',
                                    width: '75%',
                                    marginTop: '-7px',
                                }}
                            />
                        </div>
                        <div>
                            <div
                                style={{
                                    display: 'flex',
                                    marginTop: '5px',
                                    // justifyContent: 'space-between',
                                }}
                            >
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        // marginRight: '5px', // Add margin on the right
                                    }}
                                >
                                    <img src={bed} alt='bed' style={{ marginLeft: '5px' }} />
                                    <h2
                                        style={{
                                            fontSize: '1.7vw',
                                            color: '#c7c7c7',
                                            paddingTop: '9px',
                                            paddingLeft: '4px',
                                        }}
                                    >
                                        2 bedrooms
                                    </h2>
                                </div>
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        paddingLeft: '9px', // Add margin on the right
                                    }}
                                >
                                    <img src={bath} alt='bath' style={{ marginLeft: '5px' }} />
                                    <h2
                                        style={{
                                            fontSize: '1.7vw',
                                            color: '#c7c7c7',
                                            paddingTop: '9px',
                                            paddingLeft: '4px',
                                        }}
                                    >
                                        4 bathrooms
                                    </h2>
                                </div>
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        paddingLeft: '9px',
                                    }}
                                >
                                    <img src={area} alt='area' style={{ marginLeft: '5px' }} />
                                    <h2
                                        style={{
                                            fontSize: '1.7vw',
                                            color: '#c7c7c7',
                                            paddingTop: '9px',
                                            paddingLeft: '4px',
                                        }}
                                    >
                                        16,617 sqft
                                    </h2>
                                </div>
                            </div>

                            <hr
                                style={{
                                    margin: '0',
                                    marginLeft: '5px',
                                    border: '1px solid #FC780B',
                                    width: '98%',
                                }}
                            />
                            <div style={{ display: 'flex' }}>
                                <img src={loc} alt='location' style={{ marginLeft: '5px' }} />
                                <h3
                                    style={{
                                        fontSize: '1.7vw',
                                        color: '#c7c7c7',
                                        paddingTop: '9px',
                                        paddingLeft: '4px',
                                        fontFamily: 'Gilroy',
                                        fontSize: '7px',
                                        fontWeight: '300',
                                    }}
                                >
                                    Made Residences by ARTAR, Downtown Dubai, Dubai
                                </h3>
                            </div>
                            <div>
                                <div style={{ display: 'flex' }}>
                                    <div
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            paddingTop: '2px',
                                        }}
                                    >
                                        <img
                                            src={call}
                                            alt='call'
                                            style={{
                                                marginTop: '-10px',
                                            }}
                                        />
                                        <h6
                                            style={{
                                                fontSize: '1.7vw',
                                                color: '#c7c7c7',
                                                // paddingTop: '9px',
                                                marginTop: '0px',
                                            }}
                                        >
                                            Call
                                        </h6>
                                    </div>
                                    <div
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <img
                                            src={Email}
                                            alt='Email'
                                            style={{
                                                marginTop: '-10px',
                                            }}
                                        />
                                        <h6
                                            style={{
                                                fontSize: '1.7vw',
                                                color: '#c7c7c7',
                                                marginTop: '0px',
                                            }}
                                        >
                                            Email
                                        </h6>
                                    </div>
                                    <div
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <img
                                            src={Whatsapp}
                                            alt='whtsapp'
                                            style={{
                                                marginTop: '-10px',
                                            }}
                                        />
                                        <h6
                                            style={{
                                                fontSize: '1.7vw',
                                                color: '#c7c7c7',
                                                marginTop: '0px',
                                            }}
                                        >
                                            Whatsapp
                                        </h6>
                                    </div>
                                    <div
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <img
                                            src={Menu}
                                            alt='Menu'
                                            style={{
                                                marginTop: '-10px',
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default MobilePropertyCard