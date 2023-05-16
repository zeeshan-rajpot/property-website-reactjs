// import React from 'react'
// import Dropdown from "react-bootstrap/Dropdown";
// import DropdownButton from "react-bootstrap/DropdownButton";

// const Dropdownbtn = (props) => {
//   return (
//     <DropdownButton
//                     id="dropdown-basic-button"
//                     className="dropdown-basic-button"
//                     title={props.title}
//                   >
//                     <Dropdown.Item href="#/action-1">{props.option1}</Dropdown.Item>
//                     <Dropdown.Item href="#/action-2">
//                     {props.option2}
//                     </Dropdown.Item>
//                     <Dropdown.Item href="#/action-3">
//                     {props.option3}
//                     </Dropdown.Item>
//                     <Dropdown.Item href="#/action-3">
//                     {props.option4}
//                     </Dropdown.Item>
//                     <Dropdown.Item href="#/action-3">
//                     {props.option5}
//                     </Dropdown.Item>
//                     <Dropdown.Item href="#/action-3">
//                     {props.option6}
//                     </Dropdown.Item>
//                   </DropdownButton>
//   )
// }

// export default Dropdownbtn




import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// import "./Dropdownbtn.css";
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Create a custom theme with the desired colors for the text and border
const theme = createTheme({
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          '&.Mui-focused': {
            color: '#ec6337', // Replace 'blue' with your desired text color when focused
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          '&.Mui-focused': {
            borderColor: '#ec6337', // Replace 'red' with your desired border color when focused
          },
        },
      },
    },
  },
});

export default function Dropdownbtn(props) {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 100 }}>
          <InputLabel id="demo-simple-select-standard-label">{props.title}</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={age}
            onChange={handleChange}
            label={props.title}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>{props.option1}</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </ThemeProvider>
    </div>
  );
}
