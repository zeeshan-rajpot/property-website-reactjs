import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { baseurl } from '../Const';

const Account = () => {
  // State variables to hold user data
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [updatedName, setUpdatedName] = useState('');
  const [updatedEmail, setUpdatedEmail] = useState('');

  useEffect(() => {
    // Get the userId from localStorage
    const userId = localStorage.getItem('userId');
    console.log('userId:', userId);

    // Fetch user data by ID when the component mounts
    if (userId) {
      fetch(`${baseurl}/getUser/${userId}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          console.log('API response:', data);
          // Set user data in state
          setName(data.name);
          setEmail(data.email);
        })
        .catch((error) => {
          console.error('Error:', error);
          // Handle the error here if needed
        });
    }
  }, []);

  const handleNameChange = (event) => {
    setUpdatedName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setUpdatedEmail(event.target.value);
  };

  const handleUpdateSubmit = () => {
    // Get the userId from localStorage
    const userId = localStorage.getItem('userId');

    // Replace 'your-api-endpoint' with the actual PUT or PATCH API endpoint
    const apiUrl = `${baseurl}/updateUser/${userId}`;

    // Replace 'your-auth-token' with the actual authentication token (if required)
    const authToken = 'your-auth-token';

    // Assuming you are using fetch for the API call
    fetch(apiUrl, {
      method: 'PUT', // or 'PATCH' depending on your API
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`, // Include this header if authentication is required
      },
      body: JSON.stringify({
        name: updatedName,
        email: updatedEmail,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log('API response:', data);
        // Handle the API response here if needed
        // Optionally, you can update the state with the new user data
        setName(data.name);
        setEmail(data.email);
      })
      .catch((error) => {
        console.error('Error:', error);
        // Handle the error here if needed
      });
  };

  return (
    <>
      <h3 className='h3 pt-4'>Name</h3>
      <TextField label="Name" variant="outlined" fullWidth value={updatedName} onChange={handleNameChange} />
      <br />
      <br />

      <h3 className='h3'>Email</h3>
      <TextField label="Email" variant="outlined" fullWidth value={updatedEmail} onChange={handleEmailChange} />
      <br />
      <br />
      <Button variant="contained" color="primary" onClick={handleUpdateSubmit}>
        Update
      </Button>
    </>
  );
};

export default Account;
