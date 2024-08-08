import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css";                                       
import Sourcer from './Pages/Sign up/Sourcer';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './Pages/Home Page/Home';
import Login from '../src/Pages/Login/Login';
import Signup from './Pages/Sign up/Signup';
import DetailPage from './Pages/Detail Page/DetailPage';
import PropertiesPage from './Pages/PropertiesPage/PropertiesPage';
import Acosites from './Pages/Asociates/Acosites.js';
import SignupQ from './Pages/Sign up/SignupQ';
import ProjectPage from './Pages/Project Page/ProjectPage';
import Investor from './Pages/Sign up/Investor';
import Uploadproperty from './Pages/UploadProperty/Uploadproperty';
import SplashLoader from './Pages/SplashLoader';
import Navbars from './Common/NavBar';
import BottomBar from './Common/BottomNavBar';
import Inprop from './Pages/InpropPage/Inprop';
import LandingComunity from './Pages/Sign up/LandingComunity.jsx';

function App() {
  const location = useLocation();
  const noNavbarPaths = ['/SignupQ', '/'];
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Set the duration in milliseconds
  }, []);

  if (loading) {
    return <SplashLoader />;
  }

  return (
    <>
      {!noNavbarPaths.includes(location.pathname) && <Navbars /> &&  <BottomBar />}
      {/* <BottomBar /> */}
      <Routes>
        <Route path='/' element={<LandingComunity />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/SignupQ' element={<SignupQ />} />
        <Route path='/PropertiesPage' element={<PropertiesPage />} />
        <Route path="/DetailPage/:id" element={<DetailPage />} />
        <Route path='/Acosites' element={<Acosites />} />
        <Route path='/ProjectPage' element={<ProjectPage />} />
        <Route path='/Investor' element={<Investor />} />
        <Route path='/Sourcer' element={<Sourcer />} />
        <Route path='/Inprop' element={<Inprop />} />
        <Route path='/LandingComunity' element={<LandingComunity />} />
      </Routes>
    </>
  );
}

function MainApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default MainApp;
