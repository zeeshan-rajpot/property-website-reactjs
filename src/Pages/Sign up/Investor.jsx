import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './investor.css';
import loginimg from '../../images/shutterstock_1935754699 [Converted].png';
import logo from '../../images/Image 11.png';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { baseurl } from '../Const';
import { json } from 'react-router-dom';

const steps = ['', '', '', ''];

const Investor = ({ investorId }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  useEffect(() => {
    // Fetch the questions from the API
    fetch(`${baseurl}/getAllQuestion`)
      .then((response) => response.json())
      .then((data) => {
        setQuestions(data);
        setSelectedAnswers(new Array(data.length).fill(''));
      })
      .catch((error) => {
        console.error('Error fetching questions:', error);
      });
  }, []);


  const handleAnswerSelection = (answer) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[currentQuestion] = answer;
    setSelectedAnswers(updatedAnswers);

    // Send the selected answer to the backend whenever an option is selected
    sendAnswerToBackend(currentQuestion, answer);
  };

  const sendAnswerToBackend = (questionIndex, answer) => {
    const question = questions[questionIndex];

    // Create an object for the answer
    const answerObject = {
      investorId: investorId,
      questionId: question._id,
      answer: answer,
    };

    // Post the answer to the backend API
    axios
      .post(`${baseurl}/submitAnswersByInvestor`, answerObject)
      .then((response) => {
        console.log('Answer submitted successfully:', response.data);
        // You can perform further actions or display a success message here
      })
      .catch((error) => {
        console.error('Error submitting answer:', error);
      });
  };

  if (questions.length === 0) {
    return <div>Loading...</div>;
  }

  const handleNext = () => {
    if (selectedAnswers[currentQuestion] !== '') {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        sendAnswerToBackend();
      } else {
        // Display final message or perform further actions
        alert('Questionnaire complete! Sending answers to the backend...');
        console.log('Selected Answers:', selectedAnswers);
        
      }
    } else {
      alert('Please select an answer.');
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  return (
    <>
      <Container>
        <Row className="loginrow">
          <Col lg={4} className="text-center bgimg">
            <img src={logo} alt="" />
            <Col>
              <span className="Investor-word mt-3 py-3">Investor</span>
            </Col>
            <Row style={{ overflow: 'hidden' }}>
              <Col>
                <Box sx={{ width: '100%' }}>
                  <Stepper nonLinear activeStep={currentQuestion}>
                    {steps.map((label, index) => (
                      <Step key={`step-${index}`} completed={index < currentQuestion}>
                        <StepButton color="inherit" onClick={() => setCurrentQuestion(index)}>
                          {label}
                        </StepButton>
                      </Step>
                    ))}
                  </Stepper>
                </Box>
              </Col>
            </Row>
            <div>
              <div className="questionnaire">
                <p className="fw-bold">{questions[currentQuestion].question}</p>
                <div className="answer-block">
                  {questions[currentQuestion].options.map((answer, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswerSelection(answer)}
                      className={`source shadow ${selectedAnswers[currentQuestion] === answer ? 'selected' : ''}`}
                    >
                      {answer}
                    </button>
                  ))}
                </div>
                <button className="Previous mt-4" onClick={handlePrevious} disabled={currentQuestion === 0}>
                  Previous
                </button>
                <button className="next mt-4 ms-3" onClick={handleNext} disabled={selectedAnswers[currentQuestion] === ''}>
                  Next
                </button>
              </div>
            </div>
            <br />
            <br />
          </Col>
          <Col lg={8} className="d-flex itemcenter">
            <img src={loginimg} alt="" className="loginimg" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Investor;
