import React, { useEffect } from "react";

const Test = () => {
  useEffect(() => {
    fetch("http://localhost:6222/getproperty")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        // Further processing of the response can be done here
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h1>Axios Tutorial</h1>
  
    </>
  );
};

export default Test;
