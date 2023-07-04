import React, { useState } from 'react';
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

const steps = ['', '', '', ''];

const Investor = () => {
    const questions = [
        {
            question: 'What would you like to spend?',
            answers: ['0-25,000', '25,000 - 40,000', '40,000 - 75,000', '75,000 +']
        },
        {
            question: 'Preferred investment type?',
            answers: ['Residential', 'Hmo', 'Commercial', 'Group up developments']
        },
        {
            question: 'Do you need a solicitor?',
            answers: ['Yes', 'No']
        },
        {
            question: 'Do you have limited company?',
            answers: ['Yes', 'No']
        }
    ];
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState('');

    const handleNext = () => {
        if (selectedAnswer !== '') {
            if (currentQuestion < questions.length - 1) {
                setCurrentQuestion(currentQuestion + 1);
                setSelectedAnswer('');
            } else {
                // Display final message or perform further actions
                alert('Questionnaire complete!');
            }
        } else {
            alert('Please select an answer.');
        }
    };

    const handlePrevious = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
            setSelectedAnswer('');
        }
    };

    const handleAnswerSelection = (answer) => {
        setSelectedAnswer(answer);
        console.log(answer);
    };

    return (
        <>
            <Container>
                <Row className="loginrow">
                    <Col lg={4} className="text-center bgimg">
                        <img src={logo} alt="" />
                        <Col >
                            <span className="Investor-word mt-3 py-3">Investor</span>
                        </Col>
                        <Row style={{ overflow: 'hidden' }}>

                            <Col>
                                <Box sx={{ width: '100%' }}>
                                    <Stepper nonLinear activeStep={currentQuestion}>
                                        {steps.map((label, index) => (
                                            <Step key={`step-${index}`} completed={index < currentQuestion}>
                                                <StepButton
                                                    color="inherit"
                                                    onClick={() => setCurrentQuestion(index)}
                                                >
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
                                <p className="fw-bold">
                                    {questions[currentQuestion].question}
                                </p>
                                <div className="answer-block">
                                    {questions[currentQuestion].answers.map((answer, index) => (
                                        <button
                                            key={index}
                                            onClick={() => handleAnswerSelection(answer)}
                                            className={`source shadow ${selectedAnswer === answer ? 'selected' : ''
                                                }`}
                                        >
                                            {answer}
                                        </button>
                                    ))}
                                </div>
                                <button className='Previous mt-4  ' onClick={handlePrevious} disabled={currentQuestion === 0}>
                                    Previous
                                </button>
                                <button className='next mt-4 ms-3' onClick={handleNext} disabled={selectedAnswer === ''}>
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
