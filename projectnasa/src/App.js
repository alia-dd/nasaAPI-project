import React from 'react';
import ReactDOM from 'react-dom/client';
import {Route,Routes, BrowserRouter,Link} from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Astronomy_video from './Astronomy_video';
import Astronomy_img from './Astronomy_img';
import About from './About';
import Footer from './Footer';
import './index.css';
function App() {
  return(
  <div>
    {<Navbar/>}
    <Routes>
      <Route element={<Home/>} path="/" exact />
      <Route element={<Astronomy_video/>} path="/astronomy_video"/>
      <Route element={<Astronomy_img/>} path="/astronomy_img" />
      <Route element={<About/>} path="/about"/>
    </Routes>
    {<Footer/>}
  </div>
  );
}

export default App;
