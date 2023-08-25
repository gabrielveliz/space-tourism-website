import React from 'react';
import { Link } from "react-router-dom";
import logo from "../assets/shared/logo.svg";
import logomenu from "../assets/shared/icon-hamburger.svg";
import cerrar from "../assets/shared/icon-close.svg";
import "../hojas-de-estilo/Menu.css" ;


function Menu({nu}){
  return(
    <>
    <div className='menudesk'><MenuDesk nu={nu}></MenuDesk></div>
    <div className='menumobile'><MenuMob nu={nu}></MenuMob></div>
    </>
  );
}

function MenuDesk({nu}){
  return(
  <div className='cont_menu'>
  <div className='logo'><img src={logo} alt="logo" /></div>
  <div className='linea'><div></div></div>
  <nav>

    <Link to="/" style={{ textDecoration: 'none' }}><div className={
            nu===1 ? 'selecppal' : ''}>
      <span className='bold'>00</span><span className='textmen'> Home</span></div>
    </Link>
    <Link to="/Destination" style={{ textDecoration: 'none' }}><div className={
            nu===2 ? 'selecppal' : ''}>
      <span className='bold'>01</span><span className='textmen'>Destination</span></div>
    </Link>
    <Link to="/Crew" style={{ textDecoration: 'none' }}><div className={
            nu===3 ? 'selecppal' : ''}>
      <span className='bold'>02</span><span className='textmen'>Crew</span></div>
    </Link>
    <Link to="/Technology" style={{ textDecoration: 'none' }}><div className={
            nu===4 ? 'selecppal' : ''}>
      <span className='bold'>03</span><span className='textmen'>Technology</span></div>
    </Link>

  </nav>
</div>
  );
}
function MenuMob({nu}){
  let aux = 0;
  return(
  <div className='cont_menu_mob'>
    
    <nav id='menumob'>
    <div className={
            nu===1 ? 'selecppal' : ''}><Link to="/" style={{ textDecoration: 'none' }}>
      <span className='bold'>00</span><span className='textmen'> Home</span>
    </Link></div>
    <div className={
            nu===2 ? 'selecppal' : ''}><Link to="/Destination" style={{ textDecoration: 'none' }}>
      <span className='bold'>01</span><span className='textmen'>Destination</span>
    </Link></div>
    <div className={
            nu===3 ? 'selecppal' : ''}><Link to="/Crew" style={{ textDecoration: 'none' }}>
      <span className='bold'>02</span><span className='textmen'>Crew</span>
    </Link></div>
    <div className={
            nu===4 ? 'selecppal' : ''}><Link to="/Technology" style={{ textDecoration: 'none' }}>
      <span className='bold'>03</span><span className='textmen'>Technology</span>
    </Link></div>
  </nav>
  <div className='logo_mob'><img src={logo} alt="logo" /></div>
  <div className='menucerrar' onClick={abrircerrar}><img id='lgmen' src={logomenu} alt="logomenu" /><img id='lgcer' src={cerrar} alt="logocerrar" /></div>

</div>
  );
  function abrircerrar(){
    if(aux===0){
      document.getElementById("lgmen").style.display="none";
      document.getElementById("lgcer").style.display="flex";
      document.getElementById("menumob").classList.add("animate");
      document.getElementById("menumob").classList.remove("animate2");
      
      
      aux = 1;
    }else{
      document.getElementById("lgcer").style.display="none";
      document.getElementById("lgmen").style.display="flex";
      document.getElementById("menumob").classList.remove("animate");
      document.getElementById("menumob").classList.add("animate2");
      aux = 0;
    }
  }
}


export default Menu;