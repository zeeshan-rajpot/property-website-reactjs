import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Row, Col } from "react-bootstrap";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import LoginIcon from "@mui/icons-material/AccountCircle";
import PeopleIcon from "@mui/icons-material/People";
import AboutIcon from "@material-ui/icons/Info";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./bottombar.css";
import MenuIcon from '@mui/icons-material/Menu';
import MenuIconBottom from "./MenuIconBottom";


const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    top: '0',
    backgroundColor: "white",
    borderBottom: '2px solid #FC780B', // Added bottom border
    zIndex:'100'
  },
  icon: {
    fontSize: 100, // Increased icon size
  },
  label: {
    color: "#FC780B", // Changed text color
  },
});

function BottomBar() {
  const classes = useStyles();
  const [value, setValue] = useState("home");
  const [openModal, setOpenModal] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div className="bottombardesktop">
      <BottomNavigation
        value={value}
        onChange={handleChange}
        className={classes.root}
        showLabels
      >
        <BottomNavigationAction
          label="Home"
          value="home"
          icon={
            <HomeIcon
              style={{ color: value === "home" ? "#FC780B" : "#FC780B" }}
            />
          }
          component={Link}
          to="/Home"
        />
        <BottomNavigationAction
          label="Properties"
          value="Login"
          icon={
            <LoginIcon
              style={{ color: value === "Login" ? "#FC780B" : "#FC780B" }}
            />
          }
          component={Link}
          to="/PropertiesPage"
        />
        <BottomNavigationAction
          label="Projects"
          value="contact"
          icon={
            <AboutIcon
              style={{ color: value === "contact" ? "#FC780B" : "#FC780B" }}
            />
          }
          component={Link}
          to="/ProjectPage"
        />
        <BottomNavigationAction
          label="Menu"
          value="MenuIconBottom"
          icon={
            <MenuIcon
              style={{
                color: value === "MenuIconBottom" ? "#FC780B" : "#FC780B",
              }}
            />
          }
          onClick={handleOpenModal}
        />
      </BottomNavigation>

      <Modal show={openModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Menu</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <MenuIconBottom />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default BottomBar;
