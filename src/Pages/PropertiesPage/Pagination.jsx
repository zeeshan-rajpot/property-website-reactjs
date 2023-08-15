import React, { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import Backward from '../../images/leftArrow.svg';
import Forward from '../../images/rightArrow.svg';
import './pagination.css'

const theme = createTheme({
  palette: {
    primary: {
      main: '#EC6337',
    },
  },
});

export default function CustomPagination() {
  const [currentPage, setCurrentPage] = useState(1); // Store the current page in state

  const handlePageChange = (event, value) => {
    // Update the current page when the Pagination component changes
    setCurrentPage(value);
  };

  const handlePrevClick = () => {
    // Decrease the current page by 1 when the backward icon is clicked
    setCurrentPage(prevPage => prevPage - 1);
  };

  const handleNextClick = () => {
    // Increase the current page by 1 when the forward icon is clicked
    setCurrentPage(prevPage => prevPage + 1);
  };

  return (
    <ThemeProvider theme={theme}>
      <Stack spacing={2}>
        <div className='custom-pagination'>
          <Pagination
            count={10}
            color='primary'
            shape='rounded'
            page={currentPage} // Use the current page state
            onChange={handlePageChange}
            hidePrevButton // Hide default prev button
            hideNextButton // Hide default next button
            prevIcon={null} // Remove default prev icon
            nextIcon={null} // Remove default next icon
          />
          <div
            className=' shadow'
            style={{
              backgroundColor: '#fff',
              width: '30px', // Set the width and height to create a circular shape
              height: '30px',
              borderRadius: '100%', // Set border-radius to create a circle
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: 'pointer',
            }}
          >
            <img
              style={{
                width: '40%',
              }}
              src={Backward}
              alt='Backward'
              className='MuiPaginationItem-root custom-prev'
              onClick={handlePrevClick} // Add click handler for backward icon
            />
          </div>
          <div
            className=' shadow'
            style={{
              backgroundColor: '#fff',
              width: '30px', // Set the width and height to create a circular shape
              height: '30px',
              borderRadius: '100%', // Set border-radius to create a circle
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: 'pointer',
            }}
          >
            <img
              style={{
                width: '40%',
              }}
              src={Forward}
              alt='Forward'
              className='MuiPaginationItem-root custom-next'
              onClick={handleNextClick} // Add click handler for forward icon
            />
          </div>
        </div>
      </Stack>
    </ThemeProvider>
  );
}