import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { baseurl } from '../Const';

const InvestorAnswer = () => {
  const [answers, setAnswers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch the answers from the API
    fetch(`${baseurl}/getAnswersForSourcer`)
      .then((response) => response.json())
      .then((data) => {
        setAnswers(data); // Set the answers state with the API data
        setIsLoading(false); // Set isLoading to false once data is fetched
      })
      .catch((error) => {
        console.error('Error fetching answers:', error);
        setIsLoading(false); // Set isLoading to false even if there's an error
      });
  }, []);

  if (isLoading) {
    return (
      <Container>
        <Row className='mt-4'>
          <Col style={{ textAlign: 'center' }}>
            <h3>Loading answers...</h3>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <>
      <Container>
        <Row className='mt-4'>
          <Col style={{ textAlign: 'center' }}>
            <h1>Answer taken from my investors</h1>
          </Col>
        </Row>

        {answers.map((answer, index) => (
          <Row key={index}>
            <Col lg={10}>
              <h1>Question: {answer.question}</h1>
           
              <h1>Answer: {answer.answer}</h1>
            </Col>
            <Col lg={2}><h1>Investor Name: {answer.investor}</h1></Col>
            <hr />
          </Row>
        ))}
      </Container>
    </>
  );
};

export default InvestorAnswer;
