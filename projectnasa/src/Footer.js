import React from 'react'
import './Footer.css'
import galaxy from "./asset/galaxy.png";
import facebook from "./asset/facebook_40px.png";
import instagram from "./asset/instagram_40px.png";
import youtube from "./asset/youtube_60px.png";
import twitter from "./asset/twitter_40px.png";

function Footer() {
  return (
    <div>
        <footer class="footer">
            {/* <div className='icon' > <img src={galaxy} alt="this logo img" /> hello</div> */}
            
        <div className='text-white' id="footer-left" >
            {/* <img src={codelog} alt=""></img> */}
            <div className='icon' > <img src={galaxy} alt="this logo img" /></div>

            Discover NASA's Social Universe!!
            <br></br>
            Follow the stars and stay connected with the latest 
            updates from NASA through our social media channels. 
            Here's where you can find us:
            <div class="socials">
                <a href='https://www.facebook.com/NASA/'><i><img src={facebook} alt="NASA facebook" /></i></a>
                <a href='https://www.instagram.com/nasa_es/'><i><img src={instagram} alt="NASA instagram" /></i></a>
                <a href='https://www.youtube.com/@NASA'><i><img src={youtube} alt="NASA youtube" /></i></a>
                <a href='https://twitter.com/nasa'><i><img src={twitter} alt="NASA twitter" /></i></a>
            </div>
            Join our cosmic community and be part of the exciting journey 
            through the wonders of space exploration. Stay informed, inspired, 
            and engaged with the latest news, breathtaking images, and fascinating discoveries from the depths of the
            universe. Let's explore the cosmos together! 💫🌟🚀
            
        </div>
        <ul class="footer-right">
            <li>
                <h2 class="navhead">product</h2>
                <ul class="box">
                    <li><a href="#">theme design</a></li>
                    <li><a href="#">theme design</a></li>
                    <li><a href="#">theme design</a></li>
                    <li><a href="#">theme design</a></li>
                    <li><a href="#">theme design</a></li>
                </ul>
            </li>
            <li class="features">
                <h2 class="navhead">links</h2>
                <ul class="box">
                    <li><a href="#">theme design</a></li>
                    <li><a href="#">theme design</a></li>
                    <li><a href="#">theme design</a></li>
                    <li><a href="#">theme design</a></li>
                    <li><a href="#">theme design</a></li>
                </ul>
            </li>
            <li>
                <h2 class="navhead">address</h2>
                <ul class="box">
                    <li><a href="#">theme design</a></li>
                    <li><a href="#">theme design</a></li>
                    <li><a href="#">theme design</a></li>
                    <li><a href="#">theme design</a></li>
                    <li><a href="#">theme design</a></li>
                </ul>
            </li>
        </ul>
        <div class="footer-bottom">
            <p>copy right 2023</p>
        </div>
    </footer>
    </div>
  )
}

export default Footer