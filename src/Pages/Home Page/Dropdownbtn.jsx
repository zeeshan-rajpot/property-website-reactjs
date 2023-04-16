import React from 'react'
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const Dropdownbtn = (props) => {
  return (
    <DropdownButton
                    id="dropdown-basic-button"
                    className="dropdown-basic-button"
                    title={props.title}
                  >
                    <Dropdown.Item href="#/action-1">{props.option1}</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                    {props.option2}
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                    {props.option3}
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                    {props.option4}
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                    {props.option5}
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                    {props.option6}
                    </Dropdown.Item>
                  </DropdownButton>
  )
}

export default Dropdownbtn
