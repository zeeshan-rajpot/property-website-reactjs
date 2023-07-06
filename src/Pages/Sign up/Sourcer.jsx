
import React, { useState } from 'react';
import { Typography, TextField, Button, Stepper, Step, StepLabel } from '@material-ui/core';
import { useForm, Controller, FormProvider, useFormContext } from 'react-hook-form';
import { makeStyles } from '@material-ui/core/styles';
import SourceStep1 from './SourceStep1';
import SourceStep2 from './SourceStep2';
import SourceStep3 from './SourceStep3';
import './Soucer.css'

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
    ];
}

// const ContactForm = () => {
//   const { control } = useFormContext();
//   return (
//     <>
//       <Controller
//         control={control}
//         name="emailAddress"
//         render={({ field }) => (
//           <TextField
//             id="email"
//             label="E-mail"
//             variant="outlined"
//             placeholder="Enter Your E-mail Address"
//             fullWidth
//             margin="normal"
//             {...field}
//           />
//         )}
//       />


//     </>
//   );
// };

// Implement BasicForm, PersonalForm, and PaymentForm components in a similar way as ContactForm

function getStepContent(step) {
    switch (step) {
        case 0:
            return < SourceStep1 />;
        case 1:
            return <SourceStep2 />;
        case 2:
            return <SourceStep3 />;

        default:
            return 'unknown step';
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
    const steps = getSteps();

    const handleNext = (data) => {
        console.log(data);
        setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    return (
        <div>
            <Stepper alternativeLabel activeStep={activeStep}>
                {steps.map((step, index) => (
                    <Step key={index}>
                        <StepLabel>{step}</StepLabel>
                    </Step>
                ))}
            </Stepper>

            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(handleNext)}>
                    {getStepContent(activeStep)}
                    <div className='d-flex justify-content-center my-5'>
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
                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                        </Button>
                    </div>
                </form>
            </FormProvider>
        </div>
    );
};

export default Sourcer;
