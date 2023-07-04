import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useEffect ,useState } from "react";
import "./residence.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import phone from "../../images/phone.svg";
import email from "../../images/email.svg";
import Whatsapp from "../../images/Whatsapp.svg";
const ResidenceSection = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8222/getProperty/${id}`)
      .then((response) => {
        setProperty(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  if (!property) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <br />
      <br />
      <Container>
        <Row>
          <Col lg={8}>
            <h3 className="text-secondary rem3" >{property.title}</h3>

            <h5 className="text-secondary">
             {property.address}
            </h5>
            <h3 className="text-secondary rem3" >Description</h3>

            <p className="text-secondary">
            {property.description}
            </p>
            
            
          </Col>
          <Col lg={1} className="line-col ">
            <span class="vertical-line d-flex"></span>
          </Col>
          <Col lg={3}>
            <h5 className="text-secondary rem3"> {property.company}</h5>
            <p className="text-secondary">
            {property.address}
            </p>
            <h4 className="price rem3"> {property.price} AED/year</h4>
            <img src={phone} alt="" srcset="" />
            <span className="text-secondary rem2">Call</span>
            <br />
            <img src={email} alt="" srcset="" />
            <span className="text-secondary rem2">Email</span>
            <br />
            <img src={Whatsapp} alt="" srcset="" />
            <span className="text-secondary rem2">Whatsapp</span>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ResidenceSection;
