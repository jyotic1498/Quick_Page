// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Nav';
import Home from "./components/Home";
import About from './components/About';
import Login from './components/Login';
import Contfeed from './components/Contfeed';
import Signup from './components/Signup';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="Home" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Contfeed" element={<Contfeed />} />
          <Route path="Signup" element={<Signup />} />
          <Route path="Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
