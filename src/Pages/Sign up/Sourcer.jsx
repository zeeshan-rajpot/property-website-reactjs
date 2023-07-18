import React, { useState } from 'react';
import { Typography, TextField, Button, Stepper, Step, StepLabel } from '@material-ui/core';
import { useForm, Controller, FormProvider, useFormContext } from 'react-hook-form';
import { makeStyles } from '@material-ui/core/styles';
import { useNavigate } from 'react-router-dom';

import SourceStep1 from './SourceStep1';
import SourceStep2 from './SourceStep2';
import SourceStep3 from './SourceStep3';

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
  },
}));

function getSteps() {
  return [
    '',
    '',
    '',
    '',
    '', // Add an empty step for Step 3
  ];
}

function getStepContent(step, showStep3, handleChoice) {
  switch (step) {
    case 0:
      return <SourceStep1 />;
    case 1:
      return <SourceStep2 handleChoice={handleChoice} />;
    case 2:
      return showStep3 ? <SourceStep3 /> : 'Welcome to inprop';
    // case 3:
    //   return <SourceStep3 />;
    // default:
    //   return 'unknown step';
  }
}

const Sourcer = () => {
  const classes = useStyles();
  const methods = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      // Add default values for other form fields
    },
  });
  const [activeStep, setActiveStep] = useState(0);
  const [showStep3, setShowStep3] = useState(false);
  const navigate = useNavigate(); // Add this line to access the navigate function

  const handleNext = (data) => {
    console.log(data);
    if (activeStep === 1 && showStep3) {
      setActiveStep(activeStep + 2);
    } else {
      setActiveStep(activeStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleChoice = (choice) => {
    if (choice === 'yes') {
      setShowStep3(true);
    } else {
      navigate('/'); // Replace '/' with the desired home page route
    }
  };

  return (
    <div>
      <Stepper alternativeLabel activeStep={activeStep}>
        {getSteps().map((step, index) => (
          <Step key={index}>
            <StepLabel>{step}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(handleNext)}>
          {getStepContent(activeStep, showStep3, handleChoice)}
          <div className="d-flex justify-content-center my-5">
            <Button
              className={classes.button}
              disabled={activeStep === 0}
              onClick={handleBack}
            >
              Back
            </Button>

            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              type="submit"
            >
              {activeStep === getSteps().length - 1 ? 'Finish' : 'Next'}
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default Sourcer;
