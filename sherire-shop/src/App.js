import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Footer from './pages/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';  
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Contact from './pages/ContactUs';
import Devlopment from './pages/Devlopment';
import Scholarship from './pages/Scholarship';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/login' exact element={<Login />} />
          <Route path='/register' exact element={<Register />} />
          <Route path='/contact-us' exact element={<Contact />} />
          <Route path='/development' exact element={<Devlopment />} />
          <Route path='/scholarship' exact element={<Scholarship />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
