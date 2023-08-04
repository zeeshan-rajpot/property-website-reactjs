import React from 'react';
import AddProperty from './AddProperty';

const Uploadproperty = () => {
  // Replace this with the actual check for user login status
  const isLoggedIn = true; // Set this to true if the user is logged in

  return (
    <>
      {isLoggedIn && <AddProperty />}
    </>
  );
};

export default Uploadproperty;
