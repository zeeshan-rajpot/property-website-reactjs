// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";     
    
//core
import "primereact/resources/primereact.min.css";                                       
        

import { BrowserRouter, Routes ,Route } from "react-router-dom";
import Home from './Pages/Home Page/Home';
import Login from '../src/Pages/Login/Login';
import Signup from './Pages/Sign up/Signup';
import DetailPage from './Pages/Detail Page/DetailPage';
import PropertiesPage from './Pages/PropertiesPage/PropertiesPage';
import Acosites from './Pages/Asociates/Acosites.js';
import SignupQ from './Pages/Sign up/SignupQ';
import ProjectPage from './Pages/Project Page/ProjectPage';
import Modals from '../src/Pages/Sign up/Modals';
import Test from './Pages/ApiTest/ApiTest';
function App() {
  return (
    <>

   
    
    
  
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <Home/>} />
      <Route path='/Home' element={ <Home/>} />
      <Route path='/Login' element={  <Login/>} />
      <Route path='/Signup' element={ <Signup/>} />
      <Route path='/SignupQ' element={ <SignupQ/>} />
      <Route path='/PropertiesPage' element={ <PropertiesPage/>} />
      <Route path='/DetailPage' element={   <DetailPage/>} />

      <Route path='/Acosites' element={   <Acosites/>} />
      <Route path='/ProjectPage' element={   <ProjectPage/>} />
      <Route path='/Modals' element={   <Modals/>} />
      <Route path='/Test' element={   <Test/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
