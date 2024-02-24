import React from 'react';
import ReactDOM from 'react-dom/client';

function About() {
  return (
    <div  >
      <div className='above' ></div>
        <div className='about'>
        <span className='divcol' >Welcome to our website!</span><br></br>

          At <span className='divcol' > Nebulae Explore</span>, we are passionate about exploring the wonders of the universe. Our mission is to bring you the awe-inspiring beauty of space right to your fingertips, using NASA's incredible APIs.

          We have integrated the <span className='divcol' >NASA API "APOD"</span>(Astronomy Picture of the Day) to showcase daily breathtaking images and fascinating explanations of celestial phenomena. Each day, you'll discover a new captivating snapshot that will leave you marveling at the vastness and complexity of our cosmos.

          Additionally, we have harnessed the power of NASA's "Image and Video Library" to curate a mesmerizing collection of visual treasures. Explore a vast archive of space missions, historic moments, and discoveries that have shaped our understanding of the universe.

          Whether you are an avid space enthusiast, a science lover, or simply someone looking to be inspired, our website is your gateway to the cosmos. Join us on this celestial journey as we unlock the mysteries of space and unravel the wonders of the universe together.

         <br></br> <span className='divcol' >Thank you for visiting, and happy stargazing!</span>
        </div>
    </div>
  )
}

export default About