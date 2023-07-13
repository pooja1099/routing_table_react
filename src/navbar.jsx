import React from 'react'
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <>
        <nav className='container'>
        <div className='content' style={{display:'inline-block'}}>
            
            <p><Link className="nav-link" to="/main">Home</Link></p>
            <p><Link className="nav-link" to="/About">About</Link></p>
            <p><Link className="nav-link" to="/ContactUs">ContactUs</Link></p>
            <p><Link className="nav-link" to="/Data">Data</Link></p>
        </div>
        </nav>
    </>
  )
}

export default Navbar