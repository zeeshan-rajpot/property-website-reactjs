import React from 'react';
import img from '../../images/david-rodrigo-Fr6zexbmjmc-unsplash.svg';
import bed from '../../images/bed.svg';
import bath from '../../images/bath.svg';
import area from '../../images/area.svg';
import loc from '../../images/location.svg';

const ReqProprty = (props) => {
    const { propertyStatus } = props;
    let textColor;

    if (propertyStatus === 'approved') {
        textColor = '#4CAF50'; // Green color for approved
    } else if (propertyStatus === 'pending') {
        textColor = '#FFC107'; // Yellow color for pending
    } else if (propertyStatus === 'rejected') {
        textColor = '#F44336'; // Red color for rejected
    } else {
        textColor = '#c7c7c7'; // Default color
    }

    return (
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
                        <div className='shadow' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottomRightRadius: '15px', marginTop: '13px' }}>
                            <h5 style={{ marginBottom: '0', padding: '5px', color: textColor , fontWeight:'600'}}>
                                {propertyStatus}
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ReqProprty;