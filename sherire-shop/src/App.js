import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';  

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
