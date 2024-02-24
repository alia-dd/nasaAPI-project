import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState,useEffect } from 'react'
import VideoPreviews from './VideoPreviews';
import mercury from './asset/mercury.png';
import venus from './asset/venus.png';
import earth from './asset/earth.png';
import mars from './asset/mars.png';
import jupiter from './asset/jupiter.png';
import saturn from './asset/saturn.png';
import uranus from './asset/uranus.png';
import neptune from './asset/neptune.png';


const apiKeyUno = process.env.REACT_APP_NASA_KEY;

function Astronomy_video() {
  const [count,setCount] = useState(0);
  const [search, setSearch] = useState("");
  const [search2, setSearch2] = useState("");
  const [photos, setPhotos] = useState([]);

  
  useEffect(()=> {
    setCount(photos.length);
  },[photos]);

  useEffect(()=> {
   
    // setSearch(search2);
    setSearch("");
    if(search2 !="")
      fetchPhotoD();
    async function fetchPhotoD(){
      setPhotos([]);
      const results = await fetch(`https://images-api.nasa.gov/search?media_type=video&q=${search2}`);
      const previews = await results.json();
      setPhotos(await previews.collection.items); 
    }
   
  },[search2]);
  
  useEffect(()=> {
    fetchPhotoD();
    async function fetchPhotoD(){
      setPhotos([]);
      const results = await fetch(`https://images-api.nasa.gov/search?q=${search}&media_type=video`, {
        headers: {
            'Authorization': apiKeyUno,
        }
    })
      //  fetch(`https://images-api.nasa.gov/search?media_type=video&q=${search}`);
      const previews = await results.json();
      setPhotos(await previews.collection.items); 
      
    }
    console.log(photos.href);
  },[]);
 

  if(!photos) return <div className='empt'></div>;

  return (
    <div>
      <div className='searchdiv'>
        
          <p className='text-white pr-4 text-lg' id='numresult'>number of results found {count}</p>
         <input className="pr-4 mt-10" class="SearchBarHome" id="nasaSearch"
            onChange={(e) => setSearch(e.target.value)}
            type="text"
           placeholder="Search for an image"></input>

          <button className="button"   onClick={async () => {
              setPhotos([]);
              const results = await fetch(`https://images-api.nasa.gov/search?media_type=video&q=${search}`);
              // https://images-api.nasa.gov/search?media_type=video&keywords=nasa&description=true&api_key=${apiKey}`;
              const previews = await results.json();
              setPhotos(await previews.collection.items);
              
              setSearch("");
              
           }}> Search </button>
        </div>
        
      <div className="px-4 flex justify-between   ">
        <div className=" items-center flex"></div>
            <div className="pr-4 flex">
                <ul className="flex justify-beween font-bold text-sm mr-10 mt-6 text-white">
                    <li onClick={async () => {setSearch2("mercury"); }} className="pr-4"><img src={mercury}  className="pr-4  w-90 h-12 ml-2 mb-3 rounded-lg" alt="this logo img" /> </li>
                    <li onClick={async () => {setSearch2("venus"); }} className="pr-4"><img src={venus}  className="pr-4  w-90 h-12 ml-2 mb-3 rounded-lg" alt="this logo img" /> </li>
                    <li onClick={async () => {setSearch2("earth"); }} className="pr-4"><img src={earth}  className="pr-4  w-90 h-12 ml-2 mb-3 rounded-lg" alt="this logo img" /> </li>
                    <li onClick={async () => {setSearch2("mars"); }} className="pr-4"><img src={mars}  className="pr-4  w-90 h-12 ml-2 mb-3 rounded-lg" alt="this logo img" /> </li>
                    <li onClick={async () => {setSearch2("jupiter"); }} className="pr-4"><img src={jupiter}  className="pr-4  w-90 h-12 ml-2 mb-3 rounded-lg" alt="this logo img" /> </li>
                    <li onClick={async () => {setSearch2("saturn"); }} className="pr-4"><img src={saturn}  className="pr-4  w-90 h-12 ml-2 mb-3 rounded-lg" alt="this logo img" /> </li>
                    <li onClick={async () => {setSearch2("uranus"); }} className="pr-4"><img src={uranus}  className="pr-4  w-90 h-12 ml-2 mb-3 rounded-lg" alt="this logo img" /> </li>
                    <li onClick={async () => {setSearch2("neptune"); }} className="pr-4"><img src={neptune}  className="pr-4  w-90 h-12 ml-2 mb-3 rounded-lg" alt="this logo img" /> </li>       
                  </ul>
            </div>
        </div>    

        <div className="bg-slate-900">
          <div>
     { photos.map((preview,index) => (
              
                <VideoPreviews
                  key={index}     
                  nasaPicture={preview.links[0].href}
                  title={preview.data[0].title}
                  description={preview.data[0].description}
                />               
              ))
            }   
        
          </div>
        </div>

    </div>
  )
}

export default Astronomy_video