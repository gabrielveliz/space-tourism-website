import React from 'react';
import "../hojas-de-estilo/BodyDest.css";
import Planets from "./Planets"


function BodyDest(){
  
  function mostrar(id){
    for(var i=1; i<5;i++)
    {
      document.getElementById("p"+i).style.display="none";
      document.getElementById("m"+i).style.borderBottom="2px rgba(228, 228, 228, 0) solid";
      document.getElementById("m"+i).style.color="#bcc2cb";
    }

    document.getElementById("p"+id).style.display="grid";
    document.getElementById("m"+id).style.borderBottom="2px white solid";
    document.getElementById("m"+id).style.color="white";

  }


  return(
  <div className='contdest'>
    <div className='pick'><span className='picknum'>01 </span><span className='picktex'>Pick your destination</span></div>
    <div className='cnm'> 
      <div>
      
      </div>
      <div className='submenuplan'>
        <div className='ms moon' id='m1' onClick={() => mostrar(1)}><span>MOON</span></div>
        <div className='ms'  id='m2' onClick={() => mostrar(2)}><span>MARS</span></div>
        <div className='ms'  id='m3' onClick={() => mostrar(3)}><span>EUROPA</span></div>
        <div className='ms'  id='m4' onClick={() => mostrar(4)}><span>TITAN</span></div>
      </div>
    </div>
    
    
    
    <Planets></Planets>
    
  </div>
  );
}



export default BodyDest;