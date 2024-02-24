import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState,useEffect } from 'react'
import './index.css';
import galaxy from "./asset/tempbg.jpg";

const apiKeyUno = process.env.REACT_APP_NASA_KEY;
function Home() {

  const[photoD, setPhotoD] = useState(null);
  useEffect(()=> {
    fetchPhotoD();
    async function fetchPhotoD(){
      const result = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKeyUno}`);
      const data = await result.json();
      setPhotoD(data);
    }
  },[]);

  if(!photoD) return <div className='empt'></div>;

  return (
    <div>
      <div className='imgod'>
      {photoD.media_type ==="image" ? (
      <img src={photoD.url} alt={photoD.title} className='photo' />): (
        <iframe title ="space-video"
            src={photoD.url}
            frameBorder="0"
            gesture="media"
            allow="encrypted-media"
            allowFullScreen
            className='photo'/>)}
      
        <div id="textofday">
              <h1>{photoD.title}</h1>
              <p className='date'>{photoD.date}</p>
              <p className='explanation'>{photoD.explanation}</p>
        </div>
      </div>
    </div>
  );
}

export default Home
