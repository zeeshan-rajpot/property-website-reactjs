// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import logo from "../../images/Mask Group 1.svg";
// import whole from "../../images/whole.svg";
// import Line from "../../images/line.svg";
// import Ellipse from "../../images/Ellipse.svg";
// import Lineli from "../../images/lineli.svg";
// import question from "../../images/question.svg";

// const SignupQ = () => {
//   return (
//     <Container>
//       <Row style={{ displey: "grid" }}>
//         <Col
//           md={5}
//           className="shadow-lg my-4"
//           style={{ borderRadius: "0px 0px 100px 100px", paddingBottom: "30px" }}
//         >
//           <div className="text-center ">
//             <img src={logo} alt="" srcset="" />
//           </div>

//           <div className="">
//             <button
//               href="#"
//               className="rent border-light shadow-sm"
//               style={{ color: "#BABABA" }}
//             >
//               Sign Up
//             </button>
//           </div>

//           <div className="my-4 mx-1 rem2 d-flex">
//             <img src={whole} alt="" />{" "}
//             <p className="rem2">Funds available for investment?</p>
//           </div>
//           <div style={{ marginTop: "-3rem" }}>
//             <img src={Line} alt="" style={{ marginLeft: "22px" }} />{" "}
//             <span style={{ marginLeft: "22px" }}>
//               {" "}
//               <button
//                 className="btn btn-success w-25 border-0 shadow-sm rem1"
//                 style={{ borderRadius: "150px", backgroundColor: "#EC6337" }}
//               >
//                 0-£25,000
//               </button>{" "}
//               <button
//                 className="btn btn-success w-25 bg-light text-dark border-light mx-3 shadow-sm rem1"
//                 style={{ borderRadius: "150px" }}
//               >
//                 £25,000 - £40,000
//               </button>
//               <button
//                 className="btn btn-success w-25 bg-light text-dark border-light mx-3 shadow-sm rem1"
//                 style={{ borderRadius: "150px" }}
//               >
//                 £40,000+
//               </button>
//             </span>
//           </div>

//           <div className="my-4 mx-1 rem2 d-flex">
//             <img src={Ellipse} alt="" />{" "}
//             <p className="rem2" style={{ color: "#BABABA" }}>
//             Are you looking for passive income Or to flip houses ?{" "}
//             </p>
//           </div>
//           <div style={{ marginTop: "-1rem" }}>
//             <img src={Lineli} alt="" style={{ marginLeft: "22px" }} />{" "}
//             <span style={{ marginLeft: "22px" }}>
//               {" "}
//               <button
//                 className="btn btn-success w-25 border-0 shadow-sm rem1"
//                 style={{ borderRadius: "150px", backgroundColor: "#E1E1E1" }}
//               >
//                 passive income
//               </button>{" "}
//               <button
//                 className="btn btn-success w-25 bg-light text-dark border-light mx-3 shadow-sm rem1"
//                 style={{ borderRadius: "150px", backgroundColor: "#E1E1E1" }}
//               >
//                 flip houses
//               </button>
//             </span>
//           </div>

//           <div className="my-4 mx-1 rem2 d-flex">
//             <img src={Ellipse} alt="" />{" "}
//             <p className="rem2" style={{ color: "#BABABA" }}>
//             Do you want us to provide you with long term tenants?{" "}
//             </p>
//           </div>
//           <div style={{ marginTop: "-1rem" }}>
//             <img src={Lineli} alt="" style={{ marginLeft: "22px" }} />{" "}
//             <span style={{ marginLeft: "22px" }}>
//               {" "}
//               <button
//                 className="btn btn-success w-25 border-0 shadow-sm rem1"
//                 style={{ borderRadius: "150px", backgroundColor: "#E1E1E1" }}
//               >
//                 Yes
//               </button>{" "}
//               <button
//                 className="btn btn-success w-25 bg-light text-dark border-light mx-3 shadow-sm rem1"
//                 style={{ borderRadius: "150px", backgroundColor: "#E1E1E1" }}
//               >
//                 No
//               </button>
//             </span>
//           </div>

//           <div className="my-4 mx-1 rem2 d-flex">
//             <img src={Ellipse} alt="" />{" "}
//             <p className="rem2" style={{ color: "#BABABA" }}>
//             Do you already have a property portfolio?{" "}
//             </p>
//           </div>
//           <div style={{ marginTop: "-1rem" }}>
//             <img src={Lineli} alt="" style={{ marginLeft: "22px" }} />{" "}
//             <span style={{ marginLeft: "22px" }}>
//               {" "}
//               <button
//                 className="btn btn-success w-25 border-0 shadow-sm rem1"
//                 style={{ borderRadius: "150px", backgroundColor: "#E1E1E1" }}
//               >
//                 Yes
//               </button>{" "}
//               <button
//                 className="btn btn-success w-25 bg-light text-dark border-light mx-3 shadow-sm rem1"
//                 style={{ borderRadius: "150px", backgroundColor: "#E1E1E1" }}
//               >
//                 No
//               </button>
//             </span>
//           </div>

//           <div className="my-4 mx-1 rem2 d-flex">
//             <img src={Ellipse} alt="" />{" "}
//             <p className="rem2" style={{ color: "#BABABA" }}>
//             Property experience?{" "}
//             </p>
//           </div>
//           <div style={{ marginTop: "-1rem" }}>
//             <img src={Lineli} alt="" style={{ marginLeft: "22px" }} />{" "}
//             <span style={{ marginLeft: "22px" }}>
//               {" "}
//               <button
//                 className="btn btn-success w-25 border-0 shadow-sm rem1"
//                 style={{ borderRadius: "150px", backgroundColor: "#E1E1E1" }}
//               >
//               I don’t know much

//               </button>{" "}
//               <button
//                 className="btn btn-success w-25 bg-light text-dark border-light mx-3 shadow-sm rem1"
//                 style={{ borderRadius: "150px", backgroundColor: "#E1E1E1" }}
//               >
//               I know a little 

//               </button>
//               <button
//                 className="btn btn-success w-25 bg-light text-dark border-light mx-3 shadow-sm rem1"
//                 style={{ borderRadius: "150px", backgroundColor: "#E1E1E1" }}
//               >
//              I’m Experienced 

//               </button>
//             </span>
//           </div>

//           {/* <div className="my-4 mx-1">
//             <img src={Ellipse} alt="" />{" "}
//             <p
//               className="rem2"
//               style={{ fontSize: "12px", color: "#BABABA" }}
//             >
//               Is your budget flexible for the right property?{" "}
//             </p>
//           </div>
//           <div className="mx-4 " style={{ marginTop: "-1rem" }}>
//           <img src={Lineli} alt=""  style={{marginLeft:'22px'}}/>{" "}
//             <span style={{marginLeft:'22px'}}>
//               {" "}
//               <button
//                 className="btn btn-success w-25 border-0 shadow-sm rem1"
//                 style={{ borderRadius: "150px", backgroundColor: "#E1E1E1"  }}
//               >
//                 Yes
//               </button>{" "}
//               <button
//                 className="btn btn-success w-25 bg-light text-dark border-light mx-3 shadow-sm rem1"
//                 style={{ borderRadius: "150px" , backgroundColor: "#E1E1E1" }}
//               >
//                 No
//               </button>
//             </span>
//           </div>

//           <div className="my-4 mx-1">
//             <img src={Ellipse} alt="" />{" "}
//             <p
//               className="rem2"
//               style={{  color: "#BABABA" }}
//             >
//               Would you consider a property that requires some renovations?{" "}
//             </p>
//           </div>
//           <div className="mx-4 " style={{ marginTop: "-1rem" }}>
//           <img src={Lineli} alt=""  style={{marginLeft:'22px'}}/>{" "}
//             <span style={{marginLeft:'22px'}}>
//               {" "}
//               <button
//                 className="btn btn-success w-25 border-0 shadow-sm rem1"
//                 style={{ borderRadius: "150px", backgroundColor: "#E1E1E1"  }}
//               >
//                 Yes
//               </button>{" "}
//               <button
//                 className="btn btn-success w-25 bg-light text-dark border-light mx-3 shadow-sm rem1"
//                 style={{ borderRadius: "150px" , backgroundColor: "#E1E1E1" }}
//               >
//                 No
//               </button>
//             </span>
//           </div>

//           <div className="my-4 mx-1 d-flex">
//             <img src={Ellipse} alt="" />{" "}
//             <p
//               className="rem2"
//               style={{  color: "#BABABA" }}
//             >
//               Do you prioritize having properties in multiple locations, or do
//               you{" "}

//             </p>
//           </div>
//           <div className="mx-4 my-5" style={{ marginTop: "-2rem" }}>
//           <img src={Lineli} alt=""  style={{marginLeft:'22px'}}/>{" "}
//             <span style={{marginLeft:'22px'}}>
//               {" "}
//               <button
//                 className="btn btn-success w-25 border-0 shadow-sm rem1"
//                 style={{ borderRadius: "150px", backgroundColor: "#E1E1E1"  }}
//               >
//                 Yes
//               </button>{" "}
//               <button
//                 className="btn btn-success w-25 bg-light text-dark border-light mx-3 shadow-sm rem1"
//                 style={{ borderRadius: "150px" , backgroundColor: "#E1E1E1" }}
//               >
//                 No
//               </button>
//             </span>
//           </div> */}

//           <div className="text-center">
//             <button
//               className="btn  w-50 border-0 shadow-sm my-3 text-light text-center rem2"
//               style={{ borderRadius: "150px", backgroundColor: "#EC6337" }}
//             >
//               Continue
//             </button>
//           </div>
//         </Col>

//         <Col md={7} className=" d-flex itemcenter">
//           <img
//             style={{ width: "437px", height: "450px" }}
//             src={question}
//             alt=""
//           />
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default SignupQ;







// SignupQ.js
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import loginimg from '../../images/shutterstock_1935754699 [Converted].png';
import logo from '../../images/Image 11.png';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Confetti from 'react-confetti';
import CustomModal from './CustomModal '; // import the custom modal
import './CustomModal.css'; // import the modal CSS
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';

const steps = ['', '', '', ''];

const staticQuestions = [
  {
    question: 'Funds available for investment?',
    options: ['0-25,000', '25,000-40,000', '40,000-75,000', '75,000+']
  },
  {
    question: 'Preferred investment type?',
    options: ['Residential', 'HMO', 'Commercial', 'Ground up developments']
  },
  {
    question: 'Do you need a solicitor?',
    options: ['Yes', 'No']
  },
  {
    question: 'Do you have a limited company?',
    options: ['Yes', 'No']
  }
];

const SignupQ = ({ investorId }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState(new Array(staticQuestions.length).fill(''));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleAnswerSelection = (answer) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[currentQuestion] = answer;
    setSelectedAnswers(updatedAnswers);
  };

  const handleNext = () => {
    if (selectedAnswers[currentQuestion] !== '') {
      if (currentQuestion < staticQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setIsModalOpen(true); // Show the modal when the questionnaire is complete
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

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: ''
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    phoneNumber: Yup.string()
      .matches(/^[0-9]+$/, 'Must be only digits')
      .min(11, 'Must be exactly 11 digits')
      .max(11, 'Must be exactly 11 digits')

  });

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    console.log('Form data', values);
    const formattedAnswers = selectedAnswers.map((answer, index) => `answer ${index + 1}: ${answer}`).join('<br>');

    // Combine form data and selected answers
    const emailData = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      phoneNumber: values.phoneNumber,
      selectedAnswers: formattedAnswers ,
    };

    // Send email using EmailJS
    emailjs.send('service_dgi91bo', 'template_akizaue', emailData, '_TG5wJ1BZlZ7dhajh')
      .then((response) => {
        console.log('Email successfully sent!', response.status, response.text);
        resetForm();
        setShowConfetti(true);
        setIsModalOpen(false);
        alert('Thank you for registering your interest in joining Inprop, we will be in touch');
      })
      .catch((error) => {
        console.error('Failed to send email. Error:', error);
        alert('Failed to send form. Please try again.');
      });

    setSubmitting(false);
  };

  const inputStyle = {
    width: '100%',
    padding: '12px 20px',
    margin: '8px 0',
    boxSizing: 'border-box',
    border: '2px solid #ccc',
    borderRadius: '4px',
    fontSize: '16px',
    fontWeight: 'normal',
    color: '#333',
    transition: 'border-color 0.3s ease-in-out',
  };

  const errorStyle = {
    color: 'red',
    fontSize: '14px',
    marginTop: '4px',
  };

  return (
    <>
{/* {showConfetti && <Confetti />} */}
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
                <p className="fw-bold">{staticQuestions[currentQuestion].question}</p>
                <div className="answer-block">
                  {staticQuestions[currentQuestion].options.map((answer, index) => (
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

      {/* Custom Modal for thank you message */}
      <CustomModal isOpen={isModalOpen} onClose={closeModal}>
      <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="mb-4">
                <label htmlFor="firstName" className="block   text-gray-700">
                  First Name
                </label>
                <Field
                  type="text"
                  id="firstName"
                  name="firstName"
                  style={inputStyle}
                />
                <ErrorMessage name="firstName" component="div" style={errorStyle} />
              </div>

              <div className="mb-4">
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <Field
                  type="text"
                  id="lastName"
                  name="lastName"
                  style={inputStyle}
                />
                <ErrorMessage name="lastName" component="div" style={errorStyle} />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  style={inputStyle}
                />
                <ErrorMessage name="email" component="div" style={errorStyle} />
              </div>

              <div className="mb-4">
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                  Phone Number (optional)
                </label>
                <Field
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  style={inputStyle}
                />
                <ErrorMessage name="phoneNumber" component="div" style={errorStyle} />
              </div>

              <button
                type="submit"
                className=" text-white px-4 py-2 rounded-lg next w-100"
                disabled={isSubmitting}
              >
                Submit
              </button>
              <button onClick={closeModal} className="mt-4 px-5 next w-100">
                Close
              </button>
            </Form>
          )}
        </Formik>
      </CustomModal>



    </>
  );
};

export default SignupQ;

{/* <h2>Thank you for registering your interest in joining Inprop, we will be in touch</h2> */}