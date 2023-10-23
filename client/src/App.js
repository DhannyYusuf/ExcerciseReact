import logo from './logo.svg';
import './App.css';
import { Register,LoginUser,NavbarPage,Contact,HomePage,NavbarLogin } from './component';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { Routes, BrowserRouter,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
         <Route path="/" element={<NavbarLogin/>}></Route>
         <Route path="/register" element={<Register/>}></Route>
         <Route path="/login" element={<LoginUser/>}></Route>
         <Route path="/home" element={<NavbarPage/>}></Route>
          <Route index element={<HomePage/>} />
         <Route path="/home/contact" element={<Contact/>}></Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
