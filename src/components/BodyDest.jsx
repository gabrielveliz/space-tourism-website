import React from 'react';
import "../hojas-de-estilo/BodyDest.css";
import Planets from "./Planets"


function BodyDest(){
  
  return(
  <div className='contdest'>
    <div className='pick'><span className='picknum'>01 </span><span className='picktex'>Pick your destination</span></div>
    <Planets></Planets>
  </div>
  );
}



export default BodyDest;