import React from 'react';
import { ReactDOM } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { AiOutlineAlignRight } from 'react-icons/ai';
import {useState} from 'react';
import {Link, NavLink} from 'react-router-dom'
import './index.css';
import galaxy from "./asset/galaxy.png";

function Navbar() {
    const [nav, setNav] = useState(false);
    function hiddeMenu() {
        setNav(!nav)}
 
    return<div>
        <div className="navdiv" > 
            <div className=" items-center flex">
                <h1 className=" Itext-white font-bold text-white">  
                    <li className="pr-4"><Link to='/'>
                        {/* <img src={galaxy} class="Logo_Nasa" width="180" height="150" /> */}
                        <img src={galaxy}  className="pr-4  w-90 h-12 ml-2 mb-3 rounded-lg" alt="this logo img" /> 
                        </Link></li>
                </h1>
            </div>
            <div className="pr-4 flex">
                <ul className="hidden md:flex justify-beween font-bold text-sm mr-10 text-white">
                    <li className="pr-4"><NavLink to='/'  className={({ isActive }) => (isActive ? "link-active" : "link")}>Home</NavLink></li>
                    <li className="pr-4"><NavLink to='/astronomy_video' className={({ isActive }) => (isActive ? "link-active" : "link")}>Astronomy videos</NavLink></li>
                    <li className="pr-4"><NavLink to='/astronomy_img' className={({ isActive }) => (isActive ? "link-active" : "link")} >Astronomy imges</NavLink></li>
                    <li className="pr-4"><NavLink to='/about'  className={({ isActive }) => (isActive ? "link-active" : "link")}>About us</NavLink></li>
                </ul>
            </div>

            <div className="md:hidden">
                {!nav ? <AiOutlineAlignRight className="text-white w-12" onClick={hiddeMenu}/> : 
                <AiOutlineClose className=" w-12" onClick={hiddeMenu}/>}
            </div>
       
        </div>
        {nav ? <div className="middnav ">
            <ul className="md:hidden font-bold text-sm mr-10 text-gray-600 w-full h-f pr-4 absolute">
                <li className="p-3"><NavLink to='/' onClick={hiddeMenu}  className={({ isActive }) => (isActive ? "link-active" : "link")}>Home</NavLink></li>
                <li className="p-3"><NavLink to='/astronomy_video' onClick={hiddeMenu} className={({ isActive }) => (isActive ? "link-active" : "link")}>Astronomy videos</NavLink></li>
                <li className="p-3"><NavLink to='/astronomy_img' onClick={hiddeMenu} className={({ isActive }) => (isActive ? "link-active" : "link")} >Astronomy imges</NavLink></li>
                <li className="p-3"><NavLink to='/about' onClick={hiddeMenu} className={({ isActive }) => (isActive ? "link-active" : "link")}>About us</NavLink></li>
            </ul>
        </div> : ""}

    </div>
  
}

export default Navbar;