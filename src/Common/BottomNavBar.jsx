// import React, { useState } from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import { Container, Row, Col } from "react-bootstrap";
// import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
// import { Link } from "react-router-dom";
// import HomeIcon from "@material-ui/icons/Home";
// import LoginIcon from "@mui/icons-material/AccountCircle";
// import PeopleIcon from "@mui/icons-material/People";
// import AboutIcon from "@material-ui/icons/Info";
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
// import "./bottombar.css";
// import MenuIcon from '@mui/icons-material/Menu';
// import MenuIconBottom from "./MenuIconBottom";


// const useStyles = makeStyles({
//   root: {
//     width: "100%",
//     position: "fixed",
//     top: '0',
//     backgroundColor: "white",
//     borderBottom: '2px solid #FC780B', // Added bottom border
//     zIndex:'100000000'
//   },
//   icon: {
//     fontSize: 100, // Increased icon size
//   },
//   label: {
//     color: "#FC780B", // Changed text color
//   },
// });

// function BottomBar() {
//   const classes = useStyles();
//   const [value, setValue] = useState("home");
//   const [openModal, setOpenModal] = useState(false);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   const handleOpenModal = () => {
//     setOpenModal(true);
//   };

//   const handleCloseModal = () => {
//     setOpenModal(false);
//   };

//   return (
//     <div className="bottombardesktop">
//       <BottomNavigation
//         value={value}
//         onChange={handleChange}
//         className={classes.root}
//         showLabels
//       >
//         <BottomNavigationAction
//           label="Home"
//           value="home"
//           icon={
//             <HomeIcon
//               style={{ color: value === "home" ? "#FC780B" : "#FC780B" }}
//             />
//           }
//           component={Link}
//           to="/Home"
//         />
//         <BottomNavigationAction
//           label="Properties"
//           value="Login"
//           icon={
//             <LoginIcon
//               style={{ color: value === "Login" ? "#FC780B" : "#FC780B" }}
//             />
//           }
//           component={Link}
//           to="/PropertiesPage"
//         />
//         <BottomNavigationAction
//           label="Projects"
//           value="contact"
//           icon={
//             <AboutIcon
//               style={{ color: value === "contact" ? "#FC780B" : "#FC780B" }}
//             />
//           }
//           component={Link}
//           to="/ProjectPage"
//         />
//         <BottomNavigationAction
//           label="Menu"
//           value="MenuIconBottom"
//           icon={
//             <MenuIcon
//               style={{
//                 color: value === "MenuIconBottom" ? "#FC780B" : "#FC780B",
//               }}
//             />
//           }
//           onClick={handleOpenModal}
//         />
//       </BottomNavigation>

//       <Modal show={openModal} onHide={handleCloseModal} centered>
//         <Modal.Header closeButton>
//           <Modal.Title>Menu</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <MenuIconBottom />
//         </Modal.Body>
//       </Modal>
//     </div>
//   );
// }

// export default BottomBar;




import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './bottombar.css'
import feather from 'feather-icons';
import MenuIcon from '../images/menu.svg';
import Modal from 'react-bootstrap/Modal';
import MenuIconBottom from './MenuIconBottom';
import InpropIcon from '../images/inprop.svg';
import HomeIcon from '../images/Home.svg';
import ProjectIcon from '../images/project.svg';

const BottomBarNavigation = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [openModal, setOpenModal] = useState(false);
  const [modalContent, setModalContent] = useState(null); // State for dynamic modal content

  const handleMenuItemClick = tabName => {
    setActiveTab(tabName);
  };

  const handleOpenModal = (tabName, content) => {
    setActiveTab(tabName);
    setModalContent(content); // Set the dynamic content when opening the modal
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    setTimeout(() => {
      feather.replace();
    }, 100);
  }, []);

  return (
    <div id='wrapper' className='purple '>
      <div className='menu shadow bootombar desktop-none'>
        <Link
          to='/'
          className={`menu-item purple ${activeTab === 'home' ? 'active' : ''}`}
          onClick={() => handleMenuItemClick('home')}
        >
          <div className='menu-item__icon'>
            <img src={HomeIcon} alt='Home' style={{ width: '18px' }} />
          </div>
          {activeTab === 'home' ? (
            <div className='menu-item__text'>Home</div>
          ) : null}
        </Link>
        <Link
          to='/PropertiesPage'
          className={`menu-item pink ${activeTab === 'likes' ? 'active' : ''}`}
          onClick={() => handleMenuItemClick('likes')}
        >
          <div className='menu-item__icon'>
            <img src={InpropIcon} alt='Inprop' style={{ width: '18px' }} />
          </div>
          {activeTab === 'likes' ? (
            <div className='menu-item__text'>Properties</div>
          ) : null}
        </Link>
        <Link
          to='/Inprop'
          className={`menu-item ocher ${
            activeTab === 'search' ? 'active' : ''
          }`}
          onClick={() => handleMenuItemClick('search')}
        >
          <div className='menu-item__icon'>
            <img src={MenuIcon} alt='Project' style={{ width: '18px' }} />
          </div>
          {activeTab === 'search' ? (
            <div className='menu-item__text'>Inprop</div>
          ) : null}
        </Link>
        {/* <Link
          to='/PropertiesPage'
          className={`menu-item cyan ${
            activeTab === 'profile' ? 'active' : ''
          }`}
          onClick={() => handleMenuItemClick('profile')}
        >
          <div className='menu-item__icon'>
            <img src={ProjectIcon} alt='Menu' style={{ width: '18px' }} />
          </div>
          {activeTab === 'profile' ? (
            <div className='menu-item__text'>Menu</div>
          ) : null}
        </Link> */}





<div
          className={`menu-item cyan ${
            activeTab === 'profile' ? 'active' : ''
          }`}
          onClick={() =>
            handleOpenModal('profile', (
              <div>
                {/* Your dynamic content */}
                <h3>Menu</h3>
                <p>This is your dynamic content for the Menu link.</p>
              </div>
            ))
          }
        >
          <div className='menu-item__icon'>
            <img src={ProjectIcon} alt='Menu' style={{ width: '18px' }} />
          </div>
          {activeTab === 'profile' ? (
            <div className='menu-item__text'>Menu</div>
          ) : null}
        </div>




      </div>
      <Modal show={openModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>{activeTab}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Display the dynamic modal content */}
          {/* {modalContent} */}
          <MenuIconBottom/>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default BottomBarNavigation;