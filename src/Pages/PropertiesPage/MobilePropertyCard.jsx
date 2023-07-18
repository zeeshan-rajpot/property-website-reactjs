import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import New from "../../images/Component 26 – 1.png";
import location from "../../images/location.svg";
import bedicon from "../../images/bedicon.svg";
import broom from "../../images/broom.svg";
import email from "../../images/email.svg";
import phone from "../../images/phone.svg";
import Whatsapp from "../../images/Component 26 – 1.svg";
import Carousel from './CarouselPropertImg';
import HeartBtn from './RadioBtn';
import { Link } from 'react-router-dom';

function MobilePropertyCard(props) {
    return (
        <Row xs={1} md={2} className="g-4">
           
                <Col>
                    <div
                        style={{
                            position: "absolute",
                            marginTop: "1px",
                            marginLeft: "5.7rem",
                            zIndex: '100'
                        }}
                    >
                        <img src={New} alt="" />
                    </div>

                    <div
                        className="heartbtn"
                        style={{
                            position: "absolute",
                            marginTop: "15px",
                            marginLeft: "30rem",
                            zIndex: '100'
                        }}
                    >
                        <HeartBtn />
                    </div>
                    <Card className="border-3 " border="secondary" style={{ border: '1px solid rgb(0 0 0 / 17%)' }}>
                        <Carousel />
                        <Link to={`/DetailPage/${props.id}`}>
                        <Card.Body>
                            <Card.Title className='text-secondary'>{props.title}</Card.Title>
                            <Card.Text>
                                <h1 style={{color:'#EC6337'}}>{props.price} AED/Year</h1>
                                <img src={location} alt="" />
                                <span className='text-secondary'>  {props.location}</span>
                                <div className='mt-3'>
                                    <img src={bedicon} alt="" />
                                    <span className='text-secondary'>  {props.bedroom}   </span>
                                    <img src={broom} alt=""  className='ms-3'/>
                                    <span className='text-secondary'>  {props.bathroom}</span>
                                </div>
                            </Card.Text>
                            <Card.Footer className=" mt-2 d-flex justify-content-between align-items-center" style={{ background: 'none' }}>
                                <span className='text-secondary'>listed 1 week ago</span>

                                <img src={email} alt="" />

                                <img src={phone} alt="" />

                                <img src={Whatsapp} alt="" />

                            </Card.Footer>
                        </Card.Body>
                        </Link>
                    </Card>
                </Col>
       
        </Row>
    );
}

export default MobilePropertyCard;
