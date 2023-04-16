// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Home from './Pages/Home Page/Home';
import Login from '../src/Pages/Login/Login';
import Signup from './Pages/Sign up/Signup';
import DetailPage from './Pages/Detail Page/DetailPage';
import { BrowserRouter, Routes ,Route } from "react-router-dom";
function App() {
  return (
    <>

   
    
    
  
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <Home/>} />
      <Route path='/Home' element={ <Home/>} />
      <Route path='/Login' element={  <Login/>} />
      <Route path='/Signup' element={ <Signup/>} />
      <Route path='/DetailPage' element={   <DetailPage/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
