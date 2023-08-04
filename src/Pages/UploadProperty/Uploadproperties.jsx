

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Row, Col } from 'react-bootstrap';
import Button from '@mui/material/Button';
// import MyComponent from './MyComponent'
// import './UploadAgent.css';
import { baseurl } from '../Const';
import { padding } from '@mui/system';

export default function Uploadproperties() {
  const [file, setFile] = useState(null); // State to store the uploaded file
  const [formData, setFormData] = useState({
    title: '',
    companyName: '',
    address: '',
    bedroom: '',
    area: '',
    bathroom: '',
    description: '',
    price: '',
    category: '',
    propertyImages: null, // State to store the uploaded profile image
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0];
    setFile(uploadedFile);

    // Update the formData state with the uploaded file
    setFormData((prevFormData) => ({
      ...prevFormData,
      propertyImages: uploadedFile,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const apiUrl = `${baseurl}/addProperty`;
    const apiKey = {
      title: formData.title,
      address: formData.address,
      bedroom: formData.bedroom,
      area: formData.area,
      companyName: formData.companyName,
      description: formData.description,
      propertyImages: formData.propertyImages,
      bathroom: formData.bathroom,
      price: formData.price,
      category: formData.category,

    };

    // Create FormData object and append the API keys
    const formDataToSend = new FormData();
    for (const key in apiKey) {
      formDataToSend.append(key, apiKey[key]);
    }

    // Send the form data to the API server
    fetch(apiUrl, {
      method: 'POST',
      body: formDataToSend,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Response from API server:', data);
        // Handle the response from the API server
      })
      .catch((error) => {
        console.error('Error:', error);
        // Handle the error
      });
  };

  return (
    <>
      <h1 className="text-center bold">Add New Property</h1>

      <Container>
        <Row>
          <Col>
            <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit} // Handle form submission
            >
              <h3 className="bold">Add title</h3>
              <TextField
                id="title"
                label="title"
                variant="outlined"
                value={formData.title}
                onChange={handleChange} // Handle input change
                style={{ width: '100%', fontSize: '16px' }}
                inputProps={{ style: { fontSize: '18px' } }} // Set the font size for the placeholder
                InputLabelProps={{ style: { fontSize: '18px' } }} // Set the font size for the label
                required
              />

              <h3 className="bold">Add price </h3>
              <TextField
                id="price"
                label="price "
                type='number'
                variant="outlined"
                value={formData.price}
                onChange={handleChange} // Handle input change
                InputLabelProps={{ style: { fontSize: '18px' } }} // Set the font size for the label
                style={{ width: '100%', fontSize: '16px' }}
                required
                inputProps={{ style: { fontSize: '18px' } }} // Set the font size for the placeholder
              />

              <h3 className="bold">Add Company Name</h3>
              <TextField
                id="companyName"
                label="Company Name"
                variant="outlined"
                value={formData.companyName}
                inputProps={{ style: { fontSize: '18px' } }} // Set the font size for the placeholde
                InputLabelProps={{ style: { fontSize: '18px' } }} // Set the font size for the labelr
                onChange={handleChange} // Handle input change
                style={{ width: '100%', fontSize: '16px' }}
                required
              />
              <h3 className="bold">Add address</h3>
              <TextField
                id="address"
                label="address"
                variant="outlined"
                value={formData.address}
                required
                onChange={handleChange} // Handle input change
                style={{ width: '100%', fontSize: '16px' }}
                InputLabelProps={{ style: { fontSize: '18px' } }} // Set the font size for the label
                inputProps={{ style: { fontSize: '18px' } }} // Set the font size for the placeholder
              />
              <h3 className="bold">Add category</h3>
              <TextField
                id="category"
                label="category"
                variant="outlined"
                value={formData.category}
                onChange={handleChange} // Handle input change
                InputLabelProps={{ style: { fontSize: '18px' } }} // Set the font size for the label
                inputProps={{ style: { fontSize: '18px' } }} // Set the font size for the placeholder
                style={{ width: '100%', fontSize: '16px' }}
                required
              />
              <h3 className="bold">Add bedrooms</h3>
              <TextField
                id="bedroom"
                label="bedrooms"
                type='number'
                variant="outlined"
                value={formData.bedroom}
                onChange={handleChange} // Handle input change
                style={{ width: '100%', fontSize: '16px' }}
                inputProps={{ style: { fontSize: '18px' } }} // Set the font size for the placeholde
                InputLabelProps={{ style: { fontSize: '18px' } }} // Set the font size for the labelr
                required
              />
              <h3 className="bold">Add bathroom</h3>
              <TextField
                id="bathroom"
                label="bathroom"
             
                type='number'   variant="outlined"
                value={formData.bathroom}
                onChange={handleChange} // Handle input change
                style={{ width: '100%', fontSize: '16px' }}
                inputProps={{ style: { fontSize: '18px' } }} // Set the font size for the placeholde
                InputLabelProps={{ style: { fontSize: '18px' } }} // Set the font size for the labelr
                required
              />
              <h3 className="bold">Add area</h3>
              <TextField
                id="area"
                label="area"
                variant="outlined"
                type='number'
                value={formData.area}
                inputProps={{ style: { fontSize: '18px' } }} // Set the font size for the placeholder
                InputLabelProps={{ style: { fontSize: '18px' } }} // Set the font size for the label
                onChange={handleChange} // Handle input change

                required
                style={{ width: '100%', fontSize: '16px' }}
              />
              <h3 className="bold">Add description</h3>
              <textarea
                id="description"
                label="description"
                variant="outlined"
                style={{ width: "100%" , fontSize:'20px' }}
                cols={1000}
                rows={10}
                value={formData.description}
                inputProps={{ style: { fontSize: '18px' } }} // Set the font size for the placeholder
                InputLabelProps={{ style: { fontSize: '18px' } }} // Set the font size for the label
                onChange={handleChange} // Handle input change
                required
              />
              <input type="file" accept="image/png" onChange={handleFileUpload} />
              <div className='' style={{ alignContent: 'center', textAlign: 'center', width: 'auto' }}>
                <button type="submit" className='submit btn' style={{ backgroundColor: 'black', color: 'white', fontSize: '18px', padding: '10px 20px 10px 20px' }}>Submit</button>
              </div>
            </Box>
          </Col>
          <Row style={{ textAlign: 'center' }}></Row>
        </Row>
      </Container>
      {/* <MyComponent/> */}
    </>
  );
}