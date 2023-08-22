import React from 'react';
import { Link } from "react-router-dom";
import logo from "../assets/shared/logo.svg";
import "../hojas-de-estilo/Menu.css" ;

function Menu(){
  return(
    <div className='cont_menu'>
      <div className='logo'><img src={logo} alt="logo" /></div>
      <div className='linea'><div></div></div>
      <nav>

        <div><Link to="/" style={{ textDecoration: 'none' }}>
          <span className='bold'>00</span><span className='textmen'> Home</span>
        </Link></div>
        <div><Link to="/Destination" style={{ textDecoration: 'none' }}>
          <span className='bold'>01</span><span className='textmen'>Destination</span>
        </Link></div>
        <div><Link to="/Crew" style={{ textDecoration: 'none' }}>
          <span className='bold'>02</span><span className='textmen'>Crew</span>
        </Link></div>
        <div><Link to="/Technology" style={{ textDecoration: 'none' }}>
          <span className='bold'>03</span><span className='textmen'>Technology</span>
        </Link></div>

      </nav>
    </div>
  );
  
}

export default Menu;