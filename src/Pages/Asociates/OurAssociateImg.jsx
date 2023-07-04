import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import AssociateImgCard from "./AssociateImgCard.jsx";
import { baseurl } from '../../Pages/Const.js';

const OurAssociateImg = () => {
  const [associates, setAssociates] = useState([]);

  useEffect(() => {
    fetchAssociates();
  }, []);

  const fetchAssociates = async () => {
    try {
      const response = await axios.get(`${baseurl}getAllAgent`);
      setAssociates(response.data);
      console.log(response.data)
    } catch (error) {
      console.error("Error fetching associates:", error);
    }
  };

  return (
    <>
      <div style={{ paddingBottom: "50px", paddingTop: "50px" }}>
        <Container>
          <Row style={{ paddingBottom: "50px", paddingTop: "50px" }}>
            <Col style={{ textAlign: "center", alignItems: "center" }}>
              <h1 className="rem5">Our Associates</h1>
            </Col>
          </Row>
          <Row>
            {associates.map((associate, index) => (
              <Col lg={4} className="Associatecard" key={index}>
                <img src={associate.profilePicture} alt="" style={{width:"200px" , height:"200px"}} />
                <AssociateImgCard
                  name={associate.name}
                  designation={associate.companyName}
                  location={associate.nationality}
                  language={associate.language}
                  numberofproperties={associate.propertyForSale}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default OurAssociateImg;
