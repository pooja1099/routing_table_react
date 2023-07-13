import React from 'react'
import {Link} from "react-router-dom";
import './App.css';

const Navbar = () => {
  return (
    <>
        <nav className='container'>
        <div className='content' >
            
            <p id='mytext'><Link className="nav-link" to="/main">Home</Link></p>
            <p id='mytext'><Link className="nav-link" to="/About">About</Link></p>
            <p id='mytext'><Link className="nav-link" to="/ContactUs">ContactUs</Link></p>
            <p id='mytext'><Link className="nav-link" to="/Data">Data</Link></p>
        </div>
        </nav>
    </>
  )
}

export default Navbar