// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './components/Nav';
import Home from "./components/Home";
import About from './components/About';
import Login from './components/Login';
import Contfeed from './components/Contfeed';
import Signup from './components/Signup';
import WebBuilder from './components/WebBuilder';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="Home" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Contfeed" element={<Contfeed />} />
          <Route path="Signup" element={<Signup />} />
          <Route path="Login" element={<Login />} />
          <Route path="builder" element={<WebBuilder />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
